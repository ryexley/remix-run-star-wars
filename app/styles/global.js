import { globalCss } from "~/styles"

export const globalStyles = globalCss({
  ["*"]: {
    boxSizing: "border-box",
    margin: 0,
    padding: 0
  },

  body: {
    backgroundColor: "$gray2",
    fontFamily: "$primary",
    marginBottom: "10rem",
    minWidth: "26.25rem",
  },

  a: {
  	color: "$yellow9",
    smoothTransition: "all",
  },

  ["[aria-hidden=true]"]: {
  	display: "none",
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
