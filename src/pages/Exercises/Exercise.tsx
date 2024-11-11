import { useParams } from "react-router-dom"

export const Exercise = () => {
  const { id } = useParams()

  return <>exercise {id}</>
}
