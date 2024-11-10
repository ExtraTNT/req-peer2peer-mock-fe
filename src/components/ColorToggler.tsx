import {
  ActionIcon,
  useMantineColorScheme,
  useComputedColorScheme,
} from "@mantine/core"
import { IconSun, IconMoon } from "@tabler/icons-react"

export const ColorToggler = () => {
  const { setColorScheme } = useMantineColorScheme()
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  })

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="default"
      size="xl"
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === "dark" && <IconSun stroke={1.5} />}
      {computedColorScheme === "light" && <IconMoon stroke={1.5} />}
    </ActionIcon>
  )
}