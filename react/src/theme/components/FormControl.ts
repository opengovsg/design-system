import { formAnatomy } from '@chakra-ui/anatomy'
import {
  createMultiStyleConfigHelpers,
  defineStyle,
} from '@chakra-ui/styled-system'

const parts = formAnatomy.extend('icon')

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyleRequiredIndicator = defineStyle({
  marginStart: '1',
  color: 'utility.feedback.critical',
})

const baseStyleHelperText = defineStyle({
  mt: '0.5rem',
  color: 'base.content.light',
  textStyle: 'body-2',
  lineHeight: '1.25rem',
  alignItems: 'top',
  display: 'flex',
})

const baseStyle = definePartsStyle({
  requiredIndicator: baseStyleRequiredIndicator,
  helperText: baseStyleHelperText,
  icon: {
    marginEnd: '0.5em',
    fontSize: '1rem',
    height: '1.25em',
  },
})

const variantSuccess = definePartsStyle({
  helperText: {
    color: 'utility.feedback.success',
  },
})

const variants = {
  success: variantSuccess,
}

export const FormControl = defineMultiStyleConfig({
  baseStyle,
  variants,
})
