import { anatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const parts = anatomy('Toggle').parts(
  'label',
  'description',
  'overallContainer', // container for our custom component which contains text + toggle
)

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  label: {
    textStyle: 'subhead-1',
    color: 'base.content.strong',
  },
  description: {
    textStyle: 'body-2',
    color: 'base.content.default',
  },
  overallContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

const sizes = {
  md: definePartsStyle({
    label: {
      mr: '1rem',
      mb: 0,
    },
  }),
}

export const Toggle = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
  },
})
