import { Avatar, NavLink, ScrollArea, Stack } from "@mantine/core"
import {
  IconBuildingStore,
  IconCalendarTime,
  IconChartDots,
  IconHome2,
  IconMonkeybar,
  IconSchool,
  IconUserCircle,
} from "@tabler/icons-react"

export const NavList = () => {
  return (
    <ScrollArea h="100%">
      <Stack>
        <NavLink
          href="/account"
          label="My Account"
          leftSection={<Avatar radius="xl" />}
        />
        <NavLink
          href="/"
          label="Home"
          leftSection={<IconHome2 size="1rem" stroke={1.5} />}
        />
        <NavLink
          href="/students"
          label="Students"
          leftSection={<IconSchool size="1rem" stroke={1.5} />}
        />
        <NavLink
          href="/students/statistics"
          label="Statistics"
          leftSection={<IconChartDots size="1rem" stroke={1.5} />}
        />
        <NavLink
          href="/activities"
          label="Activities"
          leftSection={<IconCalendarTime size="1rem" stroke={1.5} />}
        />
        <NavLink
          href="/excercise"
          label="My Excercises"
          leftSection={<IconMonkeybar size="1rem" stroke={1.5} />}
        />
        <NavLink
          href="/store/excercise"
          label="Discover Excercises"
          leftSection={<IconBuildingStore size="1rem" stroke={1.5} />}
        />
      </Stack>
    </ScrollArea>
  )
}
