import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import { cssVar } from '@chakra-ui/theme-tools'

import { layerStyles } from '../layerStyles'

import { Button } from './Button'

const $size = cssVar('close-button-size')

const sizes = {
  lg: defineStyle({
    [$size.variable]: Button.sizes?.lg.minH,
  }),
  md: defineStyle({
    [$size.variable]: Button.sizes?.md.minH,
  }),
  sm: defineStyle({
    [$size.variable]: Button.sizes?.sm.minH,
  }),
  xs: defineStyle({
    [$size.variable]: Button.sizes?.xs.minH,
  }),
}

const baseStyle = defineStyle({
  p: 0,
  _focusVisible: layerStyles.focusRing.default._focusVisible,
  w: [$size.reference],
  h: [$size.reference],
})

const variantClear = defineStyle((props) => {
  return {
    ...Button.variants?.clear(props),
    px: 'initial',
  }
})

const variants = {
  clear: variantClear,
}

export const CloseButton = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    colorScheme: 'neutral',
    size: 'md',
  },
})
