import { formAnatomy } from '@chakra-ui/anatomy'
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from '@chakra-ui/styled-system'
import { memoizedGet as get } from '@chakra-ui/utils'

const parts = formAnatomy.extend('icon', 'optionalIndicator')

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const $fg = cssVar('form-control-color')

const baseStyleRequiredIndicator = defineStyle({
  marginStart: '1',
  [$fg.variable]: 'colors.utility.feedback.critical',
  color: $fg.reference,
})

const baseStyleHelperText = defineStyle(({ theme }) => {
  const themeTextStyles = get(theme, 'textStyles')

  return {
    [$fg.variable]: 'colors.base.content.medium',
    color: $fg.reference,
    ...themeTextStyles['body-2'],
    mt: 0,
  }
})

const baseStyleOptionalIndicator = defineStyle(({ theme }) => {
  const themeTextStyles = get(theme, 'textStyles')

  return {
    color: 'base.content.medium',
    ...themeTextStyles['body-2'],
    ml: '0.5rem',
    lineHeight: 0,
  }
})

const baseStyle = definePartsStyle((props) => {
  return {
    requiredIndicator: baseStyleRequiredIndicator,
    helperText: baseStyleHelperText(props),
    optionalIndicator: baseStyleOptionalIndicator(props),
    icon: {
      marginEnd: '0.5em',
      fontSize: '1rem',
      height: '1.25em',
      verticalAlign: 'bottom',
    },
  }
})

const variantSuccess = definePartsStyle({
  helperText: {
    [$fg.variable]: 'colors.utility.feedback.success',
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
