import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

import { Input } from './Input'

const sizes = {
  xs: defineStyle((props) => {
    return {
      ...Input.sizes?.xs(props).field,
      px: '0.75rem',
      py: '0.5rem',
    }
  }),
  sm: defineStyle((props) => {
    return {
      ...Input.sizes?.sm(props).field,
      px: '0.75rem',
      py: '0.625rem',
    }
  }),
  md: defineStyle((props) => {
    return {
      ...Input.sizes?.md(props).field,
      px: '1rem',
      py: '0.625rem',
    }
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
