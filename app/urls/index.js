export const pages = {
	home: "/",
	search: "/search",
	character: id => `/character/${id}`
}

export const api = {
	baseUrl: "https://swapi.dev/api/",
	characters: "/people/",
	character: id => `/people/${id}/`
}

export const images = {
	character: id => `https://cdn.githubraw.com/LeonelUbeda/react-star-wars/f4116ea1/public/images/characters/${id}.jpg`,
	movie: id => `https://cdn.githubraw.com/LeonelUbeda/react-star-wars/f4116ea1/public/images/movies/${id}.jpg`
}
