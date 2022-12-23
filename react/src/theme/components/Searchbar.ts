import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'

const parts = anatomy('searchbar').parts('icon')

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const variantOutline = definePartsStyle({
  icon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'base.content.dark',
  },
})

const sizes = {
  xs: definePartsStyle({
    icon: {
      fontSize: '0.875rem',
    },
  }),
  sm: definePartsStyle({
    icon: {
      fontSize: '1rem',
    },
  }),
  md: definePartsStyle({
    icon: {
      fontSize: '1.25rem',
    },
  }),
}

const variants = {
  outline: variantOutline,
}

export const Searchbar = defineMultiStyleConfig({
  variants,
  sizes,
  defaultProps: {
    variant: 'outline',
    size: 'md',
  },
})
