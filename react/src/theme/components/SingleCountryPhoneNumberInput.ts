import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'

import { Input } from './Input'

const parts = anatomy('singlecountryphonenumberinput').parts(
  'field',
  'iconContainer',
  'icon',
)

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const variantOutline = definePartsStyle((props) => {
  const { isSuccess } = props
  const inputStyle = Input.variants?.outline(props)

  return {
    field: {
      ...(isSuccess ? { paddingInlineEnd: '4.75rem' } : {}),
      ...inputStyle?.field,
    },
    icon: {
      w: '1.5em',
    },
    iconContainer: {
      pointerEvents: 'none',
      ...(isSuccess ? { mr: '2rem' } : {}),
      _disabled: {
        opacity: 0.6,
      },
    },
  }
})

const variants = {
  outline: variantOutline,
}

const sizes = {
  xs: definePartsStyle((props) => {
    return {
      field: {
        paddingInlineEnd: props.isSuccess ? '4rem' : undefined,
      },
      iconContainer: {
        ...Input.sizes?.xs(props).element,
        w: 'auto',
        px: '0.5rem',
      },
      icon: {
        fontSize: '0.75rem',
      },
    }
  }),
  sm: definePartsStyle((props) => {
    return {
      field: {
        paddingInlineEnd: props.isSuccess ? '4.75rem' : undefined,
      },
      iconContainer: {
        ...Input.sizes?.sm(props).element,
        w: 'auto',
        px: '0.5rem',
      },
      icon: {
        fontSize: '1rem',
      },
    }
  }),
  md: definePartsStyle((props) => {
    return {
      field: {
        paddingInlineEnd: props.isSuccess ? '4.75rem' : undefined,
      },
      icon: {
        fontSize: '1rem',
      },
      iconContainer: {
        ...Input.sizes?.md(props).element,
        w: 'auto',
        px: '0.5rem',
      },
    }
  }),
}

export const SingleCountryPhoneNumberInput = defineMultiStyleConfig({
  variants,
  sizes,
  defaultProps: Input.defaultProps,
})
