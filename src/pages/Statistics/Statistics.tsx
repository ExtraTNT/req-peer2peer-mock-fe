import {
  Text,
  SimpleGrid,
  Stack,
  RingProgress,
  Center,
  NativeSelect,
  Table,
} from "@mantine/core"
import { ScatterChart, LineChart } from "@mantine/charts"
import { data } from "../../Mock/StudentsGradesExercise"
import { studentsMock } from "../../Mock/Students"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { exerciseMock } from "../../Mock/Exercise"
import { accountMock } from "../../Mock/Account"
import { activitiesMock } from "../../Mock/Activities"

interface TableRow {
  student: string
  id: string
  testsWithLowGrades: string
  grades: string
}

export const Statistics = () => {
  const [exercise, setExercise] = useState("1")
  const navigate = useNavigate()

  const setExerciseHelper = (name: string) => {
    switch (name) {
      case "Basic x86 assembly for kids":
        setExercise("1")
        break
      case "Basic C":
        setExercise("2")
        break
      case "Basic O/I":
        setExercise("3")
        break
      case "Advanced x86 for Kids":
        setExercise("4")
        break
      default:
        break
    }
  }

  const studentsWithLowGrades = studentsMock
    .map((student) => ({
      firstName: student.firstName,
      lastName: student.name,
      id: student.id,
      exercisesWithLowGrade: student.exercises
        .map((e, i) => ({
          exerciseId: e.id,
          lowGrades: e.grade
            .map((grade, gradeIndex) =>
              grade < 60 ? { grade, testNumber: gradeIndex + 1 } : null
            )
            .filter((gradeInfo) => gradeInfo !== null),
        }))
        .filter((e) => e.lowGrades.length > 0 && e.exerciseId === exercise),
    }))
    .filter((student) => student.exercisesWithLowGrade.length > 0)

  console.log(studentsWithLowGrades)

  const studentsWhoNeedHelp: TableRow[] = studentsWithLowGrades.map(
    (student) => {
      const lowGradeTests: string[] = []
      const lowGrades: number[] = []

      student.exercisesWithLowGrade.forEach((e) => {
        e.lowGrades.forEach((gradeInfo) => {
          if (gradeInfo != null) {
            lowGradeTests.push(`${gradeInfo.testNumber}`)
            lowGrades.push(gradeInfo.grade)
          }
        })
      })

      return {
        student: `${student.firstName} ${student.lastName}`,
        id: student.id,
        testsWithLowGrades: lowGradeTests.join(", "),
        grades: lowGrades.join(", "),
      }
    }
  )

  let lineData: { exercise: string; avg: number; count: number }[] = []
  data[0].data.forEach((entry) => {
    let set = false
    lineData.forEach((v, i) => {
      if (v.exercise === entry.exercise.toString()) {
        lineData[i].avg += entry.grade
        lineData[i].count++
        set = true
        return
      }
    })
    if (!set) {
      lineData.push({
        avg: entry.grade,
        count: 1,
        exercise: entry.exercise.toString(),
      })
    }
  })
  lineData.forEach((v, i) => {
    v.avg = v.avg / v.count
  })

  const now = new Date()

  return (
    <>
      <Center>
        <NativeSelect
          mt="md"
          label="Select the exercise"
          data={[
            "Basic x86 assembly for kids",
            "Basic C",
            "Basic O/I",
            "Advanced x86 for Kids",
          ]}
          onChange={(e) => {
            setExerciseHelper(e.target.value)
          }}
        />
      </Center>
      <SimpleGrid type="container" cols={{ base: 1, "1000px": 2 }}>
        <Stack gap="md">
          <Text ta="center">Exercise Performance</Text>
          <ScatterChart
            data={data}
            h={350}
            dataKey={{ y: "grade", x: "exercise" }}
            yAxisLabel="Grade"
            xAxisLabel="Exercise"
            yAxisProps={{ domain: [0, 100] }}
            referenceLines={[{ y: 65, label: "Passing" }]}
          />
        </Stack>
        <Stack gap="md">
          <Text ta="center">Exercise Average</Text>
          <LineChart
            data={lineData}
            h={350}
            dataKey="exercise"
            strokeWidth={2}
            xAxisLabel="Test"
            yAxisLabel="Grade"
            yAxisProps={{ domain: [0, 100] }}
            series={[{ name: "avg", label: "Average" }]}
          />
        </Stack>
        <Stack gap="md">
          <Text ta="center"> Passing Rate</Text>
          <Center>
            <RingProgress
              size={240}
              thickness={12}
              roundCaps
              sections={[
                { value: 70, color: "green", tooltip: "Passing: 10 / 15" },
                { value: 12, color: "yellow", tooltip: "Endangered 2 / 15" },
                { value: 6, color: "red", tooltip: "Failing 1 / 15" },
                { value: 12, color: "gray", tooltip: "Not Completed 2 / 15" },
              ]}
              label={
                <>
                  <Text c="green" fw={700} ta="center" size="xl">
                    80%
                  </Text>
                  <Text c="red" fw={700} ta="center" size="xl">
                    6%
                  </Text>
                </>
              }
            />
          </Center>
        </Stack>
        <Stack gap="md">
          <Table.ScrollContainer minWidth={450}>
            <Text ta="center">Students, who need support</Text>
            <Table highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Name</Table.Th>
                  <Table.Th>Tests (TestNr)</Table.Th>
                  <Table.Th>Grades</Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {studentsWhoNeedHelp.map((e) => (
                  <Table.Tr onClick={(_) => navigate(`../${e.id}`)}>
                    <Table.Td>{e.student}</Table.Td>
                    <Table.Td>{e.testsWithLowGrades}</Table.Td>
                    <Table.Td>{e.grades}</Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </Stack>

        <Stack gap="md">
          <Text ta="center">
            Number of Exercises:{" "}
            {
              exerciseMock.filter((e) => e.author === accountMock.firstName)
                .length
            }
          </Text>
          <Text ta="center">
            Number of current Activities:{" "}
            {activitiesMock.filter((a) => a.from <= now && a.to >= now).length}{" "}
            / {activitiesMock.length}
          </Text>
          <Text ta="center">Class size: {accountMock.class.length}</Text>
          <Text ta="center">Average Grade: 79</Text>
        </Stack>
      </SimpleGrid>
    </>
  )
}
