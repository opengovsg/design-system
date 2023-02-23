import { formAnatomy } from '@chakra-ui/anatomy'
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from '@chakra-ui/styled-system'

import { textStyles } from '../textStyles'

const parts = formAnatomy.extend('icon', 'optionalIndicator')

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const $fg = cssVar('form-control-color')

const baseStyleRequiredIndicator = defineStyle({
  marginStart: '1',
  [$fg.variable]: 'utility.feedback.critical',
  color: $fg.reference,
})

const baseStyleHelperText = defineStyle({
  [$fg.variable]: 'base.content.medium',
  color: $fg.reference,
  alignItems: 'top',
  ...textStyles['body-2'],
  mt: 0,
})

const baseStyleOptionalIndicator = defineStyle({
  color: 'base.content.medium',
  ...textStyles['body-2'],
  ml: '0.5rem',
  lineHeight: 0,
})

const baseStyle = definePartsStyle({
  requiredIndicator: baseStyleRequiredIndicator,
  helperText: baseStyleHelperText,
  optionalIndicator: baseStyleOptionalIndicator,
  icon: {
    marginEnd: '0.5em',
    fontSize: '1rem',
    height: '1.25em',
  },
})

const variantSuccess = definePartsStyle({
  helperText: {
    [$fg.variable]: 'utility.feedback.success',
    color: $fg.reference,
  },
})

const variants = {
  success: variantSuccess,
}

export const FormControl = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    size: 'md',
  },
})
