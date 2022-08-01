import { useId } from "@reach/auto-id"
import { Label } from "./label"
import { isNotEmpty } from "~/util"
import { styled } from "~/styles"

const Box = styled("div", {
	alignItems: "center",
	display: "flex",
	flexWrap: "wrap",
	width: "100%",
})

const Input = styled("input", {
	all: "unset",
	alignItems: "center",
	backgroundColor: "$whiteA8",
	borderRadius: "0.25rem",
	boxShadow: "0 0 0 0.0625rem $colors$blackA9",
	display: "inline-flex",
	justifyContent: "center",
	padding: "0.25rem 0.625rem",
	smoothTransition: "all",
	width: "100%",

	"&:focus": {
		boxShadow: "0 0 0 0.0625rem $colors$black"
	}
})

export function TextInput({
	id,
	name,
	labelText,
	customLabel,
	hideLabel = false,
	...props
}) {
	const internalId = useId()

	const inputProps = {
		type: "text",
		id,
		name,
		...(hideLabel ? { "aria-labelledby": internalId } : {}),
		...props
	}

	const renderLabel = () => {
		if (isNotEmpty(customLabel)) {
			const CustomLabel = customLabel
			return (
				<CustomLabel htmlFor={id}>{labelText}</CustomLabel>
			)
		}

		if (hideLabel) {
			return (
				<span aria-hidden="true" id={internalId}>{labelText}</span>
			)
		}

		return (
			<Label htmlFor={id}>{labelText}</Label>
		)
	}

	return (
		<Box>
			{renderLabel()}
			<Input {...inputProps} />
		</Box>
	)
}
