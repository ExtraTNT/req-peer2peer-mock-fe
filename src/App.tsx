import {
  AppShell,
  AppShellFooter,
  Box,
  Burger,
  Flex,
  Group,
  NavLink,
  Text,
  Title,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { ColorToggler } from "./components/ColorToggler"
import { NavList } from "./components/NavList"
import { CustomRouter } from "./Router/CustomRouter"

export const App = () => {
  const [opened, { toggle }] = useDisclosure()

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { mobile: !opened, desktop: !opened },
      }}
      padding="md"
    >
      <AppShell.Header>
        <Group grow justify="space-between" h="100%">
          <Burger p="md" opened={opened} onClick={toggle} />
          <Flex
            justify="center"
            align="center"
            direction="column"
            wrap="nowrap"
          >
            <Title m="0" p="0">
              Peer2Peer
            </Title>
          </Flex>
          <Flex justify="flex-end" align="center" direction="row" wrap="nowrap">
            <Box px="md">
              <ColorToggler />
            </Box>
          </Flex>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        <NavList />
      </AppShell.Navbar>

      <AppShell.Main>
        <CustomRouter />
      </AppShell.Main>
      <AppShellFooter>
        <Group grow justify="space-evenly">
          <Text size="xs" ta="left" px="md">
            Copyright 2024 - 2024 Peer2Peer
          </Text>

          <Text size="xs" ta="center" px="md">
            This is free and open source software.
          </Text>
          <NavLink
            ta="right"
            px="md"
            py="0"
            variant="filled"
            href="https://github.com/ExtraTNT/req-peer2peer-mock-fe"
            label={
              <Text size="xs" px="md">
                Project Source
              </Text>
            }
          />
        </Group>
      </AppShellFooter>
    </AppShell>
  )
}

export default App
