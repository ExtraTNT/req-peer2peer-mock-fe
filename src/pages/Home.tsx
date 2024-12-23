import {
  Avatar,
  Blockquote,
  Center,
  ScrollArea,
  SimpleGrid,
} from "@mantine/core"
import DashboardCard from "../components/DashboardCard"
import {
  IconBuildingStore,
  IconCalendarTime,
  IconChartDots,
  IconMonkeybar,
  IconSchool,
} from "@tabler/icons-react"
import { accountMock } from "../Mock/Account"

export const Home = () => {
  return (
    <ScrollArea h="100%">
      <SimpleGrid type="container" cols={{ base: 1, "800px": 2, "1300px": 3 }}>
        <DashboardCard
          title="My Account"
          to="/account"
          label="Manage your teacher account."
          icon={<Avatar radius="xl" src={accountMock.avatar} />}
        >
          Manage your teacher account.
        </DashboardCard>
        <DashboardCard
          title="My Students"
          to="/students"
          label="Manage your students and see performances."
          icon={<IconSchool stroke={1.5} />}
        >
          Manage your students and see performances.
        </DashboardCard>
        <DashboardCard
          title="Statistics"
          to="/students/statistics"
          label="See the performance (completion, points) of all your students."
          icon={<IconChartDots stroke={1.5} />}
        >
          See the performances over all of your students.
        </DashboardCard>
        <DashboardCard
          title="My Activities"
          to="/activities"
          label="See all of your activities. Activities are planed / past exercises
          for students, consisting of an exercise (blueprint), time and a list
          of students."
          icon={<IconCalendarTime stroke={1.5} />}
        >
          See all of your activities.
        </DashboardCard>
        <DashboardCard
          title="My exercises"
          to="/exercises"
          label="See all of your exercises. exercises are the blueprint for
          activities."
          icon={<IconMonkeybar stroke={1.5} />}
        >
          See all of your exercises.
        </DashboardCard>
        <DashboardCard
          title="Discover exercises"
          to="/store/exercises"
          label="See officially published or community created exercises and use them for your own activities."
          icon={<IconBuildingStore stroke={1.5} />}
        >
          Marketplace for exercises.
        </DashboardCard>
      </SimpleGrid>
      <Center p="xl">
        <Blockquote color="blue" cite="- Peer2Peer Team" mt="xl" w="75%">
          Peer2Peer is an interactive learning platform that allows children to
          learn digital skills and basic competencies through play. The various
          subject areas are packaged in small adventures. The entire eco system
          is free and opensource with a focus on privacy and extendability.
          Exercises can be shared over the community, reducing time preparing.
          Choose on the pannel above what you want to do.
        </Blockquote>
      </Center>
    </ScrollArea>
  )
}
