import { tagAnatomy } from '@chakra-ui/anatomy'
import {
  createMultiStyleConfigHelpers,
  defineStyle,
  mergeThemeOverride,
} from '@chakra-ui/react'
import { memoizedGet as get } from '@chakra-ui/utils'

import { layerStyles } from '../layerStyles'
import { textStyles } from '../textStyles'

import { Badge } from './Badge'

const parts = tagAnatomy.extend('icon')

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyleContainer = defineStyle(({ theme }) => {
  const focusRingStyle = get(
    theme,
    'layerStyles.focusRing.default._focusVisible',
    layerStyles.focusRing.default._focusVisible,
  )

  return {
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _focusWithin: focusRingStyle,
    borderRadius: 'base',
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
    width: 'fit-content',
    height: 'fit-content',
  }
})

const baseStyleLabel = defineStyle({
  textStyle: 'body-2',
  whiteSpace: 'initial',
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

const baseStyle = definePartsStyle((props) => {
  return {
    container: baseStyleContainer(props),
    label: baseStyleLabel,
    closeButton: baseStyleCloseButton,
  }
})

const sizes = {
  xs: definePartsStyle({
    container: {
      ...textStyles['caption-1'],
      px: '0.5rem',
      py: '0.125rem',
    },
    label: textStyles['caption-1'],
    icon: {
      fontSize: '0.875rem',
      marginStart: '0.125rem',
      marginEnd: '0.125rem',
      height: '1rem',
    },
    closeButton: {
      fontSize: '0.875rem',
      marginStart: '0.125rem',
      height: '1rem',
    },
  }),
  sm: definePartsStyle({
    container: {
      ...textStyles['body-2'],
      px: '0.5rem',
      py: '0.125rem',
    },
    label: textStyles['body-2'],
    icon: {
      fontSize: '1.125rem',
      marginStart: '0.25rem',
      marginEnd: '0.25rem',
      height: '1.25rem',
    },
    closeButton: {
      fontSize: '1.125rem',
      marginStart: '0.25rem',
      height: '1.25rem',
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
      fontSize: '1.125rem',
      marginStart: '0.25rem',
      height: '1.25rem',
    },
    icon: {
      fontSize: '1.125rem',
      marginStart: '0.25rem',
      marginEnd: '0.25rem',
      height: '1.25rem',
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
          background: `interaction.${c}-subtle.hover`,
        },
        _active: {
          background: `interaction.${c}-subtle.active`,
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
