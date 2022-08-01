import { Link } from "@remix-run/react"
import { pages } from "~/urls"
import { styled } from "~/styles"

const headerHeight = "5.4375rem"

const StyledHeader = styled("header", {
	backgroundColor: "$black",
	backgroundImage: "url(/images/stars-horizontal.jpg)",
	backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  overflow: "hidden",
  width: "100%",
})

const HomeLink = styled(Link, {
	alignItems: "center",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	textDecoration: "none",
	width: "100%",
})

const HeaderImage = styled("img", {
	height: headerHeight,
})

const PageHeading = styled("h1", {
	fontSize: "1rem",
	fontWeight: "600",
	margin: "0 0 1rem 0",
	textTransform: "uppercase",
})

export function Header() {
	return (
		<StyledHeader>
			<HomeLink to={pages.home}>
				<HeaderImage
					src="/images/star-wars-horizontal.jpg"
					alt="Star Wars horizontal logo"
					title="Star Wars" />
				<PageHeading>Character Profiles</PageHeading>
			</HomeLink>
		</StyledHeader>
	)
}
