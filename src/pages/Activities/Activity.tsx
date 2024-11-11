import { useParams } from "react-router-dom"

export const Activity = () => {
  const { id } = useParams()

  return <>activity {id}</>
}
