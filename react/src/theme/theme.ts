import { extendTheme } from '@chakra-ui/react'

import { breakpoints } from './foundations/breakpoints'
import { colours } from './foundations/colours'
import { semanticTokens } from './foundations/semanticTokens'
import { shadows } from './foundations/shadows'
import { spacing } from './foundations/spacing'
import { transition } from './foundations/transition'
import { typography } from './foundations/typography'
import { components } from './components'
import { layerStyles } from './layerStyles'
import { textStyles } from './textStyles'

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFeatureSettings: "'tnum' on, 'cv05' on",
      },
    },
  },
  semanticTokens,
  colors: colours,
  breakpoints,
  shadows: shadows,
  space: spacing,
  transition,
  fonts: {
    heading:
      'Inter,Trebuchet MS,-apple-system,Arial,BlinkMacSystemFont,sans-serif',
    body: 'Inter,Trebuchet MS,-apple-system,Arial,BlinkMacSystemFont,sans-serif',
    code: 'IBM Plex Mono,Courier,Monaco,Courier New,monospace',
  },
  fontSizes: typography.fontSize,
  fontWeights: typography.fontWeights,
  lineHeights: typography.lineHeights,
  letterSpacings: typography.letterSpacing,
  textStyles,
  layerStyles,
  components,
})
