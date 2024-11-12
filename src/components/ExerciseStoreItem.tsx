import {
  Box,
  Flex,
  Group,
  Image,
  Rating,
  Stack,
  Text,
  Title,
  useComputedColorScheme,
} from "@mantine/core"
import { useHover } from "@mantine/hooks"
import { useNavigate } from "react-router-dom"

type ExerciseCardProps = {
  title: string
  description: string
  id: string
  author: string
  img?: string
  nohover?: boolean
  nolink?: boolean
  rating: number
  children?: React.ReactNode
}

export default function ExerciseStoreItem({
  title,
  description,
  id,
  img,
  author,
  rating,
  nohover,
  nolink,
  children,
}: ExerciseCardProps) {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  })
  const navigate = useNavigate()
  const { hovered, ref } = useHover()

  return (
    <Stack
      ref={ref}
      bg={computedColorScheme === "dark" ? "dark" : "blue.2"}
      style={{ borderRadius: "8px", cursor: nolink ? "inherit" : "pointer" }}
      p={nohover ? "xl" : hovered ? "lg" : "xl"}
      gap="md"
      onClick={(e) => {
        navigate(nolink ? "" : id)
      }}
    >
      <Group grow>
        <Group>
          <Stack gap="md">
            <Title size={nohover ? "lg" : hovered ? "xl" : "lg"}>{title}</Title>
          </Stack>
        </Group>
      </Group>
      <Flex align="flex-start" justify="flex-end" direction="column" h="100%">
        <Text h="100%" lineClamp={3}>
          {description}
        </Text>

        <Image src={img} p="md"></Image>
        <Text>Rating: </Text>
        <Rating readOnly defaultValue={rating} />
        <Text>By: {author}</Text>
      </Flex>
    </Stack>
  )
}
