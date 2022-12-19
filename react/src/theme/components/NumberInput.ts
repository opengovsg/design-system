import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'

import { Input } from './Input'

// This numberinput component anatomy is distinct from the one in ChakraUI's
// core library.
const parts = anatomy('numberinput').parts(
  'root',
  'field',
  'stepper',
  'stepperButton',
  'stepperWrapper',
  'stepperDivider',
)

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  root: {
    position: 'relative',
    zIndex: 0,
  },
  stepperWrapper: {
    zIndex: 1,
    display: 'flex',
    alignItems: 'center',
    pos: 'absolute',
    right: 0,
    top: 0,
    border: '1px solid transparent',
  },
  stepperButton: {
    color: 'base.content.dark',
    borderRadius: 0,
    minH: '100%',
    _disabled: {
      cursor: 'not-allowed',
    },
    _last: {
      borderRightRadius: '4px',
    },
  },
  stepperDivider: {
    border: undefined,
  },
})

const sizes = {
  xs: definePartsStyle({
    stepper: {
      fontSize: '1rem',
    },
    stepperWrapper: {
      h: Input.sizes?.xs.field.h,
    },
    field: Input.sizes?.xs.field,
    stepperDivider: {
      h: '1rem',
    },
  }),
  sm: definePartsStyle({
    stepper: {
      fontSize: '1rem',
    },
    stepperWrapper: {
      h: Input.sizes?.sm.field.h,
    },
    field: Input.sizes?.sm.field,
    stepperDivider: {
      h: '1rem',
    },
  }),
  md: definePartsStyle({
    stepper: {
      fontSize: '1rem',
    },
    stepperWrapper: {
      h: Input.sizes?.md.field.h,
    },
    field: Input.sizes?.md.field,
    stepperDivider: {
      h: '1.25rem',
    },
  }),
}

const variantOutline = definePartsStyle((props) => ({
  field: Input.variants?.outline(props).field,
}))

const variants = {
  outline: variantOutline,
}

export const NumberInput = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants: variants,
  defaultProps: Input.defaultProps,
})
