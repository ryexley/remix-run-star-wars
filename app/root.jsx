import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react"
import { getCssText } from "~/styles"
import { globalStyles } from "~/styles/global"

export const meta = () => ({
  charset: "utf-8",
  title: "Star Wars Characters",
  viewport: "width=device-width,initial-scale=1",
})

export const links = () => {
  return [
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap" },
    { rel: "icon", href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👽</text></svg>" }
  ]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <style type="text/css">{globalStyles()}</style>
        <style
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
