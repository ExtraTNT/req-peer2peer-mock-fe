import { Box, Center, FocusTrap, Input, SimpleGrid } from "@mantine/core"
import ExerciseStoreItem from "../../components/ExerciseStoreItem"
import { exerciseMock } from "../../Mock/Exercise"
import { IconSearch } from "@tabler/icons-react"
import { useState } from "react"

export const ExercisesStore = () => {
  const [search, setSearch] = useState("")

  return (
    <Box h="100%">
      <FocusTrap active>
        <Center p="xl">
          <Input
            placeholder="Search"
            value={search}
            onChange={(event) => setSearch(event.currentTarget.value)}
            leftSection={<IconSearch size={16} />}
          />
        </Center>
      </FocusTrap>
      <SimpleGrid type="container" cols={{ base: 1, "800px": 2, "1300px": 3 }}>
        {exerciseMock
          .filter((e) => e.public)
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
