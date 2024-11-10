import { useParams } from "react-router-dom"
import { students } from "../Mock/Students"

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
    exercisesOverview: ExerciseOverview[]
  }
  const { id } = useParams()

  function getStudentOverview(studentId: string): StudentOverview | undefined {
    const student = students.find((s) => s.id === studentId)

    if (!student) return undefined

    const exercisesOverview = student.exercises.map((exercise) => {
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
      exercisesOverview,
    }
  }

  // Example usage
  const studentOverview = getStudentOverview(id ?? "")
  console.log(studentOverview)
  return <>{id}</>
}
