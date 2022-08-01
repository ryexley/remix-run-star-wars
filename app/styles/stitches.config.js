import { createStitches } from "@stitches/react"
import {
  slateDark,
  limeDark,
  blackA,
  whiteA,
  orangeDark,
  redDark,
  crimsonDark,
  indigoDark,
  gray,
  grayDark,
} from "@radix-ui/colors"

// type BreakpointKey = "xs" | "s" | "sm" | "m" | "ml" | "l" | "xl" | "xxl" | "xxxl"
// type BreakpointPixels = { [key: string]: number }
export const breakpointPx = {
  xs: 320,
  s: 512,
  sm: 640,
  m: 768,
  ml: 960,
  l: 1024,
  xl: 1280,
  xxl: 1600,
  xxxl: 1920
}

// type Breakpoints = { [key: string]: string }
export const breaks = Object.keys(breakpointPx).reduce((breakPoints, bp) => {
  breakPoints[bp] = `${breakpointPx[bp]}px`

  return breakPoints
}, {})

export const sizes = {
  1: "0.25rem",
  2: "0.5rem",
  3: "1rem",
  4: "1.5rem",
  5: "2rem",
  6: "2.5rem",
  7: "3rem",
  8: "3.5rem",
  9: "4rem",
  10: "4.5rem",
  11: "5rem"
}

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    breaks,
    colors: {
      ...blackA,
      ...limeDark,
      ...orangeDark,
      ...redDark,
      ...crimsonDark,
      ...slateDark,
      ...whiteA,
      ...indigoDark,
      ...gray,
      ...grayDark,
      themePrimary: "$orange9",
      white: "$slate12",
      darkGray: "$blackA9",
      black: "$blackA12",
    },
    fonts: {
      primary: `Roboto, Helvetica, Arial, sans-serif`
    },
    fontSizes: { ...sizes },
    sizes,
    shadows: {},
    space: { ...sizes },
  },
  media: {
    xs: `(min-width: ${breaks.xs})`,
    s: `(min-width: ${breaks.s})`,
    sm: `(min-width: ${breaks.sm})`,
    m: `(min-width: ${breaks.m})`,
    ml: `(min-width: ${breaks.ml})`,
    l: `(min-width: ${breaks.l})`,
    xl: `(min-width: ${breaks.xl})`
  },
  utils: {
    smoothTransition: value => {
      const propertiesToTransition = value.split(",")
      const transitionDuration = "250ms"
      const transitionEasing = "ease-in-out"

      const transitionProperties = propertiesToTransition.map(p => `${p.trim()} ${transitionDuration} ${transitionEasing}`)

      return {
        transition: transitionProperties.join(", ")
      }
    }
  }
})
