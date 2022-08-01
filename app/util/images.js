import { isNotEmpty } from "."

export const IMAGE_TYPE = {
  JPG: ".jpg",
  PNG: ".png"
}

export const renderSrcSet = ({ img, ext, sizes}) => {
  const srcs = sizes.map(size => `${img}-${size}${ext} ${size}w`)
  return srcs.join(", ")
}

export const renderImageSet = ({ img, sizes, ext }) => {
  const pxDensityIncrement = 0.5
  const calculatePixelDensity = index => {
    if (index < 1) {
      return 1
    }

    return 1 + (index * pxDensityIncrement)
  }

  return sizes.map((size, index) => {
    const pixelDensity = calculatePixelDensity(index)

    return `url("${img}-${size}${ext}") ${pixelDensity}x`
  }).join(", ")
}
