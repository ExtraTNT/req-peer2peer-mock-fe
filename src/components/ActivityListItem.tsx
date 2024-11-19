import {
  Flex,
  Group,
  Progress,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core"
import { useHover } from "@mantine/hooks"
import { useNavigate } from "react-router-dom"
import ExerciseStoreItem from "./ExerciseStoreItem"

type ActivityCardProps = {
  title: string
  id: string
  description: string
  final?: boolean
  from: Date
  to: Date
  students: {
    firstName: string
    name: string
  }[]

  exerciseTitle: string
  exerciseDescription: string
  exerciseId: string
  exerciseAuthor: string
  exerciseImg?: string
  exerciseRating: number
  children?: React.ReactNode
}

export default function ActivityListItem({
  id,
  title,
  description,
  final,
  from,
  to,
  students,
  exerciseTitle,
  exerciseDescription,
  exerciseId,
  exerciseImg,
  exerciseAuthor,
  exerciseRating,
  children,
}: ActivityCardProps) {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  })
  const navigate = useNavigate()
  const { hovered, ref } = useHover()

  return (
    <Stack
      ref={ref}
      bg={computedColorScheme === "dark" ? "dark" : "blue.2"}
      style={{ borderRadius: "8px", cursor: id ? "pointer" : "default" }}
      p={hovered ? "lg" : "xl"}
      gap="md"
      onClick={(e) => {
        navigate(id)
      }}
    >
      <Group grow c={final ? "yellow" : undefined}>
        <Group>
          <Stack gap="md">
            <Title size={hovered ? "xl" : "lg"}>
              {title}
              {final ? " - Final exam" : ""}
            </Title>
          </Stack>
        </Group>
      </Group>
      <Flex align="flex-start" justify="flex-end" direction="column" h="100%">
        <Text h="100%" lineClamp={3}>
          {description}
        </Text>
        <Text>{students.length} Students</Text>
        <Group gap="xs" w="100%" wrap="nowrap">
          <Text w="min-content">{from.toLocaleDateString()}</Text>
          <Progress value={20} w="100%" />
          <Text w="min-content">{to.toLocaleDateString()}</Text>
        </Group>

        <ExerciseStoreItem
          title={exerciseTitle}
          description={exerciseDescription}
          id={exerciseAuthor}
          author={exerciseAuthor}
          rating={exerciseRating}
          img={exerciseImg}
          nohover
          nolink
        />
      </Flex>
    </Stack>
  )
}