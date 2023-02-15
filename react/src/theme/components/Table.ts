import { tableAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const sizes = {
  sm: definePartsStyle({
    th: {
      py: '0.5rem',
      px: '0.5rem',
    },
    td: {
      px: { base: 0, md: '0.5rem' },
      py: { base: '0.75rem', md: '0.375rem' },
    },
  }),
}

const variants = {}

export const Table = defineMultiStyleConfig({
  variants,
  defaultProps: {
    colorScheme: 'main',
  },
  sizes,
})
