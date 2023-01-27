import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'

import { Input } from './Input'

export const parts = anatomy('taginput').parts('container', 'field')

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    cursor: 'text',
    height: 'auto',
    maxW: '100%',
    w: '100%',
    _disabled: {
      cursor: 'not-allowed',
    },
    transitionProperty: 'common',
    transitionDuration: 'normal',
  },
  field: {
    flexGrow: 1,
    _disabled: {
      cursor: 'not-allowed',
    },
  },
})

const variantOutline = definePartsStyle((props) => {
  const inputFieldVariantOutline = Input.variants?.outline(props).field

  return {
    container: {
      borderRadius: '4px',
      _focusWithin: inputFieldVariantOutline?._focusVisible,
      ...inputFieldVariantOutline,
    },
  }
})

const sizes = {
  md: definePartsStyle({
    container: {
      p: '0.375rem',
      minH: '2.75rem',
      gap: '0.25rem',
    },
    field: {
      ...Input.sizes?.md,
      py: '0.25rem',
      pl: '0.5rem',
    },
  }),
}

export const TagInput = defineMultiStyleConfig({
  baseStyle,
  variants: {
    outline: variantOutline,
  },
  sizes,
  defaultProps: {
    size: 'md',
    variant: 'outline',
    // @ts-expect-error Invalid exported type.
    focusBorderColor: Input.defaultProps?.focusBorderColor,
    // @ts-expect-error Invalid exported type.
    errorBorderColor: Input.defaultProps?.errorBorderColor,
    colorScheme: 'primary',
  },
})
