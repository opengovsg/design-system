import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'

export type InfoboxVariant = 'info' | 'error' | 'warning'

const parts = anatomy('infobox').parts('messagebox', 'icon')

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  messagebox: {
    display: 'flex',
    justifyContent: 'start',
    color: 'base.content.dark',
  },
})

const variantInfo = definePartsStyle({
  messagebox: {
    bg: 'utility.feedback.info-light',
  },
  icon: {
    color: 'utility.feedback.info',
  },
})

const variantWarning = definePartsStyle({
  messagebox: {
    bg: 'utility.feedback.warning-light',
  },
  icon: {
    color: 'utility.feedback.warning',
  },
})

const variantError = definePartsStyle({
  messagebox: {
    bg: 'utility.feedback.critical-light',
  },
  icon: {
    color: 'utility.feedback.critical',
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
