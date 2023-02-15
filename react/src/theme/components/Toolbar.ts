import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy, SystemStyleObject } from '@chakra-ui/theme-tools'

const parts = anatomy('toolbar').parts('container')

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  container: {
    textStyle: 'subhead-2',
  },
})

const getSolidVariantContainerStyles = (c: string): SystemStyleObject => {
  switch (c) {
    case 'main':
      return {
        bg: 'interaction.main.default',
        color: 'white',
      }
    case 'neutral':
      return {
        bg: 'interaction.neutral-subtle.default',
        color: 'base.content.default',
      }
    default:
      return {
        bg: 'base.bg.default',
      }
  }
}

const variantSolid = definePartsStyle(({ colorScheme: c }) => {
  return {
    container: getSolidVariantContainerStyles(c),
  }
})

const variants = {
  solid: variantSolid,
}

const sizes = {
  md: definePartsStyle({
    container: {
      py: '0.625rem',
      px: '1rem',
    },
  }),
}

export const Toolbar = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    colorScheme: 'main',
    variant: 'solid',
    size: 'md',
  },
})
