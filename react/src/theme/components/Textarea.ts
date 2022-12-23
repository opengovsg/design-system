import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

import { Input } from './Input'

const sizes = {
  xs: defineStyle({
    ...Input.sizes?.xs.field,
    px: '0.75rem',
    py: '0.5rem',
  }),
  sm: defineStyle({
    ...Input.sizes?.sm.field,
    px: '0.75rem',
    py: '0.625rem',
  }),
  md: defineStyle({
    ...Input.sizes?.md.field,
    px: '1rem',
    py: '0.625rem',
  }),
}

const baseStyle = defineStyle({
  transitionProperty: 'common',
  transitionDuration: 'normal',
})

const variantOutline = defineStyle((props) => ({
  ...Input.variants?.outline(props).field,
}))

const variants = {
  outline: variantOutline,
}

export const Textarea = defineStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: Input.defaultProps,
})
