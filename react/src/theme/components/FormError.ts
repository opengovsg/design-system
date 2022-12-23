import { formErrorAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  text: {
    color: 'utility.feedback.critical',
    my: '0.5rem',
    textStyle: 'body-2',
    lineHeight: '1.25rem',
  },
  icon: {
    marginEnd: '0.5em',
    color: 'utility.feedback.critical',
    fontSize: '1rem',
    h: '1.25rem',
  },
})

export const FormError = defineMultiStyleConfig({
  baseStyle,
})
