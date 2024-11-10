import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "@mantine/core/styles.css"
import { createTheme, MantineProvider } from "@mantine/core"
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement)

const theme = createTheme({
  /** Put your mantine theme override here */
  fontFamily:
    "Roboto, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans serif",
  fontFamilyMonospace:
    "Hack NerdFont, Hack NF, Hack Nerd Font, source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace",
})

root.render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="light">
      <App />
    </MantineProvider>
  </React.StrictMode>
)
