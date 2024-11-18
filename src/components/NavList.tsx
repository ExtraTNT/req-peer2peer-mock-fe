import { Avatar, NavLink, ScrollArea, Stack } from "@mantine/core"
import {
  IconBuildingStore,
  IconCalendarTime,
  IconChartDots,
  IconHome2,
  IconMonkeybar,
  IconSchool,
} from "@tabler/icons-react"
import { accountMock } from "../Mock/Account"

export const NavList = () => {
  return (
    <ScrollArea h="100%">
      <Stack>
        <NavLink
          href="/account"
          label={accountMock.email}
          leftSection={<Avatar radius="xl" src={accountMock.avatar} />}
        />
        <NavLink
          href="/"
          label="Home"
          leftSection={<IconHome2 size="1rem" stroke={1.5} />}
        />
        <NavLink
          href="/students"
          label="My Students"
          leftSection={<IconSchool size="1rem" stroke={1.5} />}
        />
        <NavLink
          href="/students/statistics"
          label="Statistics"
          leftSection={<IconChartDots size="1rem" stroke={1.5} />}
        />
        <NavLink
          href="/activities"
          label="My Activities"
          leftSection={<IconCalendarTime size="1rem" stroke={1.5} />}
        />
        <NavLink
          href="/exercises"
          label="My exercises"
          leftSection={<IconMonkeybar size="1rem" stroke={1.5} />}
        />
        <NavLink
          href="/store/exercises"
          label="Discover exercises"
          leftSection={<IconBuildingStore size="1rem" stroke={1.5} />}
        />
      </Stack>
    </ScrollArea>
  )
}
