import { extendTheme } from '@chakra-ui/react'

import { breakpoints } from './foundations/breakpoints'
import { colours } from './foundations/colours'
import { shadows } from './foundations/shadows'
import { spacing } from './foundations/spacing'
import { transition } from './foundations/transition'
import { typography } from './foundations/typography'
import { components } from './components'
import { layerStyles } from './layerStyles'
import { textStyles } from './textStyles'

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: {
      body: {
        fontFeatureSettings: "'tnum' on, 'cv05' on",
      },
    },
  },
  colors: colours,
  breakpoints,
  shadows: shadows,
  space: spacing,
  transition,
  fonts: {
    heading: 'Inter,Helvetica,Arial,system-ui,sans-serif',
    body: 'Inter,Helvetica,Arial,system-ui,sans-serif',
  },
  fontSizes: typography.fontSize,
  fontWeights: typography.fontWeights,
  lineHeights: typography.lineHeights,
  letterSpacings: typography.letterSpacing,
  textStyles,
  layerStyles,
  components,
})
