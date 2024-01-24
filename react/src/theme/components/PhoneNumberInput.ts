import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy, getColor } from '@chakra-ui/theme-tools'

import { Input } from './Input'

const parts = anatomy('phonenumberinput').parts(
  'field',
  'country',
  'icon',
  'selector',
)

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const outlineVariant = definePartsStyle((props) => {
  const inputFieldStyle = Input.variants?.outline(props).field
  const { theme, focusBorderColor: fc } = props

  return {
    field: {
      ...inputFieldStyle,
      borderLeftRadius: 0,
    },
    country: {
      transitionProperty: 'common',
      transitionDuration: 'normal',
      bg: 'utility.ui',
      border: '1px solid',
      borderColor: 'base.divider.strong',
      _disabled: {
        ...inputFieldStyle?._disabled,
        cursor: 'not-allowed',
      },
      _active: {
        borderColor: fc,
        boxShadow: `0 0 0 1px ${getColor(theme, fc)}`,
        bg: 'interaction.tinted.main.active',
        _disabled: {
          boxShadow: 'none',
          borderColor: inputFieldStyle?._disabled.borderColor,
        },
      },
      _focusWithin: {
        zIndex: 1,
        borderColor: fc,
        boxShadow: `0 0 0 1px ${getColor(theme, fc)}`,
      },
      _hover: { bg: 'interaction.tinted.main.hover' },
      pos: 'relative',
    },
    selector: {
      cursor: 'pointer',
      opacity: 0,
      pos: 'absolute',
      w: '100%',
      h: '100%',
      left: 0,
      top: 0,
      _disabled: {
        cursor: 'not-allowed',
      },
    },
    icon: {
      mr: '0.5rem',
      w: '1.5em',
      _disabled: {
        opacity: 0.6,
      },
    },
  }
})

const sizes = {
  xs: definePartsStyle((props) => {
    return {
      country: {
        ...Input.sizes?.xs(props).addon,
        px: '0.5rem',
      },
      icon: {
        fontSize: '0.75rem',
      },
    }
  }),
  sm: definePartsStyle((props) => {
    return {
      country: {
        ...Input.sizes?.sm(props).addon,
        px: '0.5rem',
      },
      icon: {
        fontSize: '1rem',
      },
    }
  }),
  md: definePartsStyle((props) => {
    return {
      country: {
        ...Input.sizes?.md(props).addon,

        px: '0.5rem',
      },
      icon: {
        fontSize: '1rem',
      },
    }
  }),
}

const variants = {
  outline: outlineVariant,
}

export const PhoneNumberInput = defineMultiStyleConfig({
  variants,
  sizes,
  defaultProps: Input.defaultProps,
})
