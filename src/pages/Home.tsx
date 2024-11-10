import { Blockquote, Center, ScrollArea, SimpleGrid } from "@mantine/core"
import DashboardCard from "../components/DashboardCard"

export const Home = () => {
  return (
    <ScrollArea h="100%">
      <SimpleGrid type="container" cols={{ base: 1, "800px": 2, "1300px": 3 }}>
        <DashboardCard
          title="My Account"
          to="/account"
          label="Manage your teacher account."
        >
          Manage your teacher account.
        </DashboardCard>
        <DashboardCard
          title="My Students"
          to="/students"
          label="Manage your students and see performances."
        >
          Manage your students and see performances.
        </DashboardCard>
        <DashboardCard
          title="Statistics"
          to="/students/statistics"
          label="See the performance (completion, points) of all your students."
        >
          See the performances over all of your students.
        </DashboardCard>
        <DashboardCard
          title="My Activities"
          to="/activities"
          label="See all of your activities. Activities are planed / past exercises
          for students, consisting of an exercise (blueprint), time and a list
          of students."
        >
          See all of your activities.
        </DashboardCard>
        <DashboardCard
          title="My exercises"
          to="/exercise"
          label="See all of your exercises. exercises are the blueprint for
          activities."
        >
          See all of your exercises.
        </DashboardCard>
        <DashboardCard
          title="Discover exercises"
          to="/store/exercise"
          label="See officially published or community created exercises and use them for your own activities."
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
