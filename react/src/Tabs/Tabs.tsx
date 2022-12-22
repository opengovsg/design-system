import { Fragment, useMemo } from 'react'
import {
  DarkMode,
  StyleFunctionProps,
  Tabs as ChakraTabs,
  TabsProps as ChakraTabsProps,
  useColorMode,
} from '@chakra-ui/react'

export interface TabsProps extends ChakraTabsProps {
  /**
   * Whether to render the footer in dark or light mode.
   */
  colorMode?: StyleFunctionProps['colorMode']
}

export const Tabs = ({
  colorMode: colorModeProp,
  ...tabsProps
}: TabsProps): JSX.Element => {
  const { colorMode } = useColorMode()
  const colorModeToUse = colorModeProp ?? colorMode

  const ColorModeWrapper = useMemo(() => {
    if (colorModeToUse === 'dark') {
      return DarkMode
    }
    return Fragment
  }, [colorModeToUse])

  return (
    <ColorModeWrapper>
      <ChakraTabs {...tabsProps} />
    </ColorModeWrapper>
  )
}
