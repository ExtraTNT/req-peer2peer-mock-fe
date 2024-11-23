import { useState } from "react"
import { Exercise, exerciseMock, img1, img2 } from "../Mock/Exercise"
import { accountMock } from "../Mock/Account"
import { uuidv4 } from "../utils/uuidv4"
import {
  Fieldset,
  Stack,
  Group,
  Button,
  TextInput,
  Textarea,
  Input,
  Image,
  Modal,
} from "@mantine/core"
import { notifications } from "@mantine/notifications"
import { IconChevronDown } from "@tabler/icons-react"
import { useDisclosure } from "@mantine/hooks"
import { useNavigate } from "react-router-dom"

type ExerciseDetailProps = {
  id?: string
  detail?: boolean
  store?: boolean
}

export const ExerciseDetail = ({ id, detail, store }: ExerciseDetailProps) => {
  const exercise = id ? exerciseMock.find((e) => e.id === id) : undefined
  const [data, superSetData] = useState<Exercise>(
    exercise
      ? exercise
      : {
          id: uuidv4(),
          img: img1,
          name: "",
          description: "",
          rating: 5,
          public: false,
          author: accountMock.firstName,
        }
  )
  const [opened, { open, close }] = useDisclosure(false)

  const navigate = useNavigate()
  const setData = (id: "name" | "description" | "img", value: any) => {
    if (store) return
    let tmp = { ...data }
    tmp[id] = value
    superSetData(tmp)
  }

  return (
    <>
      <Modal opened={opened} onClose={close} title="Are you sure?">
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
      <Fieldset p="xl" legend="Demo mode, no saving possible">
        <Stack w="100%" justify="center" align="center">
          <Group justify="center" align="flex-end" mt="md">
            {(store || detail) && (
              <Button
                variant="outline"
                onClick={() => navigate("/activities/create/" + data.id)}
              >
                New Activity
              </Button>
            )}
            {!store && (
              <>
                <Button
                  variant="outline"
                  onClick={() =>
                    notifications.show({
                      color: "orange",
                      title: "Not implemented",
                      message:
                        "The feature you are trying to use is currently not implemented!",
                      position: "top-center",
                    })
                  }
                >
                  Edit Level
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
                {detail && (
                  <Button variant="outline" color="red" onClick={open}>
                    Remove
                  </Button>
                )}
              </>
            )}
          </Group>
          <Group justify="center" align="flex-end" mt="md">
            <TextInput
              label="Title"
              value={data.name}
              onChange={(e) => setData("name", e.target.value)}
            />
            <Input
              component="select"
              rightSection={<IconChevronDown size={14} stroke={1.5} />}
              pointer
              mt="md"
              value={data.img}
              onChange={(e) => {
                setData("img", e.target.value)
              }}
            >
              {!store ? (
                <>
                  <option value={img1}>Template 1</option>
                  <option value={img2}>Template 2</option>
                </>
              ) : (
                <option value={data.img}>
                  Template {data.img === img1 ? "1" : "2"}
                </option>
              )}
            </Input>
          </Group>
          <Textarea
            label="Description"
            value={data.description}
            style={{ minWidth: "0px", maxWidth: "90%" }}
            onChange={(e) => setData("description", e.target.value)}
            w="40%"
            autosize
            minRows={2}
            resize="both"
          />

          <Image w="25vw" src={data.img} p="md"></Image>
        </Stack>
      </Fieldset>
    </>
  )
}
