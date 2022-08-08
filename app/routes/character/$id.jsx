import { useLoaderData, useTransition } from "@remix-run/react"
import { MainLayout } from "~/layouts/main"
import { StarWarsApiClient } from "~/services/swapi"
import { CharacterImage } from "~/components/character-image"
import { LoadingIndicator } from "~/components/loading-indicator"
import { images } from "~/urls"
import { isNotEmpty } from "~/util"
import { getMovieIdFromUrl, getResourcePath } from "~/util/character"
import { styled } from "~/styles"

const Loading = styled(LoadingIndicator, {
	justifyContent: "center",
	margin: "5rem auto"
})

const Heading = styled("h1", {
	color: "$white",
	fontSize: "3rem",
	margin: "2rem",
	textAlign: "center",
})

const CharacterProfile = styled("div", {
	display: "flex",
	flexDirection: "row",
	gap: "2rem",
	margin: "2rem",

	p: {
		color: "$white",
	}
})

const ProfileImage = styled(CharacterImage, {
	borderRadius: "1rem",
})

const CharacterDetails = styled("ul", {
	color: "$white",
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	gap: "2rem",
	listStyle: "none",

	"li": {
		display: "flex",
		flexDirection: "column",
		width: "8rem",
	}
})

const CharacterDetailLabel = styled("span", {
	color: "$whiteA10",
	fontSize: "0.85rem",
})

const CharacterDetail = styled("span", {
	fontSize: "1.5rem",
	textTransform: "capitalize",
})

const CharacterDetailsSeparator = styled("hr", {
	border: "none",
	borderBottom: "0.0625rem solid $whiteA7",
	height: "0.0625rem",
	margin: "2rem 0",
})

const CharacterDetailsHeading = styled("h3", {
	color: "$blue9",
	fontSize: "2rem",
	fontWeight: "500",
	marginBottom: "2rem",
})

const Starships = styled("ul", {
	color: "$white",
	display: "flex",
	flexDirection: "column",
	flexWrap: "wrap",
	gap: "2rem",
	listStyle: "none",
	margin: "1rem 0",

	"li": {
		display: "flex",
		flexDirection: "column",
	}
})

const StarshipName = styled("h4", {
	color: "$blue11",
	fontSize: "1.25rem",
	fontWeight: "500",
	margin: "0 0 0.5rem 0",
})

const StarshipDetail = styled("div", {
	display: "flex",
	flexWrap: "wrap",
	margin: "0.25rem 0",
})

const StarshipDetailLabel = styled("span", {
	color: "$whiteA10",
	fontSize: "0.85rem",
	width: "7rem",
})

const StarshipDetailValue = styled("span", {
	fontSize: "0.85rem",
})

const Films = styled("ul", {
	display: "flex",
	flexDirection: "row",
	flexWrap: "wrap",
	gap: "2rem",
	listStyle: "none",
	margin: "1rem 0",

	"li": {
		display: "flex",
		flexDirection: "column",
		width: "8rem",
	}
})

const FilmImage = styled("img", {
	borderRadius: "0.5rem",
	height: "12.5rem",
	width: "9.0625rem",
})

export async function loader({ params }) {
	const swapi = new StarWarsApiClient()
	const { status: characterResponseStatus, data: characterData } = await swapi.getCharacterProfile(params.id)
	const { status: planetResponseStatus, data: planetData } = await swapi.getDataFromUrl({ urlPath: getResourcePath(characterData.homeworld) })
	const species = await Promise.all(characterData.species.map(s => swapi.getDataFromUrl({ urlPath: getResourcePath(s) })))
	const films = await Promise.all(characterData.films.map(film => swapi.getDataFromUrl({ urlPath: getResourcePath(film) })))
	const starshipsFlown = await Promise.all(characterData.starships.map(starship => swapi.getDataFromUrl({ urlPath: getResourcePath(starship) })))

	return {
		characterData: {
			id: params.id,
			...characterData,
			homeworld: planetData,
			species: species.map(s => s.data),
			films: films.map(film => film.data),
			starships: starshipsFlown.map(starship => starship.data),
		}
	}
}

