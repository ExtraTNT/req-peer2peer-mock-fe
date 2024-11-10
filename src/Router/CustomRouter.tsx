import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "../pages/NotFound"
import { Statistics } from "../pages/Statistics"
import { Box } from "@mantine/core"
import { Home } from "../pages/Home"

export const CustomRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/students">
          <Route path="statistics" element={<Statistics />} />
          <Route path="" element={<div>asdf</div>} />
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
