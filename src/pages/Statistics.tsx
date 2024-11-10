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
import { data } from "../Mock/StudentsGradesExercise"
import { students } from "../Mock/Students"
import { useState } from "react"

interface TableRow {
  student: string
  testsWithLowGrades: string
  grades: string
}

export const Statistics = () => {
  const [exercise, setExercise] = useState("1")

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

  const studentsWithLowGrades = students
    .map((student) => ({
      firstName: student.firstName,
      lastName: student.name,
      modulesWithLowGrade: student.exercises
        .map((e, moduleIndex) => ({
          exerciseId: e.id,
          lowGrades: e.grade
            .map((grade, gradeIndex) =>
              grade < 60 ? { grade, testNumber: gradeIndex + 1 } : null
            )
            .filter((gradeInfo) => gradeInfo !== null),
        }))
        .filter((e) => e.lowGrades.length > 0 && e.exerciseId === exercise),
    }))
    .filter((student) => student.modulesWithLowGrade.length > 0)

  console.log(studentsWithLowGrades)

  const studentsWhoNeedHelp: TableRow[] = studentsWithLowGrades.map(
    (student) => {
      const lowGradeTests: string[] = []
      const lowGrades: number[] = []

      student.modulesWithLowGrade.forEach((module) => {
        module.lowGrades.forEach((gradeInfo) => {
          if (gradeInfo != null) {
            lowGradeTests.push(`${module.exerciseId}.${gradeInfo.testNumber}`)
            lowGrades.push(gradeInfo.grade)
          }
        })
      })

      return {
        student: `${student.firstName} ${student.lastName}`,
        testsWithLowGrades: lowGradeTests.join(", "),
        grades: lowGrades.join(", "),
      }
    }
  )

  /*
  console.log("Student              | Tests with low grades | Grades")
  console.log("-----------------------------------------------------------")
  studentsWhoNeedHelp.forEach((row) => {
    console.log(`${row.student} | ${row.testsWithLowGrades} | ${row.grades}`)
  })
  */

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
                { value: 12, color: "gray", tooltip: "Unknown 2 / 15" },
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
          <Text ta="center">Students, who need support</Text>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>Name</Table.Th>
                <Table.Th>Tests (Exercise.TestNr)</Table.Th>
                <Table.Th>Grades</Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {studentsWhoNeedHelp.map((e) => (
                <Table.Tr>
                  <Table.Td>{e.student}</Table.Td>
                  <Table.Td>{e.testsWithLowGrades}</Table.Td>
                  <Table.Td>{e.grades}</Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Stack>
      </SimpleGrid>
    </>
  )
}
