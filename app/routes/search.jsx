import { redirect } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"
import { MainLayout } from "~/layouts/main"
import { StarWarsApiClient } from "~/services/swapi"
import { CharacterImage } from "~/components/character-image"
import { styled } from "~/styles"
import { pages, images } from "~/urls"
import { getCharacterIdFromUrl } from "~/util/character"

const Heading = styled("h1", {
	color: "$white",
	fontSize: "3rem",
	margin: "2rem",
	textAlign: "center",
})

const NoResultsMessage = styled("p", {
	color: "$white",
	textAlign: "center",
})

const SearchResults = styled("ul", {
	display: "flex",
	flexWrap: "wrap",
	gap: "2rem",
	justifyContent: "center",
	listStyle: "none",
	margin: "2rem",
	padding: "0",
})

const SearchResultItem = styled("li",  {
	backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderRadius: "0.5rem",
	color: "$white",
	display: "flex",
	flexDirection: "column",
	height: "12.5rem",
	justifyContent: "flex-end",
	overflow: "hidden",
	width: "9.0625rem",

	"a": {
		backgroundColor: "$blackA11",
		color: "$yellow9",
		display: "flex",
		justifyContent: "center",
		padding: "0.25rem 0.5rem",
		textAlign: "center",
		textDecoration: "none",
	}
})

function goToOnlyResult(character) {
	const characterId = getCharacterIdFromUrl(character.url)

	return redirect(pages.character(characterId))
}

export async function loader({ request }) {
	const url = new URL(request.url)
	const query = url.searchParams.get("q")

	const swapi = new StarWarsApiClient()
	const { status, data } = await swapi.searchCharacters({ query })

	if (data.count === 1) {
		return goToOnlyResult(data.results[0])
	}

	return { searchResults: data, query }
}

export default function Search() {
	const { searchResults, searchResults: { results }, query } = useLoaderData()
	const showNoResults = searchResults.count === 0

	const NoResults = () => (
		<NoResultsMessage>{`There are no results for the search term "${query}", please go back and try again.`}</NoResultsMessage>
	)

	return (
		<MainLayout>
			<Heading>Search Results</Heading>
			{showNoResults ? (
				<NoResults />
			) : (
				<SearchResults>
					{results.map((item, index) => {
						const characterId = getCharacterIdFromUrl(item.url)
						const characterImageUrl = images.character(characterId)
						const searchResultItemStyle = {
							backgroundImage: `url(${characterImageUrl})`
						}

						return (
							<SearchResultItem
								key={`search-result-${index}`}
								css={searchResultItemStyle}>
								<Link to={pages.character(characterId)}>
									{item.name}
								</Link>
							</SearchResultItem>
						)
					})}
				</SearchResults>
			)}
		</MainLayout>
	)
}
