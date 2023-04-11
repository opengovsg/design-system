import { extendTheme } from '@chakra-ui/react'
import { colours } from './colours'

import { theme as baseTheme } from '~/theme/theme'

export const theme = extendTheme(baseTheme, {
  colors: colours,
})
