import {
  Box,
  Button,
  Center,
  FocusTrap,
  Input,
  SimpleGrid,
} from "@mantine/core"
import { activitiesMock } from "../../Mock/Activities"
import { exerciseMock } from "../../Mock/Exercise"
import { studentsMock } from "../../Mock/Students"
import { IconSearch } from "@tabler/icons-react"
import { useState } from "react"
import ActivityListItem from "../../components/ActivityListItem"
import { useNavigate } from "react-router-dom"

type ActivityMapped = {
  id: string
  name: string
  description: string
  final: boolean
  students: Student[]
  from: Date
  to: Date
  exercise: Exercise
}

type Exercise = {
  id: string
  img: string
  name: string
  description: string
  rating: number
  public: boolean
  author: string
}
type Student = {
  name: string
  firstName: string
  id: string
}

const user = "Franz"

export const Activities = () => {
  const activities: ActivityMapped[] = activitiesMock.map((a) => {
    const exercise: Exercise = exerciseMock.filter(
      (e) => e.id === a.exerciseId
    )[0]
    const students: Student[] = studentsMock
      .filter((s) => a.studentIds.includes(s.id))
      .map((s) => {
        return {
          id: s.id,
          name: s.name,
          firstName: s.firstName,
        }
      })
    return {
      name: a.name,
      description: a.description,
      id: a.id,
      final: a.final,
      from: a.from,
      to: a.to,
      students: students,
      exercise: exercise,
    }
  })

  const [search, setSearch] = useState("")
  const navigate = useNavigate()

  return (
    <Box h="100%">
      <FocusTrap active>
        <Center p="xl">
          <Input
            placeholder="Search"
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            leftSection={<IconSearch size={16} />}
          />
          <Button onClick={(e) => navigate("create")} m="md" variant="outline">
            Create new activity
          </Button>
        </Center>
      </FocusTrap>
      <SimpleGrid type="container" cols={{ base: 1, "800px": 2, "1300px": 3 }}>
        {activities
          .filter((e) =>
            e.name?.trim().toLowerCase().includes(search.trim().toLowerCase())
          )
          .map((v, i) => (
            <ActivityListItem
              title={v.name}
              id={v.id}
              description={v.description}
              from={v.from}
              to={v.to}
              students={v.students.map((s) => {
                return { name: s.name, firstName: s.firstName }
              })}
              final={v.final}
              exerciseTitle={v.exercise.name}
              exerciseDescription={v.exercise.description}
              exerciseId={v.exercise.id}
              exerciseAuthor={v.exercise.author}
              exerciseRating={v.exercise.rating}
              exerciseImg={v.exercise.img}
            ></ActivityListItem>
          ))}
      </SimpleGrid>
    </Box>
  )
}
