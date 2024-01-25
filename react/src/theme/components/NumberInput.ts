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
    color: 'base.content.strong',
    borderRadius: 0,
    minH: '100%',
    _disabled: {
      cursor: 'not-allowed',
    },
    _last: {
      borderRightRadius: '4px',
    },
  },
})

const sizes = {
  xs: definePartsStyle((props) => {
    return {
      stepper: {
        fontSize: '1rem',
      },
      stepperWrapper: {
        h: Input.sizes?.xs(props).field.h,
      },
      field: Input.sizes?.xs(props).field,
      stepperDivider: {
        h: '1rem',
      },
    }
  }),
  sm: definePartsStyle((props) => {
    return {
      stepper: {
        fontSize: '1rem',
      },
      stepperWrapper: {
        h: Input.sizes?.sm(props).field.h,
      },
      field: Input.sizes?.sm(props).field,
      stepperDivider: {
        h: '1rem',
      },
    }
  }),
  md: definePartsStyle((props) => {
    return {
      stepper: {
        fontSize: '1rem',
      },
      stepperWrapper: {
        h: Input.sizes?.md(props).field.h,
      },
      field: Input.sizes?.md(props).field,
      stepperDivider: {
        h: '1.25rem',
      },
    }
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
