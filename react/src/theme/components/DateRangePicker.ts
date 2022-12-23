import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'

import { Input } from './Input'

const parts = anatomy('daterangepicker').parts('fieldwrapper', 'field')

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

const variants = {
  outline: variantOutline,
}

export const DateRangePicker = defineMultiStyleConfig({
  variants,
  defaultProps: {
    variant: 'outline',
    size: 'md',
  },
})
