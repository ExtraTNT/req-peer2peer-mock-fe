import { useParams } from "react-router-dom"
import { ExerciseDetail } from "../../components/ExerciseDetail"

export const Exercise = () => {
  const { id } = useParams()

  return <ExerciseDetail id={id} detail />
}
