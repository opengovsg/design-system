import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import omit from 'lodash/omit'

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
  xs: definePartsStyle((props) => {
    return {
      fieldwrapper: Input.sizes?.xs(props).field,
      inputButton: DatePicker.sizes?.xs(props).inputButton,
    }
  }),
  sm: definePartsStyle((props) => {
    return {
      fieldwrapper: Input.sizes?.sm(props).field,
      inputButton: DatePicker.sizes?.sm(props).inputButton,
    }
  }),
  md: definePartsStyle((props) => {
    return {
      fieldwrapper: Input.sizes?.md(props).field,
      inputButton: DatePicker.sizes?.md(props).inputButton,
    }
  }),
}

const variants = {
  outline: variantOutline,
}

export const DateRangePicker = defineMultiStyleConfig({
  variants,
  sizes,
  baseStyle: (props) => omit(DatePicker.baseStyle?.(props), 'field'),
  defaultProps: {
    variant: 'outline',
    size: 'md',
  },
})
