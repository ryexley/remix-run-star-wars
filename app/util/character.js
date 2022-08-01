export function getCharacterIdFromUrl(url) {
	const urlSegments = url.split("/")

	return urlSegments[5] ?? -1
}

export function getMovieIdFromUrl(url) {
	const urlSegments = url.split("/")

	return urlSegments[5] ?? -1
}

export function getResourcePath(url) {
	const path = new URL(url).pathname

	return path.replace("/api", "")
}
