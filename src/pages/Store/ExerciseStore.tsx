import { useParams } from "react-router-dom"
import { ExerciseDetail } from "../../components/ExerciseDetail"

export const ExerciseStore = () => {
  const { id } = useParams()

  return <ExerciseDetail id={id} store />
}
