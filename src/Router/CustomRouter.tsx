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
        <Route path="/account">
          <Route path="" element={<>my account</>} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/students">
          <Route path="statistics" element={<Statistics />} />
          <Route path=":id" element={<Student />} />
          <Route path="" element={<Students />} />
        </Route>
        <Route path="/activities">
          <Route path="create" element={<>activities create</>} />
          <Route path=":id" element={<>activities id</>} />
          <Route path="" element={<>activities</>} />
        </Route>
        <Route path="/exercises">
          <Route path="create" element={<>exercises create</>} />
          <Route path=":id" element={<>exercises id</>} />
          <Route path="" element={<>exercises</>} />
        </Route>
        <Route path="/store">
          <Route path="exercises" element={<>exercises store</>} />
          <Route path="exercises/:id" element={<>exercises store id</>} />
          <Route path="" element={<>store</>} />
        </Route>
        <Route path="/">
          <Route path="" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
