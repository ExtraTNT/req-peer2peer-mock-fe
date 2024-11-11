import { ScrollArea, SimpleGrid } from "@mantine/core"
import { useParams } from "react-router-dom"

export const ExerciseStore = () => {
  const { id } = useParams()

  return <ScrollArea h="100%">exercise store {id}</ScrollArea>
}
