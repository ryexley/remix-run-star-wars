import { Header } from "~/components/header"
import { styled } from "~/styles"

const MainContent = styled("main", {
	margin:  "0 auto",

	"@ml": {
		width: "60rem"
	}
})

export function MainLayout({ children }) {
	return (
		<>
			<Header />
			<MainContent>{children}</MainContent>
		</>
	)
}
