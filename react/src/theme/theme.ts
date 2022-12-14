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
  styles: {
    global: {
      body: {
        fontFeatureSettings: "'tnum' on, 'cv05' on",
      },
      /**
       * This will hide the focus indicator if the element receives focus via
       * the mouse,but it will still show up on keyboard focus.
       * Part of the steps needed to get focus-visible working.
       * See https://www.npmjs.com/package/focus-visible#2-update-your-css.
       */
      '.js-focus-visible :focus:not([data-focus-visible-added])': {
        outline: 'none',
      },
      '.focus-visible': { outline: 'none' },
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
