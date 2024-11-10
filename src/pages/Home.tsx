import { ScrollArea, SimpleGrid } from "@mantine/core"
import DashboardCard from "../components/DashboardCard"

export const Home = () => {
  return (
    <ScrollArea h="100%">
      <SimpleGrid cols={2}>
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
    </ScrollArea>
  )
}
