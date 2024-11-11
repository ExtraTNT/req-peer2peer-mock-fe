import { useParams } from "react-router-dom"

export const ExerciseStore = () => {
  const { id } = useParams()

  return <>exercise store {id}</>
}
