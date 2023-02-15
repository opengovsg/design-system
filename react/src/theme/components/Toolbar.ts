import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'

import { layerStyles } from '../layerStyles'

import { Button } from './Button'

const parts = anatomy('toolbar').parts('container', 'button', 'group')

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  container: {
    textStyle: 'subhead-2',
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

const getSolidVariantButtonStyles = (c: string) => {
  if (c === 'main') {
    return {
      // @ts-expect-error type mismatch
      ...Button.variants?.clear({
        colorScheme: 'inverse',
      }),
      _focusVisible: layerStyles.focusRing.inverse._focusVisible,
    }
  }

  // @ts-expect-error type mismatch
  return Button.variants?.clear({ colorScheme: c })
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
    button: getSolidVariantButtonStyles(c),
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
