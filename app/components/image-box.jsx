import { renderImageSet, IMAGE_TYPE } from "~/util/images"
import { styled, keyframes } from "~/styles"

const Box = styled("div", {
  overflow: "hidden",
  position: "relative",
  zIndex: "-3",

  variants: {
    light: {
      true: {
        backgroundColor: "#fff"
      }
    },

    dark: {
      true: {
        backgroundColor: "#000"
      }
    }
  }
})

const slideDownFadeIn = keyframes({
  "0%": {
    opacity: 0,
    transform: "translateY(-2.5rem)"
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)"
  }
})

const ImageContainer = styled("div", {
  animation: `${slideDownFadeIn} 1s`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  bottom: 0,
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  width: "100%",
  zIndex: "-1",
  smoothTransition: "all",

  ["&::after"]: {
    bottom: 0,
    content: `""`,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    zIndex: "-2",
    smoothTransition: "all"
  },

  variants: {
    blur: {
      true: {
        ["&::after"]: {
          backdropFilter: "blur(0.5rem)",
        }
      }
    },

    light: {
      true: {
        backgroundColor: "#fff",

        ["&::after"]: {
          background: "rgba(255, 255, 255, 0.75)"
        }
      }
    },

    dark: {
      true: {
        backgroundColor: "#000",

        ["&::after"]: {
          background: "rgba(0, 0, 0, 0.75)"
        }
      }
    }
  },

  compoundVariants: [
    {
      light: "true",
      blur: "true",
      css: {
        ["&::after"]: {
          background: "rgba(255, 255, 255, 0.75)",
        }
      }
    },
    {
      dark: "true",
      blur: "true",
      css: {
        ["&::after"]: {
          background: "rgba(0, 0, 0, 0.75)",
        }
      }
    }
  ]
})

export function ImageBox({
  image,
  sizes,
  imgType,
  blur,
  light,
  dark,
  children,
  ...props
}) {
  const imageSet = renderImageSet({
    img: image,
    sizes,
    ext: imgType
  })
  const imageContainerStyle = {
    backgroundImage: `image-set(${imageSet})`,
    // @ts-ignore
    backgroundImage: `-webkit-image-set(${imageSet})`,
  }

  return (
    <Box
      light={light}
      dark={dark}
      {...props}>
      <ImageContainer
        blur={blur}
        light={light}
        dark={dark}
        css={imageContainerStyle}
        {...props}>
        {children}
      </ImageContainer>
    </Box>
  )
}
