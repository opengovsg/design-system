import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'

import { textStyles } from '../textStyles'

const parts = anatomy('pagination').parts(
  'button',
  'container',
  'separator',
  'stepper',
  'text',
)

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseButtonStyling = defineStyle({
  h: 'auto',
  border: 'none',
  borderRadius: 'sm',
  cursor: 'pointer',
  alignSelf: 'center',
  color: 'base.content.default',
  bg: 'transparent',
  _activeLink: {
    bg: 'interaction.support.selected',
    color: 'base.content.inverse',
    _hover: {
      bg: 'interaction.support.selected',
    },
    _disabled: {
      bg: 'interaction.support.disabled',
      color: 'interaction.support.disabled-content',
    },
  },
  _active: {
    bg: 'interaction.muted.neutral.active',
  },
  _hover: {
    bg: 'interaction.muted.neutral.hover',
  },
  _focusVisible: {
    boxShadow: `0 0 0 2px var(--chakra-colors-utility-focus-default)`,
  },
  _disabled: {
    cursor: 'not-allowed',
    color: 'interaction.support.disabled-content',
    _hover: {
      bg: 'transparent',
    },
  },
})

const sizes = {
  md: definePartsStyle({
    container: {
      textStyle: 'subhead-2',
    },
    stepper: {
      px: '0.5rem',
      py: '0.25rem',
      minH: 'auto',
      minW: 'auto',
      fontSize: '1.5rem',
      pl: 0,
      pr: 0,
      _first: {
        mr: '0.25rem',
      },
      _last: {
        ml: '0.25rem',
      },
    },
    separator: {
      textStyle: 'subhead-2',
      minW: '2rem',
    },
    button: {
      ...textStyles['subhead-2'],
      p: '0.25rem 0.625rem',
      minH: 'auto',
      minW: 'auto',
    },
    text: {
      textStyle: 'body-2',
      p: '0.25rem 0.75rem',
    },
  }),
}

const variantFull = definePartsStyle({
  separator: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    _disabled: {
      color: 'interaction.support.disabled-content',
    },
  },
})

const variantMinimal = definePartsStyle({
  text: {
    alignSelf: 'center',
    color: 'base.content.default',
    _disabled: {
      color: 'interaction.support.disabled-content',
    },
  },
})

const baseStyle = definePartsStyle({
  container: {
    display: 'flex',
    justifyContent: 'center',
  },
  stepper: baseButtonStyling,
  button: baseButtonStyling,
})

const variants = {
  full: variantFull,
  minimal: variantMinimal,
}

export const Pagination = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    variant: 'full',
    size: 'md',
  },
})
