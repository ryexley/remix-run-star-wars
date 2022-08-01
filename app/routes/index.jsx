import { useLoaderData } from "@remix-run/react"
import { MainLayout } from "~/layouts/main"
import { StarWarsApiClient } from "../services/swapi"

export async function loader() {
  const swapi = new StarWarsApiClient()

  const { status, data } = await swapi.searchCharacters({ query: "lo" })

  return { searchResults: data }
}

export default function Index() {
  const { searchResults } = useLoaderData()

  return (
    <MainLayout>
      Lifeway coding exercise - Remix.run SWAPI app
    </MainLayout>
  )
}
