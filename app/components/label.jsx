import * as LabelPrimitive from "@radix-ui/react-label"
import { styled } from "~/styles"

export const Label = styled(LabelPrimitive.Root, {
	color: "$white",
	cursor: "pointer",
	fontSize: "1rem",
	fontWeight: "500",
	userSelect: "none"
})
