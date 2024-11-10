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

  return (
    <Tooltip
      label={label ?? to ?? null}
      opened={!(label || to) ? false : undefined}
    >
      <Stack
        bg={computedColorScheme === "dark" ? "dark" : "gray"}
        p="md"
        onClick={(e) => {
          navigate(to ?? "")
        }}
      >
        <Group grow>
          <Group>
            <Center>{icon || <IconActivity size={24} />}</Center>
            <Stack gap={0}>
              <Title>{title}</Title>
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
