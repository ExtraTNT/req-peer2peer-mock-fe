import { Text, ScrollArea, SimpleGrid, Stack } from "@mantine/core"
import { ScatterChart, LineChart } from "@mantine/charts"
import { data } from "../Mock/StudentsGradesExercise"

export const Statistics = () => {
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
    <ScrollArea h="100%">
      <SimpleGrid cols={2}>
        <Stack gap="md">
          <Text ta="center">Excercise Performance</Text>
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
          <Text ta="center">Excercise Average</Text>
          <LineChart
            data={lineData}
            h={350}
            dataKey="exercise"
            strokeWidth={2}
            series={[{ name: "avg", label: "Average" }]}
          />
        </Stack>
      </SimpleGrid>
    </ScrollArea>
  )
}
