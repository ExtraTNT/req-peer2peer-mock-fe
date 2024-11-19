import { useNavigate, useParams } from "react-router-dom"
import { activitiesMock } from "../../Mock/Activities"
import { studentsMock } from "../../Mock/Students"
import { notifications } from "@mantine/notifications"
import {
  Button,
  Checkbox,
  Fieldset,
  Group,
  Input,
  Modal,
  Stack,
  Table,
  Textarea,
  TextInput,
} from "@mantine/core"

import { DatePickerInput } from "@mantine/dates"
import { useDisclosure } from "@mantine/hooks"
import ExerciseStoreItem from "../../components/ExerciseStoreItem"
import { exerciseMock } from "../../Mock/Exercise"
import { accountMock } from "../../Mock/Account"
import { IconChevronDown } from "@tabler/icons-react"
import { useState } from "react"

export const Activity = () => {
  const { id } = useParams()
  const activity = activitiesMock.filter((a) => a.id === id)[0]
  const students = studentsMock.filter((s) =>
    activity.studentIds.includes(s.id)
  )
  console.log(activity)
  console.log(exerciseMock)
  const exercise = exerciseMock.filter((e) => e.id === activity.exerciseId)[0]
  const navigate = useNavigate()
  const [opened, { open, close }] = useDisclosure(false)
  const now = new Date()

  const [exerciseId, setExerciseId] = useState(exercise.id)
  const [onlyPrivate, setOnlyPrivate] = useState(false)

  const generateTitles = (students: any, activity: any) => {
    const s = students.filter((s: any) => activity.studentIds.includes(s.id))
    let count = 0
    try {
      s.map((s: any) =>
        s.exercises.filter((e: any) => e.id === activity.exerciseId)[0].grade
          .length > count
          ? (count = s.exercises.filter(
              (e: any) => e.id === activity.exerciseId
            )[0].grade.length)
          : () => {}
      )
    } catch (err) {
      console.log("No data")
    }

    const head = ["First Name", "Last Name"]
    const grades = []
    for (let index = 1; index <= count; index++) {
      grades.push("Grade " + index)
    }
    if (grades.length > 0) {
      head.push("Final Grade")
    }
    return head.concat(grades)
  }

  return (
    <>
      <Modal opened={opened} onClose={close} title="Are you shure?">
        <Group justify="space-evenly" align="center" p="md">
          <Button
            variant="outline"
            color="red"
            onClick={() => {
              close()
              notifications.show({
                color: "red",
                title: "Something went wrong!",
                message: "You can't remove in demo mode!",
                position: "top-center",
              })
            }}
          >
            Remove
          </Button>
          <Button variant="outline" onClick={close}>
            Aboard
          </Button>
        </Group>
      </Modal>
      <Fieldset p="xl" legend="Demo mode, no edits possible">
        <Stack w="100%" justify="center" align="center">
          <Group justify="center" mt="md">
            <Button
              variant="outline"
              onClick={() => {
                close()
                notifications.show({
                  color: "red",
                  title: "Something went wrong!",
                  message: "You can't toggle liveness in demo mode!",
                  position: "top-center",
                })
              }}
            >
              {now > activity.from && now < activity.to
                ? "Toggle (Live)"
                : "Toggle (No Live)"}
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                close()
                notifications.show({
                  color: "red",
                  title: "Something went wrong!",
                  message: "You can't change data in demo mode!",
                  position: "top-center",
                })
              }}
            >
              {activity.final ? "Toggle (Final)" : "Toggle (Normal Exercise)"}
            </Button>
            <Button variant="outline" color="red" onClick={open}>
              Remove
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                notifications.show({
                  color: "red",
                  title: "Something went wrong!",
                  message: "You can't change data in demo mode!",
                  position: "top-center",
                })
              }
            >
              Save
            </Button>
          </Group>
          <Group justify="center" mt="md" w="100%">
            <TextInput label="Title" value={activity.name} />
            <DatePickerInput label="From" value={activity.from} />
            <DatePickerInput label="To" value={activity.to} />
          </Group>

          <Textarea
            label="Description"
            value={activity.description}
            style={{ minWidth: "0px", maxWidth: "90%" }}
            w="40%"
            minRows={2}
            resize="both"
          />

          <Table.ScrollContainer
            minWidth={100 * (generateTitles(students, activity).length + 1)}
          >
            <Table highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Td>
                    <Button
                      variant="outline"
                      onClick={() =>
                        notifications.show({
                          color: "red",
                          title: "Something went wrong!",
                          message: "You can't change data in demo mode!",
                          position: "top-center",
                        })
                      }
                      w="100%"
                    >
                      Add Student
                    </Button>
                  </Table.Td>
                  {generateTitles(students, activity).map((v, i) => (
                    <Table.Td key={i + "head"}>{v}</Table.Td>
                  ))}
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {students.map((s) => (
                  <Table.Tr
                    key={"student" + s.id}
                    onClick={(e) => navigate("/students/" + s.id)}
                  >
                    <Table.Td>
                      <Button
                        variant="outline"
                        color="red"
                        onClick={(e) => {
                          e.stopPropagation()
                          open()
                        }}
                        w="100%"
                      >
                        Remove
                      </Button>
                    </Table.Td>
                    <Table.Td>{s.firstName}</Table.Td>
                    <Table.Td>{s.name}</Table.Td>
                    {s.exercises.filter((e) => e.id === activity.exerciseId)
                      .length > 0 && (
                      <Table.Td
                        c={
                          s.exercises
                            .filter((e) => e.id === activity.exerciseId)[0]
                            .grade.reduce((x, y) => x + y) /
                            s.exercises.filter(
                              (e) => e.id === activity.exerciseId
                            )[0].grade.length <
                          60
                            ? "red"
                            : undefined
                        }
                      >
                        {(
                          s.exercises
                            .filter((e) => e.id === activity.exerciseId)[0]
                            .grade.reduce((x, y) => x + y) /
                          s.exercises.filter(
                            (e) => e.id === activity.exerciseId
                          )[0].grade.length
                        ).toFixed(1)}
                      </Table.Td>
                    )}
                    {s.exercises
                      .filter((e) => e.id === activity.exerciseId)
                      .map((v) =>
                        v.grade.map((g) => (
                          <Table.Td c={g < 60 ? "red" : undefined}>
                            {g}
                          </Table.Td>
                        ))
                      )}
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
          <Group w="100%" justify="center" align="center">
            <Button
              variant="outline"
              onClick={() => setExerciseId(exercise.id)}
            >
              Reset
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                notifications.show({
                  color: "red",
                  title: "Something went wrong!",
                  message: "You can't change data in demo mode!",
                  position: "top-center",
                })
              }
            >
              Save Exercise
            </Button>
          </Group>
          <Group w="100%" justify="center" align="center">
            <Input
              component="select"
              rightSection={<IconChevronDown size={14} stroke={1.5} />}
              pointer
              mt="md"
              value={exerciseId}
              onChange={(e) => setExerciseId(e.target.value)}
            >
              {exerciseMock
                .filter(
                  (e) => !onlyPrivate || e.author === accountMock.firstName
                )
                .map((v) => (
                  <option value={v.id} key={v.id}>
                    {v.name}
                  </option>
                ))}
            </Input>
            <Checkbox
              checked={onlyPrivate}
              onChange={(e) => setOnlyPrivate(e.currentTarget.checked)}
              label="Only show own exercises"
            />
          </Group>
          {exerciseMock
            .filter((e) => e.id === exerciseId)
            .map((v) => (
              <ExerciseStoreItem
                title={v.name}
                description={v.description}
                id={v.id}
                author={v.author}
                rating={v.rating}
                img={v.img}
                nohover
                hardlink={
                  v.author === accountMock.firstName
                    ? "/exercises/" + v.id
                    : "/store/exercises/" + v.id
                }
                w="25%"
              />
            ))}
        </Stack>
      </Fieldset>
    </>
  )
}
