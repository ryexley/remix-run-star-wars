import { useLoaderData } from "@remix-run/react"
import { StarWarsApiClient } from "../services/swapi"

export async function loader() {
  const swapi = new StarWarsApiClient()

  const { status, data } = await swapi.searchCharacters({ query: "lo" })

  return { searchResults: data }
}

export default function Index() {
  const { searchResults } = useLoaderData()

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>

      <ul>
        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/blog"
            rel="noreferrer"
          >
            15m Quickstart Blog Tutorial
          </a>
        </li>

        <li>
          <a
            target="_blank"
            href="https://remix.run/tutorials/jokes"
            rel="noreferrer"
          >
            Deep Dive Jokes App Tutorial
          </a>
        </li>

        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
