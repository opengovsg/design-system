import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

import { DatePicker, datepickerAnatomy } from './DatePicker'
import { Input } from './Input'

const parts = datepickerAnatomy.extend('fieldwrapper', 'field')

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const variantOutline = definePartsStyle((props) => {
  const inputFieldVariantOutline = Input.variants?.outline(props).field

  return {
    fieldwrapper: {
      ...inputFieldVariantOutline,
      cursor: 'text',
      flex: 1,
      zIndex: 1,
      px: '1rem',
      borderEndRadius: '0',
      marginInlineEnd: '-1px',
      transitionProperty: 'common',
      transitionDuration: 'normal',
      _focusWithin: inputFieldVariantOutline?._focusVisible,
    },
    field: {
      _disabled: {
        cursor: 'not-allowed',
      },
      transitionProperty: 'common',
      transitionDuration: 'normal',
      display: 'flex',
      flex: 1,
    },
  }
})

const sizes = {
  xs: definePartsStyle({
    fieldwrapper: Input.sizes?.xs.field,
    inputButton: DatePicker.sizes?.xs.inputButton,
  }),
  sm: definePartsStyle({
    fieldwrapper: Input.sizes?.sm.field,
    inputButton: DatePicker.sizes?.sm.inputButton,
  }),
  md: definePartsStyle({
    fieldwrapper: Input.sizes?.md.field,
    inputButton: DatePicker.sizes?.md.inputButton,
  }),
}

const variants = {
  outline: variantOutline,
}

export const DateRangePicker = defineMultiStyleConfig({
  variants,
  sizes,
  baseStyle: DatePicker.baseStyle,
  defaultProps: {
    variant: 'outline',
    size: 'md',
  },
})
