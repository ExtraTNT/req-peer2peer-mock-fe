import {
  Avatar,
  Center,
  Text,
  Stack,
  Group,
  TextInput,
  Box,
  SimpleGrid,
} from "@mantine/core"
import { accountMock } from "../../Mock/Account"
import { studentsMock } from "../../Mock/Students"
import { useNavigate } from "react-router-dom"

export const Account = () => {
  const navigate = useNavigate()
  return (
    <>
      <Center>
        <Stack align="center" justify="center">
          <Avatar src={accountMock.avatar} size="xl" />
          <Text
            style={{ cursor: "pointer" }}
            onClick={(e) =>
              (window.location.href = "mailto:" + accountMock.email)
            }
          >
            {accountMock.email}
          </Text>
          <Group>
            <TextInput readOnly value={accountMock.name} label="Last Name" />
            <TextInput
              readOnly
              value={accountMock.firstName}
              label="First Name"
            />
          </Group>
          <TextInput
            readOnly
            value={accountMock.school}
            label="School"
            w="100%"
          />
          <Text>Class:</Text>
        </Stack>
      </Center>

      <SimpleGrid
        type="container"
        cols={{ base: 1, "1200px": 2, "1600px": 3 }}
        p="xl"
      >
        {studentsMock
          .filter((s) => accountMock.class.includes(s.id))
          .map((v, i) => (
            <Box
              key={"student" + i}
              p="md"
              style={{ cursor: "pointer" }}
              onClick={(e) => navigate("/students/" + v.id)}
            >
              <Group justify="center">
                <Avatar src={v.avatar} size="lg" />
                <TextInput readOnly description="Last name" value={v.name} />
                <TextInput
                  readOnly
                  description="First name"
                  value={v.firstName}
                />
              </Group>
            </Box>
          ))}
      </SimpleGrid>
    </>
  )
}
