import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "../pages/NotFound"
import { Statistics } from "../pages/Statistics"
import { Home } from "../pages/Home"
import { Students } from "../pages/Students"
import { Student } from "../pages/Student"

export const CustomRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/students">
          <Route path="statistics" element={<Statistics />} />
          <Route path=":id" element={<Student />} />
          <Route path="" element={<Students />} />
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
