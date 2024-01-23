import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import { cssVar } from '@chakra-ui/theme-tools'
import { memoizedGet as get } from '@chakra-ui/utils'

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

const baseStyle = defineStyle(({ theme }) => {
  const focusRingStyle = get(
    theme,
    'layerStyles.focusRing.default._focusVisible',
    layerStyles.focusRing.default._focusVisible,
  )

  return {
    p: 0,
    _focusVisible: focusRingStyle,
    w: [$size.reference],
    h: [$size.reference],
  }
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
