import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'

const parts = anatomy('infobox').parts('messagebox', 'icon')

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  messagebox: {
    display: 'flex',
    justifyContent: 'start',
    color: 'base.content.strong',
  },
})

const variantInfo = definePartsStyle({
  messagebox: {
    bg: 'utility.feedback.info-subtle',
  },
  icon: {
    color: 'utility.feedback.info',
  },
})

const variantWarning = definePartsStyle({
  messagebox: {
    bg: 'utility.feedback.warning-subtle',
  },
  icon: {
    color: 'utility.feedback.warning',
  },
})

const variantError = definePartsStyle({
  messagebox: {
    bg: 'utility.feedback.critical-subtle',
  },
  icon: {
    color: 'utility.feedback.critical',
  },
})

const variantSuccess = definePartsStyle({
  messagebox: {
    bg: 'utility.feedback.success-subtle',
  },
  icon: {
    color: 'utility.feedback.success',
  },
})

const sizes = {
  sm: definePartsStyle({
    messagebox: {
      p: '0.625rem',
      textStyle: 'body-2',
    },
    icon: {
      my: '0.125rem',
      fontSize: '1rem',
      mr: '0.5rem',
    },
  }),
  md: definePartsStyle({
    messagebox: {
      padding: '1rem',
      textStyle: 'body-1',
    },
    icon: {
      fontSize: '1.5rem',
      mr: '0.5rem',
    },
  }),
}

const variants = {
  info: variantInfo,
  warning: variantWarning,
  error: variantError,
  success: variantSuccess,
}

export const Infobox = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'info',
    size: 'md',
  },
})
