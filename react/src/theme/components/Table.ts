import { tableAnatomy as parts } from '@chakra-ui/anatomy'
import {
  createMultiStyleConfigHelpers,
  SystemStyleObject,
} from '@chakra-ui/react'

import { layerStyles } from '../layerStyles'
import { textStyles } from '../textStyles'

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({})

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

const getSubtleVariantThStyles = (c: string): SystemStyleObject => {
  const baseStyles: SystemStyleObject = {
    ...textStyles['caption-1'],
    textTransform: 'initial',
  }

  switch (c) {
    case 'main':
    case 'sub':
    case 'critical':
    case 'neutral':
    case 'warning':
    case 'success': {
      return {
        bg: `interaction.${c}-subtle.default`,
        color: `interaction.${c}.default`,
        _hover: {
          bg: `interaction.${c}-subtle.hover`,
        },
        _active: {
          bg: `interaction.${c}-subtle.active`,
        },
        _focusVisible: layerStyles.focusRing.tightDefault._focusVisible,
        ...baseStyles,
      }
    }
    default: {
      return {
        bg: `interaction.main-subtle.default`,
        ...baseStyles,
      }
    }
  }
}

const variantSubtle = definePartsStyle(({ colorScheme: c }) => {
  return {
    th: getSubtleVariantThStyles(c),
  }
})

const variants = {
  subtle: variantSubtle,
}

export const Table = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    colorScheme: 'main',
  },
  sizes,
})
