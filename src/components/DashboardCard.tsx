import {
  Box,
  Center,
  Group,
  Stack,
  Text,
  Title,
  Tooltip,
  useComputedColorScheme,
} from "@mantine/core"
import { useHover } from "@mantine/hooks"
import { IconActivity } from "@tabler/icons-react"
import { useNavigate } from "react-router-dom"

type DashboardCardProps = {
  title: string
  to?: string
  label?: string
  icon?: React.ReactNode
  children?: React.ReactNode
}

export default function DashboardCard({
  title,
  to,
  label,
  icon,
  children,
}: DashboardCardProps) {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  })
  const navigate = useNavigate()
  const { hovered, ref } = useHover()

  return (
    <Tooltip
      label={label ?? to ?? null}
      opened={!(label || to) ? false : undefined}
      openDelay={250}
    >
      <Stack
        ref={ref}
        bg={computedColorScheme === "dark" ? "dark" : "blue.2"}
        style={{ borderRadius: "8px", cursor: to ? "pointer" : "default" }}
        p={hovered ? "lg" : "xl"}
        gap="md"
        onClick={(e) => {
          navigate(to ?? "")
        }}
      >
        <Group grow>
          <Group>
            <Center>{icon || <IconActivity size={24} />}</Center>
            <Stack gap="md">
              <Title size={hovered ? "xl" : "lg"}>{title}</Title>
            </Stack>
          </Group>
        </Group>
        {children && (
          <Box>
            <Text>{children}</Text>
          </Box>
        )}
      </Stack>
    </Tooltip>
  )
}
