import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'

import { theme as baseTheme } from '~/theme/theme'

export const theme = extendTheme(baseTheme, {
  colors,
})
