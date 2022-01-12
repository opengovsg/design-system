import { ChakraProvider, ChakraProviderProps } from '@chakra-ui/react'
import { FC } from 'react'
import { theme } from './theme'

/**
 * The global provider that must be added to make all components in this design
 * system work correctly
 */
export const ThemeProvider: FC<ChakraProviderProps> = (props) => (
  <ChakraProvider theme={theme} {...props} />
)
