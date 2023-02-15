import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'

import { layerStyles } from '../layerStyles'

import { Button } from './Button'

const parts = anatomy('toolbar').parts('container', 'group', 'divider')

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  container: {
    textStyle: 'subhead-2',
  },
  divider: {
    borderColor: 'base.divider.medium',
  },
})

const getSolidVariantContainerStyles = (c: string) => {
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

const variantSolid = definePartsStyle((props) => {
  const { colorScheme: c } = props

  return {
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      ...getSolidVariantContainerStyles(c),
    },
  }
})

const variants = {
  solid: variantSolid,
}

const sizes = {
  md: definePartsStyle({
    container: {
      h: '3rem',
      py: '0.625rem',
      pl: '1rem',
      pr: '0.25rem',
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
