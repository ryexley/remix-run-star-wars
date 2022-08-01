import { HttpClient } from "./http-client"
import { api } from "../urls"

export class StarWarsApiClient {
	constructor({ isolate = false } = {}) {
		this.http = new HttpClient(api.baseUrl)
		this.isolate = isolate
	}
}
