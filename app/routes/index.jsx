import { MainLayout } from "~/layouts/main"
import { SearchForm } from "~/components/search-form"
import { pages } from "~/urls"
import { styled } from "~/styles"

const CharacterSearch = styled(SearchForm, {
	margin: "10rem 20%",
})

export default function Index() {
  return (
    <MainLayout>
    	<CharacterSearch
				method="get"
				action={pages.search} />
    </MainLayout>
  )
}
