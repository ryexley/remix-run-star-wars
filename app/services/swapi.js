import { HttpClient } from "./http-client"
import { api } from "../urls"

export class StarWarsApiClient {
	constructor({ isolate = false } = {}) {
		this.http = new HttpClient(api.baseUrl)
		this.isolate = isolate
	}

	async getDataFromUrl({ urlPath }) {
		return this.http.get(urlPath, null, {})
	}

	async searchCharacters({ query }) {
		return this.http.get(api.characters, `search=${query}`, {})
	}

	async getCharacterProfile(characterId) {
		return this.http.get(api.character(characterId), null, {})
	}
}
