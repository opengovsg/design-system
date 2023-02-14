import { createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/react'
import { anatomy, StyleFunctionProps } from '@chakra-ui/theme-tools'

import { layerStyles } from '../layerStyles'

import { Accordion } from './Accordion'

const parts = anatomy('sidebar').parts(
  'container',
  'item',
  'parent',
  'child',
  'icon',
)

const $fg = cssVar('sidebar-color')
const $bg = cssVar('sidebar-bg')

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const sizes = {
  xs: definePartsStyle({
    icon: {
      fontSize: '0.875rem',
    },
  }),
  sm: definePartsStyle({
    icon: {
      fontSize: '1rem',
    },
  }),
  md: definePartsStyle({
    icon: {
      fontSize: '1.25rem',
    },
  }),
}
const getColorsForLineVariant = ({ colorScheme: c }: StyleFunctionProps) => {
  switch (c) {
    case 'main':
    case 'sub':
    case 'critical':
      return {
        color: 'interaction.support.unselected',
        selectedColor: `interaction.${c}.default`,
        hoverColor: `interaction.${c}.hover`,
        hoverBg: `interaction.muted.${c}-subtle.hover`,
        activeBg: `interaction.muted.${c}.active`,
        borderColor: 'base.divider.strong',
      }
    default:
      return {
        color: 'interaction.support.unselected',
        borderColor: 'base.divider.strong',
        selectedColor: `${c}.500`,
        hoverColor: `${c}.600`,
        hoverBg: `${c}.50`,
        activeBg: `${c}.100`,
      }
  }
}

const variantLine = definePartsStyle((props) => {
  const { color, selectedColor, hoverColor, hoverBg, activeBg, borderColor } =
    getColorsForLineVariant(props)
  return {
    container: {
      // 1rem padding + (1.5rem icon/2) - (2px border/2) for true centering
      ml: 'calc(1.75rem - 1px)',
    },
    child: {
      outline: 'none',
      outlineOffset: '-2px',
      borderRadius: 0,
      borderLeftWidth: '2px',
      borderColor: 'base.divider.strong',
      p: '1rem',
      justifyContent: 'space-between',
      _active: {
        borderColor: 'base.divider.brand',
      },
      _focusVisible: {
        ...layerStyles.focusRing.default._focusVisible,
        outlineOffset: '-2px',
      },
    },
    parent: {
      ...Accordion.variants?.sidebar(props).button,
      borderLeftWidth: 0,
    },
    item: {
      display: 'inline-flex',
      alignItems: 'center',
      color: 'interaction.support.unselected-strong',
      p: '1rem',
      justifyContent: 'space-between',
      _hover: {
        color: 'interaction.main.hover',
      },
      _active: {
        color: 'interaction.main.active',
      },
    },
  }
})

const variants = {
  line: variantLine,
}

export const Sidebar = defineMultiStyleConfig({
  sizes,
  variants,
  baseStyle: {
    item: {
      transitionProperty: 'common',
      transitionDuration: 'normal',
    },
  },
  defaultProps: {
    colorScheme: 'main',
    variant: 'line',
    size: 'md',
  },
})
