import { BrowserRouter, Route, Routes } from "react-router-dom"
import { NotFound } from "../pages/NotFound"
import { Statistics } from "../pages/Statistics/Statistics"
import { Home } from "../pages/Home"
import { Students } from "../pages/Students/Students"
import { Student } from "../pages/Students/Student"
import { ActivitiesCreate } from "../pages/Activities/ActivitiesCreate"
import { Activity } from "../pages/Activities/Activity"
import { Activities } from "../pages/Activities/Activities"
import { ExercisesCreate } from "../pages/Exercises/ExercisesCreate"
import { Exercise } from "../pages/Exercises/Exercise"
import { Exercises } from "../pages/Exercises/Exercises"
import { Account } from "../pages/Account/Account"
import { ExercisesStore } from "../pages/Store/ExercisesStore"
import { ExerciseStore } from "../pages/Store/ExerciseStore"
import { Store } from "../pages/Store/Store"

export const CustomRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/account">
          <Route path="" element={<Account />} />
          <Route path="*" element={<NotFound />} />
        </Route>
        <Route path="/students">
          <Route path="statistics" element={<Statistics />} />
          <Route path=":id" element={<Student />} />
          <Route path="" element={<Students />} />
        </Route>
        <Route path="/activities">
          <Route path="create" element={<ActivitiesCreate />} />
          <Route path="create/:id" element={<ActivitiesCreate />} />
          <Route path=":id" element={<Activity />} />
          <Route path="" element={<Activities />} />
        </Route>
        <Route path="/exercises">
          <Route path="create" element={<ExercisesCreate />} />
          <Route path=":id" element={<Exercise />} />
          <Route path="" element={<Exercises />} />
        </Route>
        <Route path="/store">
          <Route path="exercises" element={<ExercisesStore />} />
          <Route path="exercises/:id" element={<ExerciseStore />} />
          <Route path="" element={<Store />} />
        </Route>
        <Route path="/">
          <Route path="" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
