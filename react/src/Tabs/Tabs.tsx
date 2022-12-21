import { Fragment, useMemo } from 'react'
import {
  DarkMode,
  StyleFunctionProps,
  Tabs as ChakraTabs,
  TabsProps as ChakraTabsProps,
} from '@chakra-ui/react'

export interface TabsProps extends ChakraTabsProps {
  /**
   * Whether to render the footer in dark or light mode.
   */
  colorMode?: StyleFunctionProps['colorMode']
}

export const Tabs = ({ colorMode, ...tabsProps }: TabsProps): JSX.Element => {
  const ColorModeWrapper = useMemo(() => {
    if (colorMode === 'dark') {
      return DarkMode
    }
    return Fragment
  }, [colorMode])

  return (
    <ColorModeWrapper>
      <ChakraTabs {...tabsProps} />
    </ColorModeWrapper>
  )
}
