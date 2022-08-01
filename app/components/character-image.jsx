import { images } from "~/urls"
import { styled } from "~/styles"

const StyledImage = styled("img", {
	aspectRatio: "8 / 11"
})

export function CharacterImage({
	characterId,
	characterName,
	...props
}) {
	const imageUrl = images.character(characterId)

	return (
		<StyledImage
			src={imageUrl}
			alt={`image of ${characterName}`}
			title={characterName}
			{...props} />
	)
}
