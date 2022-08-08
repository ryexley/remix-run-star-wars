import { Loader } from "~/components/icons"
import { styled } from "~/styles"
import { isNotEmpty } from "~/util"

const Box = styled("div", {
	display: "flex",
	flexDirection: "row",
	gap: "1rem",
})

const Icon = styled(Loader, {
	"--size": "2rem",
	color: "$white",
	height: "var(--size)",
	width: "var(--size)",
})

const Label = styled("span", {
	color: "$white",
	fontSize: "2rem",
})

export function LoadingIndicator({ label, ...props }) {
	return (
		<Box {...props}>
			<Icon />
			{isNotEmpty(label) ? <Label>{label}</Label> : null}
		</Box>
	)
}
