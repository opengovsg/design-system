import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'
import { getColor } from '@chakra-ui/theme-tools'

// Additional success part.
const parts = inputAnatomy.extend('success')

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const outlineVariant = definePartsStyle((props) => {
  const {
    isSuccess,
    isPrefilled,
    theme,
    focusBorderColor: fc = 'utility.focus-default',
    errorBorderColor: ec = 'interaction.critical.default',
  } = props

  return {
    addon: {
      borderRadius: '4px',
    },
    field: {
      borderRadius: '4px',
      bg: isPrefilled ? 'utility.input-prefilled' : 'utility.ui',
      border: '1px solid',
      borderColor: isSuccess
        ? 'interaction.success.default'
        : 'base.divider.dark',
      _placeholder: {
        color: 'interaction.support.placeholder',
      },
      // Explicit styling here for other components that use a mock input.
      _invalid: {
        borderColor: getColor(theme, ec),
        // Remove extra 1px of outline.
        boxShadow: 'none',
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: getColor(theme, fc),
        boxShadow: `0 0 0 1px ${getColor(theme, fc)}`,
      },
      _disabled: {
        bg: 'interaction.support.disabled',
        borderColor: 'base.divider.dark',
        color: 'interaction.support.disabled-content',
        cursor: 'not-allowed',
        opacity: 1,
        _hover: {
          bg: 'interaction.support.disabled',
        },
        _active: {
          bg: 'interaction.support.disabled',
        },
      },
    },
    success: {
      pointerEvents: 'none',
      color: 'interaction.success.default',
    },
  }
})

const coreSizes = {
  xs: defineStyle({
    textStyle: 'body-2',
    px: '0.75rem',
    h: '2.25rem',
  }),
  sm: defineStyle({
    textStyle: 'body-2',
    px: '0.75rem',
    h: '2.5rem',
  }),
  md: defineStyle({
    px: '1rem',
    h: '2.75rem',
    textStyle: 'body-1',
  }),
}

const sizes = {
  xs: definePartsStyle({
    field: coreSizes.xs,
    addon: coreSizes.xs,
    element: coreSizes.xs,
    success: {
      ...coreSizes.xs,
      fontSize: '1rem',
    },
  }),
  sm: definePartsStyle({
    field: coreSizes.sm,
    addon: coreSizes.sm,
    element: coreSizes.sm,
    success: {
      ...coreSizes.sm,
      fontSize: '1rem',
    },
  }),
  md: definePartsStyle({
    field: coreSizes.md,
    addon: coreSizes.md,
    element: coreSizes.md,
    success: {
      ...coreSizes.md,
      fontSize: '1.25rem',
    },
  }),
}

export const Input = defineMultiStyleConfig({
  variants: {
    outline: outlineVariant,
  },
  sizes,
  defaultProps: {
    variant: 'outline',
    size: 'md',
    // @ts-expect-error Invalid exported type.
    focusBorderColor: 'utility.focus-default',
    errorBorderColor: 'interaction.critical.default',
  },
})
