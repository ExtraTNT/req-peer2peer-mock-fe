import { useNavigate, useParams } from "react-router-dom"
import { activitiesMock } from "../../Mock/Activities"
import { studentsMock } from "../../Mock/Students"
import { notifications } from "@mantine/notifications"
import {
  Button,
  Center,
  Fieldset,
  Group,
  Input,
  Modal,
  Stack,
  Table,
  Textarea,
  TextInput,
  Title,
  Text,
} from "@mantine/core"

import { DateInput, DatePickerInput } from "@mantine/dates"
import { useState } from "react"
import { useDisclosure } from "@mantine/hooks"

export const Activity = () => {
  const { id } = useParams()
  const activity = activitiesMock.filter((a) => a.id === id)[0]
  const students = studentsMock.filter((s) =>
    activity.studentIds.includes(s.id)
  )
  const navigate = useNavigate()
  const [opened, { open, close }] = useDisclosure(false)

  const generateTitles = (students: any, activity: any) => {
    const s = students.filter((s: any) => activity.studentIds.includes(s.id))
    console.log(s)
    let count = 0
    try {
      s.map((s: any) => {
        s.exercises.filter((e: any) => e.id === activity.exerciseId)[0].grade
          .length > count
          ? (count = s.exercises.filter(
              (e: any) => e.id === activity.exerciseId
            )[0].grade.length)
          : (count = count)
      })
    } catch (err) {
      console.log("No data")
    }

    const returnVal = ["First Name", "Last Name"]

    for (let index = 1; index <= count; index++) {
      returnVal.push("Grade " + index)
    }
    returnVal.push("Final Grade")

    return returnVal
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
                message: "You can't delete in demo mode!",
              })
            }}
          >
            Delete
          </Button>
          <Button variant="outline" onClick={close}>
            Aboard
          </Button>
        </Group>
      </Modal>
      <Fieldset p="xl" legend="Demo mode, no edits possible">
        <Stack w="100%" justify="center" align="center">
          <Group justify="center" mt="md">
            <Button variant="outline" color="red" onClick={open}>
              Delete
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
          <Group justify="center" mt="md">
            <TextInput label="Title" value={activity.name} />
            <DatePickerInput label="From" value={activity.from} />
            <DatePickerInput label="To" value={activity.to} />
          </Group>

          <Textarea
            label="Description"
            value={activity.description}
            style={{ minWidth: "0px", maxWidth: "90%" }}
            w="max-content"
            minRows={2}
            resize="both"
          />
          <Table.ScrollContainer minWidth={500}>
            <Table highlightOnHover>
              <Table.Thead>
                <Table.Tr>
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
                    <Table.Td>{s.firstName}</Table.Td>
                    <Table.Td>{s.name}</Table.Td>

                    {s.exercises
                      .filter((e) => e.id === activity.exerciseId)
                      .map((v) =>
                        v.grade.map((g) => (
                          <Table.Td c={g < 60 ? "red" : undefined}>
                            {g}
                          </Table.Td>
                        ))
                      )}
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
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
        </Stack>
      </Fieldset>
    </>
  )
}
