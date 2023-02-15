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
  xs: definePartsStyle({
    th: {
      py: '0.875rem',
      px: '1rem',
    },
    td: {
      py: '0.875rem',
      px: '1rem',
      textStyle: 'caption-2',
    },
  }),
  sm: definePartsStyle({
    th: {
      py: '0.875rem',
      px: '1rem',
    },
    td: {
      py: '0.875rem',
      px: '1rem',
      textStyle: 'caption-2',
    },
  }),
  md: {
    th: {
      p: '1rem',
    },
    td: {
      textStyle: 'body-2',
      p: '1rem',
    },
  },
  lg: {
    th: {
      px: '1rem',
      py: '1.125rem',
    },
    td: {
      textStyle: 'body-2',
      px: '1rem',
      py: '1.125rem',
    },
  },
}

const getSubtleVariantThStyles = (c: string): SystemStyleObject => {
  const baseStyles: SystemStyleObject = {
    ...textStyles['caption-1'],
    textTransform: 'initial',
    _focusVisible: layerStyles.focusRing.tightDefault._focusVisible,
  }

  switch (c) {
    case 'main':
    case 'sub':
    case 'critical':
    case 'warning':
    case 'success': {
      return {
        bg: `interaction.${c}-subtle.default`,
        color: `interaction.${c}.default`,
        _hover: {
          bg: `interaction.${c}-subtle.hover`,
          cursor: 'pointer',
        },
        _active: {
          bg: `interaction.${c}-subtle.active`,
        },
        ...baseStyles,
      }
    }
    case 'neutral': {
      return {
        bg: `interaction.${c}-subtle.default`,
        color: 'base.content.medium',
        _hover: {
          bg: `interaction.${c}-subtle.hover`,
          cursor: 'pointer',
        },
        _active: {
          bg: `interaction.${c}-subtle.active`,
        },
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
    td: {
      color: 'base.content.default',
    },
  }
})

const variants = {
  subtle: variantSubtle,
}

export const Table = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'subtle',
    colorScheme: 'main',
  },
  sizes,
})
