import { useParams } from "react-router-dom"
import { students } from "../../Mock/Students"
import {
  Avatar,
  Center,
  Group,
  LoadingOverlay,
  MantineComponent,
  Stack,
  Table,
  TextInput,
} from "@mantine/core"
import { /*useEffect,*/ useState } from "react"
import { useTimeout } from "@mantine/hooks"

export const Student = () => {
  interface ExerciseOverview {
    exerciseId: string
    grades: number[]
    finalGrade: number
    isFinal: boolean
  }

  interface StudentOverview {
    firstName: string
    lastName: string
    exerciseCount: number
    exercisesOverview: ExerciseOverview[]
  }
  const { id } = useParams()
  const [studentOverview, setStudentOverview] = useState<
    StudentOverview | undefined
  >(undefined)

  function getStudentOverview(studentId: string): StudentOverview | undefined {
    const student = students.find((s) => s.id === studentId)

    if (!student) return undefined

    let length = 0
    const exercisesOverview = student.exercises.map((exercise) => {
      if (length < exercise.grade.length) length = exercise.grade.length
      return {
        exerciseId: exercise.id,
        grades: exercise.grade,
        finalGrade: Math.round(
          exercise.grade.reduce((sum, grade) => sum + grade, 0) /
            exercise.grade.length
        ),
        isFinal: exercise.final,
      }
    })

    return {
      firstName: student.firstName,
      lastName: student.name,
      exerciseCount: length,
      exercisesOverview,
    }
  }
  /*
  useEffect(() => {
    if (!studentOverview && false) {
      setStudentOverview(getStudentOverview(id ?? ""))
    }
  })
*/

  useTimeout(
    () => setStudentOverview(getStudentOverview(id ?? "")),
    500
  ).start()

  let tHeadDynamic: MantineComponent<any>[] = []
  for (let i = 1; i <= (studentOverview?.exerciseCount ?? 0); i++) {
    tHeadDynamic.push(<Table.Th key={i}>Test-{i}</Table.Th>)
  }

  return (
    <Center>
      <LoadingOverlay
        visible={!studentOverview}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
      />
      {studentOverview && (
        <Stack>
          <Group justify="center">
            <Avatar
              color="cyan"
              radius="xl"
            >{`${studentOverview?.firstName[0]}${studentOverview?.lastName[0]}`}</Avatar>
            <TextInput
              readOnly
              description="Last name"
              value={studentOverview?.lastName}
            />
            <TextInput
              readOnly
              description="First name"
              value={studentOverview?.firstName}
            />
          </Group>
          <Table.ScrollContainer minWidth={500 /*todo dynamic */}>
            <Table highlightOnHover>
              <Table.Thead>
                <Table.Th>Exercise</Table.Th>
                {tHeadDynamic}
                <Table.Th>Avg</Table.Th>
              </Table.Thead>
              <Table.Tbody>
                {studentOverview?.exercisesOverview.map((exercise, i) => (
                  <Table.Tr key={i}>
                    <Table.Td>{exercise.exerciseId}</Table.Td>
                    {tHeadDynamic.map((_, i) => (
                      <Table.Td c={exercise.grades[i] < 60 ? "red" : undefined}>
                        {exercise.grades[i] ?? "-"}
                      </Table.Td>
                    ))}
                    <Table.Td
                      c={
                        exercise.isFinal
                          ? exercise.finalGrade < 60
                            ? "red"
                            : "blue"
                          : exercise.finalGrade < 60
                          ? "orange"
                          : undefined
                      }
                    >
                      {exercise.finalGrade}
                    </Table.Td>
                    <Table.Td>
                      {exercise.isFinal ? "Final" : "Normal"} Exercise
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </Stack>
      )}
    </Center>
  )
}
