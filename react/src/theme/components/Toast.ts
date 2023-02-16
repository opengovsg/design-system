import { alertAnatomy } from '@chakra-ui/anatomy'
import {
  createMultiStyleConfigHelpers,
  StyleFunctionProps,
} from '@chakra-ui/react'

import { textStyles } from '../textStyles'

const parts = alertAnatomy.extend('close', 'content', 'wrapper')

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  title: textStyles['subhead-1'],
  description: {
    textStyle: 'body-1',
  },
  icon: {
    position: 'absolute',
  },
  wrapper: {
    borderRadius: 'base',
    boxSizing: 'border-box',
  },
  container: {
    borderRadius: 'base',
    background: 'inherit',
  },
  close: {
    position: 'absolute',
  },
})

const sizes = {
  md: definePartsStyle({
    icon: {
      left: '1.125rem',
      top: '1.125rem',
      boxSize: '1.25rem',
    },
    content: {
      // NOTE: This is because the outer container already has padding.
      // So the padding here is icon width + outer padding
      ml: '1.875rem',
    },
    wrapper: {
      width: {
        base: 'auto',
        lg: '42.5rem',
      },
      maxW: '100%',
    },
    container: {
      padding: '1rem',
      // Padding right is 1rem + 1rem (normal padding) + width of the button.
      // This is to prevent the button overlapping the text on resize.
      pr: '3.5rem',
    },
    close: {
      w: '1.5rem',
      h: '1.5rem',
      insetEnd: '1rem',
      top: '1rem',
      fontSize: '1.5rem',
    },
  }),
}

const getSubtleColors = ({ colorScheme: c }: StyleFunctionProps) => {
  switch (c) {
    case 'error':
      return {
        bg: 'utility.feedback.critical-subtle',
        border: '1px solid var(--chakra-colors-utility-feedback-critical)',
        iconFill: 'utility.feedback.critical',
      }
    case 'success':
      return {
        bg: 'utility.feedback.success-subtle',
        border: '1px solid var(--chakra-colors-utility-feedback-success)',
        iconFill: 'utility.feedback.success',
      }
    case 'warning':
      return {
        bg: 'utility.feedback.warning-subtle',
        border: '1px solid var(--chakra-colors-utility-feedback-warning)',
        iconFill: 'utility.feedback.warning',
      }
    default:
      return {
        bg: 'utility.feedback.info-subtle',
        border: '1px solid var(--chakra-colors-utility-feedback-info)',
        iconFill: 'utility.feedback.info',
      }
  }
}

const variantSubtle = definePartsStyle((props) => {
  const { bg, border, iconFill } = getSubtleColors(props)
  return {
    wrapper: {
      color: 'base.content.default',
      bg,
      border,
    },
    icon: {
      fill: iconFill,
    },
  }
})

const variants = {
  subtle: variantSubtle,
}

export const Toast = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    variant: 'subtle',
    size: 'md',
  },
})
