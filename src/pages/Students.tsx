import { Table } from "@mantine/core"
import { students } from "../Mock/Students"
import { useNavigate } from "react-router-dom"

interface Exercise {
  id: string
  grade: number[]
  final: boolean
}

interface Student {
  name: string
  firstName: string
  id: string
  exercises: Exercise[]
}

interface StudentTransformed {
  firstName: string
  lastName: string
  id: string
  exerciseData: {
    [exerciseId: string]: {
      avg: number
      final: boolean
    }
  }
}
const transformStudentData = (students: Student[]): StudentTransformed[] => {
  return students.map((student) => {
    const exerciseData: {
      [exerciseId: string]: { avg: number; final: boolean }
    } = {}

    student.exercises.forEach((exercise) => {
      const avg = Math.round(
        exercise.grade.reduce((sum, grade) => sum + grade, 0) /
          exercise.grade.length
      )
      exerciseData[exercise.id] = { avg, final: exercise.final }
    })

    return {
      firstName: student.firstName,
      lastName: student.name,
      id: student.id,
      exerciseData,
    }
  })
}

const getAllExerciseIds = (
  students: StudentTransformed[]
): { exerciseId: string; final: boolean }[] => {
  const exerciseMap = new Map<string, boolean>()

  students.forEach((student) => {
    Object.entries(student.exerciseData).forEach(([id, { final }]) => {
      if (!exerciseMap.has(id)) {
        exerciseMap.set(id, final)
      }
    })
  })

  console.log(exerciseMap)
  return Array.from(exerciseMap, ([exerciseId, final]) => ({
    exerciseId,
    final,
  }))
}

export const Students = () => {
  const transformedData = transformStudentData(students)
  const allExerciseIds = getAllExerciseIds(transformedData)
  const navigate = useNavigate()

  return (
    <Table.ScrollContainer minWidth={allExerciseIds.length * 150 + 300}>
      <Table highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>First Name</Table.Th>
            <Table.Th>Last Name</Table.Th>
            {allExerciseIds.map((exercise) => (
              <Table.Th
                key={exercise.exerciseId}
                c={exercise.final ? "red" : undefined}
              >
                Exercise {exercise.exerciseId} Avg
              </Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {transformedData.map((student, index) => (
            <Table.Tr key={index} onClick={() => navigate(student.id)}>
              <Table.Td>{student.firstName}</Table.Td>
              <Table.Td>{student.lastName}</Table.Td>
              {allExerciseIds.map((exercise) => (
                <Table.Td
                  key={exercise.exerciseId}
                  c={
                    student.exerciseData[exercise.exerciseId]?.avg < 60
                      ? "red"
                      : undefined
                  }
                >
                  {student.exerciseData[exercise.exerciseId]
                    ? student.exerciseData[exercise.exerciseId].avg
                    : "-"}
                </Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
    </Table.ScrollContainer>
  )
}
