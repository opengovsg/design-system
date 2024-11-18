import { extendTheme } from '@chakra-ui/react'
import { colors } from './colors'
import { shadows } from './shadows'
import { spacing } from './spacing'
import { textStyles } from './textStyles'
import { typography } from './typography'

import { theme as baseTheme } from '~/theme/theme'

export const theme = extendTheme(baseTheme, {
  colors,
  shadows,
  space: spacing,
  fontSizes: typography.fontSize,
  fontWeights: typography.fontWeights,
  lineHeights: typography.lineHeights,
  letterSpacings: typography.letterSpacing,
  textStyles,
})
