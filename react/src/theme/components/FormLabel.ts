import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

import { textStyles } from '../textStyles'

const baseStyle = defineStyle({
  marginBottom: '0.75rem',
  color: 'base.content.strong',
})

const sizes = {
  sm: defineStyle({
    ...textStyles['subhead-2'],
  }),
  md: defineStyle({
    ...textStyles['subhead-1'],
  }),
}

export const FormLabel = defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
  },
})
