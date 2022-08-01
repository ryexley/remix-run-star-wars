import { globalCss } from "~/styles"

export const globalStyles = globalCss({
  ["*"]: {
    boxSizing: "border-box",
    margin: 0,
    padding: 0
  },

  body: {
    ["--header-height"]: "5.625rem",
    fontFamily: "$primary"
  },

  a: {
    smoothTransition: "all"
  },

  ["a, input, select"]: {
    border: "1px solid transparent",
    outline: "0",

    ["&:focus"]: {
      border: "1px solid transparent",
      borderRadius: "0.1875rem",
    }
  },

  button: {
    fontSize: "1rem",
    fontFamily: "$primary"
  }
})