export default function Character({ id }) {
	const { characterData } = useLoaderData()
	const { state: transitionState, type: transitionType } = useTransition()
	const characterSpecies = characterData.species.map(s => s.name).join(", ")
	const showSpecies = isNotEmpty(characterSpecies)
	const hasFlownStarships = characterData.starships.length > 0
	const hasAppeardInFilms = characterData.films.length > 0
	const showLoading = transitionState === "loading"

	return (
		<MainLayout>
			{showLoading ? (
				<Loading />
			) : (
				<>
					<Heading>{characterData.name}</Heading>
					<CharacterProfile>
						<ProfileImage
							characterId={characterData.id}
							characterName={characterData.name}
							height={550} width={400} />
						<section>
							<CharacterDetailsHeading>About</CharacterDetailsHeading>
							<CharacterDetails>
								<li>
									<CharacterDetailLabel>Home world</CharacterDetailLabel>
									<CharacterDetail>{characterData.homeworld.name}</CharacterDetail>
								</li>
								{showSpecies ? (
									<li>
										<CharacterDetailLabel>Species</CharacterDetailLabel>
										<CharacterDetail>{characterSpecies}</CharacterDetail>
									</li>
								) : null}
								<li>
									<CharacterDetailLabel>Gender</CharacterDetailLabel>
									<CharacterDetail>{characterData.gender}</CharacterDetail>
								</li>
								<li>
									<CharacterDetailLabel>Birth Year</CharacterDetailLabel>
									<CharacterDetail>{characterData.birth_year}</CharacterDetail>
								</li>
								<li>
									<CharacterDetailLabel>Height</CharacterDetailLabel>
									<CharacterDetail>{characterData.height}</CharacterDetail>
								</li>
								<li>
									<CharacterDetailLabel>Eye Color</CharacterDetailLabel>
									<CharacterDetail>{characterData.eye_color}</CharacterDetail>
								</li>
								<li>
									<CharacterDetailLabel>Hair Color</CharacterDetailLabel>
									<CharacterDetail>{characterData.hair_color}</CharacterDetail>
								</li>
								<li>
									<CharacterDetailLabel>Mass</CharacterDetailLabel>
									<CharacterDetail>{characterData.mass}</CharacterDetail>
								</li>
								<li>
									<CharacterDetailLabel>Skin Color</CharacterDetailLabel>
									<CharacterDetail>{characterData.skin_color}</CharacterDetail>
								</li>
							</CharacterDetails>
							<CharacterDetailsSeparator />
							{hasAppeardInFilms ? (
								<>
									<CharacterDetailsHeading>Films</CharacterDetailsHeading>
									<Films>
										{characterData.films.map(film => {
											const filmId = getMovieIdFromUrl(film.url)
											const filmImageUrl = images.movie(filmId)

											return (
												<li key={`film-${filmId}-item`}>
													<FilmImage
														src={filmImageUrl}
														alt={`image for film: ${film.title}`}
														title={film.title} />
												</li>
											)
										})}
									</Films>
								</>
							) : (
								<p>This character has not appeared in any films.</p>
							)}
							<CharacterDetailsSeparator />
							{hasFlownStarships ? (
								<>
									<CharacterDetailsHeading>Starships Flown</CharacterDetailsHeading>
									<Starships>
										{characterData.starships.map((starship, index) => {
											return (
												<li key={`starship-${index}`}>
													<StarshipName>{starship.name}</StarshipName>
													<StarshipDetail>
														<StarshipDetailLabel>Starship Class: </StarshipDetailLabel>
														<StarshipDetailValue css={{ textTransform: "capitalize" }}>{starship.starship_class}</StarshipDetailValue>
													</StarshipDetail>
													<StarshipDetail>
														<StarshipDetailLabel>Manufacturer: </StarshipDetailLabel>
														<StarshipDetailValue>{starship.manufacturer}</StarshipDetailValue>
													</StarshipDetail>
													<StarshipDetail>
														<StarshipDetailLabel>Model: </StarshipDetailLabel>
														<StarshipDetailValue>{starship.model}</StarshipDetailValue>
													</StarshipDetail>
												</li>
											)
										})}
									</Starships>
								</>
							) : (
								<p>This character has not flown any starships.</p>
							)}
						</section>
					</CharacterProfile>
				</>
			)}
		</MainLayout>
	)
}
