import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "../pages/NotFound"
import { Test } from "../pages/Test"
import { Box } from "@mantine/core"
import { Home } from "../pages/Home"

export const CustomRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test">
          <Route path="page1" element={<Box>testtest</Box>} />
          <Route path="" element={<Test></Test>} />
        </Route>
        <Route path="/">
          <Route path="page1" element={<div>test</div>} />
          <Route path="" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
