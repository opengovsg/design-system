import { tagAnatomy } from '@chakra-ui/anatomy'
import {
  createMultiStyleConfigHelpers,
  defineStyle,
  mergeThemeOverride,
} from '@chakra-ui/react'

import { layerStyles } from '../layerStyles'
import { textStyles } from '../textStyles'

import { Badge } from './Badge'

const parts = tagAnatomy.extend('icon')

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyleContainer = defineStyle({
  transitionProperty: 'common',
  transitionDuration: 'normal',
  _focusWithin: layerStyles.focusRing.default._focusVisible,
  borderRadius: '4px',
  _disabled: {
    bg: 'interaction.support.disabled',
    color: 'interaction.support.disabled-content',
    cursor: 'not-allowed',
  },
  _hover: {
    _disabled: {
      bg: 'interaction.support.disabled',
    },
  },
  height: 'fit-content',
})

const baseStyleLabel = defineStyle({
  textStyle: 'body-2',
})

const baseStyleCloseButton = defineStyle({
  display: 'flex',
  alignItems: 'center',
  opacity: 1,
  outline: 'none',
  _hover: {
    opacity: 1,
  },
  _disabled: {
    cursor: 'not-allowed',
    opacity: 1,
  },
  _focusVisible: {
    boxShadow: 'none',
    bg: 'transparent',
  },
})

const baseStyle = definePartsStyle({
  container: baseStyleContainer,
  label: baseStyleLabel,
  closeButton: baseStyleCloseButton,
})

const sizes = {
  sm: definePartsStyle({
    container: {
      ...textStyles['body-2'],
      px: '0.5rem',
      py: '0.125rem',
    },
    label: textStyles['body-2'],
    icon: {
      fontSize: '1.25rem',
      marginStart: '0.25rem',
      marginEnd: '0.25rem',
    },
    closeButton: {
      fontSize: '1.25rem',
      marginStart: '0.25rem',
    },
  }),
  md: definePartsStyle({
    container: {
      ...textStyles['subhead-2'],
      px: '0.5rem',
      py: '0.25rem',
    },
    label: textStyles['subhead-2'],
    closeButton: {
      fontSize: '1.25rem',
      marginStart: '0.25rem',
    },
    icon: {
      fontSize: '1.25rem',
      marginStart: '0.25rem',
      marginEnd: '0.25rem',
    },
  }),
}

const getSubtleColors = defineStyle(({ colorScheme: c }) => {
  switch (c) {
    case 'main':
    case 'success':
    case 'warning':
    case 'critical':
      return {
        _hover: {
          background: `interaction.${c}-light.hover`,
        },
        _active: {
          background: `interaction.${c}-light.active`,
        },
      }
  }
  return {
    _hover: {
      background: `${c}.200`,
    },
    _active: {
      background: `${c}.300`,
    },
  }
})

const variantSubtle = definePartsStyle((props) => {
  return {
    container: mergeThemeOverride(
      Badge.variants.subtle(props),
      getSubtleColors(props),
    ),
  }
})

const getSolidColors = defineStyle(({ colorScheme: c }) => {
  switch (c) {
    case 'main':
    case 'success':
    case 'warning':
    case 'critical':
      return {
        _hover: {
          background: `interaction.${c}.hover`,
        },
        _active: {
          background: `interaction.${c}.active`,
        },
      }
  }
  return {
    _hover: {
      background: `${c}.600`,
    },
    _active: {
      background: `${c}.700`,
    },
  }
})

const variantSolid = definePartsStyle((props) => {
  return {
    container: mergeThemeOverride(
      Badge.variants.solid(props),
      getSolidColors(props),
    ),
  }
})

const variants = {
  subtle: variantSubtle,
  solid: variantSolid,
}

export const Tag = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    size: 'md',
    variant: 'subtle',
    colorScheme: 'main',
  },
})
