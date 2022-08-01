import { Form } from "@remix-run/react"
import { Label } from "~/components/label"
import { TextInput } from "~/components/text-input"
import { styled } from "~/styles"

const StyledForm = styled(Form, {
	alignItems: "center",
	display: "flex",
	justifyContent: "center",
	padding: "2rem",
})

const SearchInputLabel = styled(Label, {
	display: "flex",
	fontSize: "2rem",
	justifyContent: "center",
	marginBottom: "1rem",
	width: "100%",
})

const SearchInput = styled(TextInput, {
	backgroundColor: "$whiteA12",
	fontSize: "2.5rem",
	padding: "0.75rem 1rem",

	"> div": {

	},

	"span[role=label]": {
		fontSize: "1.5rem",
	}
})

export function SearchForm({ ...props }) {
	return (
		<StyledForm
			id="character-search"
			{...props}>
			<SearchInput
				id="q"
				name="q"
				customLabel={SearchInputLabel}
				labelText="Search for a character"
				autoFocus />
		</StyledForm>
	)
}
