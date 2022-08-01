import { styled } from "~/styles"

const MainContent = styled("main")

export function MainLayout({ children }) {
	return (
		<MainContent>{children}</MainContent>
	)
}
