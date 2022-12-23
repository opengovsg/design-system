import { FC } from 'react'
import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react'

import { theme } from './theme'

/**
 * The global provider that must be added to make all components in this design
 * system work correctly
 */
export const ThemeProvider: FC<ChakraProviderProps> = (props) => (
  <ChakraProvider portalZIndex={40} theme={theme} {...props} />
)
