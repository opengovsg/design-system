import { accordionAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

import { layerStyles } from '../layerStyles'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyleButton = defineStyle({
  px: '1rem',
  py: '0.5rem',
})

const variantMedium = definePartsStyle(({ colorScheme: c }) => {
  return {
    button: {
      p: '1rem',
      _hover: {
        color: `${c}.600`,
        bg: 'initial',
      },
      _active: {
        color: `${c}.700`,
      },
      _focusVisible: {
        boxShadow: `0 0 0 2px var(--chakra-colors-${c}-500)`,
      },
    },
  }
})

const variantSidebar = definePartsStyle(({ colorScheme: c }) => {
  return {
    root: {
      w: '100%',
    },
    panel: {
      p: 0,
    },
    container: {
      border: 'none',
    },
    button: {
      gap: '1rem',
      justifyContent: 'space-between',
      outlineOffset: '-2px',
      color: `interaction.support.unselected-strong`,
      borderColor: 'base.divider.strong',
      p: '1rem',
      _expanded: {
        bg: `interaction.main-subtle.default`,
        color: `interaction.main.default`,
        borderColor: `interaction.main.default`,
        _hover: {
          bg: `interaction.main-subtle.hover`,
        },
      },
      _hover: {
        color: `interaction.main.hover`,
        bg: `interaction.main-subtle.hover`,
        borderColor: `interaction.main.default`,
      },
      _focusVisible: {
        ...layerStyles.focusRing.default._focusVisible,
        outlineOffset: '-2px',
      },
    },
  }
})

const baseStyle = defineStyle({
  button: baseStyleButton,
})

const variants = {
  medium: variantMedium,
  sidebar: variantSidebar,
}

export const Accordion = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    colorScheme: 'brand.primary',
  },
})
