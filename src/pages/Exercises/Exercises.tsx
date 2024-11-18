import {
  Box,
  Button,
  Center,
  FocusTrap,
  Input,
  SimpleGrid,
} from "@mantine/core"
import { IconSearch } from "@tabler/icons-react"
import { useState } from "react"
import ExerciseStoreItem from "../../components/ExerciseStoreItem"
import { exerciseMock } from "../../Mock/Exercise"
import { useNavigate } from "react-router-dom"

export const Exercises = () => {
  const [search, setSearch] = useState("")
  const navigate = useNavigate()
  return (
    <Box h="100%">
      <FocusTrap active>
        <Center p="xl">
          <Input
            m="md"
            placeholder="Search"
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            leftSection={<IconSearch size={16} />}
          />
          <Button onClick={(e) => navigate("create")} m="md" variant="outline">
            Create new exercise
          </Button>
        </Center>
      </FocusTrap>
      <SimpleGrid type="container" cols={{ base: 1, "800px": 2, "1300px": 3 }}>
        {exerciseMock
          .filter((e) => e.author === "Franz")
          .filter((i) =>
            i.name
              ?.trim()
              .toLowerCase()
              .includes(search.trim().toLocaleLowerCase())
          )
          .map((v) => (
            <ExerciseStoreItem
              key={v.id}
              title={v.name}
              description={v.description}
              id={v.id}
              img={v.img}
              author={v.author}
              rating={v.rating}
            />
          ))}
      </SimpleGrid>
    </Box>
  )
}
