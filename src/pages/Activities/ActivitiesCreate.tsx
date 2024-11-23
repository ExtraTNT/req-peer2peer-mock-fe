import {
  Modal,
  Group,
  Button,
  Fieldset,
  Stack,
  TextInput,
  Textarea,
  Table,
  Input,
  Checkbox,
  Text,
} from "@mantine/core"
import { DatePickerInput } from "@mantine/dates"
import { useDisclosure } from "@mantine/hooks"
import { notifications } from "@mantine/notifications"
import { IconChevronDown } from "@tabler/icons-react"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ExerciseStoreItem from "../../components/ExerciseStoreItem"
import { accountMock } from "../../Mock/Account"
import { Activity } from "../../Mock/Activities"
import { exerciseMock } from "../../Mock/Exercise"
import { studentsMock } from "../../Mock/Students"
import { uuidv4 } from "../../utils/uuidv4"

export const ActivitiesCreate = () => {
  // Idea: get the exercise id from the passed id, if it is equal to !undefined, use it to filter the exercise
  // if it is equals to undefined, show the exercise chooser...
  const { id } = useParams()
  const [activity, superSetActivity] = useState<Activity>({
    id: uuidv4(),
    name: "",
    description: "",
    exerciseId: id
      ? id
      : exerciseMock.filter((e) => e.author === accountMock.firstName)[0].id,
    final: false,
    studentIds: [],
    from: new Date(),
    to: new Date(),
  })

  console.log(activity)

  const [live, setLive] = useState(false)
  const [selectedStudentId, selectStudent] = useState("")
  const [exerciseId, superSetExerciseId] = useState(
    id
      ? id
      : exerciseMock.filter((e) => e.author === accountMock.firstName)[0].id
  )

  const setExerciseId = (id: string) => {
    let tmp = { ...activity }
    tmp.exerciseId = id
    superSetActivity(tmp)
    superSetExerciseId(id)
  }

  const navigate = useNavigate()
  const [opened, { open, close }] = useDisclosure(false)
  const [onlyPrivate, setOnlyPrivate] = useState(false)

  const setActivity = (
    id: "name" | "description" | "from" | "to" | "exerciseId",
    value: any
  ) => {
    let tmp = { ...activity }
    tmp[id] = value
    superSetActivity(tmp)
  }

  const toggleFinal = () => {
    let tmp = { ...activity }
    tmp.final = !tmp.final
    superSetActivity(tmp)
  }

  const addStudent = (id: string) => {
    let tmp = { ...activity }
    const student = studentsMock.find((s) => s.id === id)
    if (!student) return
    if (tmp.studentIds.includes(student.id)) return
    tmp.studentIds.push(student.id)
    superSetActivity(tmp)
  }

  const removeStudent = (id: string) => {
    let tmp = { ...activity }
    const exists = tmp.studentIds.find((s) => s === id)
    if (!exists) return
    tmp.studentIds = tmp.studentIds.filter((s) => s !== id)
    superSetActivity(tmp)
  }

  return (
    <>
      <Modal opened={opened} onClose={close} title="Add student">
        <Group w="100%" justify="center" align="center">
          <Input
            component="select"
            rightSection={<IconChevronDown size={14} stroke={1.5} />}
            pointer
            mt="md"
            value={selectedStudentId}
            onChange={(e) => {
              selectStudent(e.target.value)
            }}
          >
            {accountMock.class
              .filter((s) => !activity.studentIds.includes(s))
              .map((v) => (
                <option value={v} key={v}>
                  {studentsMock.find((s) => s.id === v)?.firstName +
                    " " +
                    studentsMock.find((s) => s.id === v)?.name}
                </option>
              ))}
          </Input>
        </Group>
        <Group justify="space-evenly" align="center" p="md">
          <Button
            variant="outline"
            onClick={() => {
              addStudent(selectedStudentId)
              close()
            }}
          >
            Add
          </Button>
          <Button variant="outline" onClick={close}>
            Aboard
          </Button>
        </Group>
      </Modal>
      <Fieldset p="xl" legend="Demo mode, no saving possible">
        <Stack w="100%" justify="center" align="center">
          <Group justify="center" mt="md">
            <Button
              variant="outline"
              onClick={() => {
                setLive(!live)
              }}
            >
              {live ? "Toggle (Live)" : "Toggle (Draft)"}
            </Button>
            <Button variant="outline" onClick={toggleFinal}>
              {activity.final ? "Toggle (Final)" : "Toggle (Normal Exercise)"}
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
          <Text>Activity</Text>
          <Group justify="center" mt="md" w="100%">
            <TextInput
              label="Title"
              value={activity.name}
              onChange={(e) => setActivity("name", e.target.value)}
            />
            <DatePickerInput
              label="From"
              value={activity.from}
              onChange={(e) => setActivity("from", e)}
            />
            <DatePickerInput
              label="To"
              value={activity.to}
              onChange={(e) => setActivity("to", e)}
            />
          </Group>

          <Textarea
            label="Description"
            value={activity.description}
            style={{ minWidth: "0px", maxWidth: "90%" }}
            onChange={(e) => setActivity("description", e.target.value)}
            w="40%"
            minRows={2}
            resize="both"
          />
          <Text>Students</Text>
          <Table.ScrollContainer minWidth={300}>
            <Table highlightOnHover>
              <Table.Thead>
                <Table.Tr>
                  <Table.Td>
                    <Button variant="outline" onClick={open} w="100%">
                      Add Student
                    </Button>
                  </Table.Td>
                  <Table.Td>First Name</Table.Td>
                  <Table.Td>Last Name</Table.Td>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {studentsMock
                  .filter((s) => activity.studentIds.includes(s.id))
                  .map((s) => (
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
                            removeStudent(s.id)
                            // todo remove
                          }}
                          w="100%"
                        >
                          Remove
                        </Button>
                      </Table.Td>
                      <Table.Td>{s.firstName}</Table.Td>
                      <Table.Td>{s.name}</Table.Td>
                    </Table.Tr>
                  ))}
              </Table.Tbody>
            </Table>
          </Table.ScrollContainer>
          <Text>Exercise</Text>
          {!id && (
            <Group w="100%" justify="center" align="center">
              <Input
                component="select"
                rightSection={<IconChevronDown size={14} stroke={1.5} />}
                pointer
                mt="md"
                value={exerciseId}
                onChange={(e) => {
                  setExerciseId(e.target.value)
                  setActivity("exerciseId", e.target.value)
                }}
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
              <Button
                variant="outline"
                onClick={() =>
                  setExerciseId(
                    id
                      ? id
                      : exerciseMock.filter(
                          (e) => e.author === accountMock.firstName
                        )[0].id
                  )
                }
              >
                Reset
              </Button>
            </Group>
          )}
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
                nolink
                w="25%"
              />
            ))}
        </Stack>
      </Fieldset>
    </>
  )
}
