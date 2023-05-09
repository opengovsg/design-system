import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'
import { anatomy, StyleFunctionProps } from '@chakra-ui/theme-tools'

import { layerStyles } from '../layerStyles'

const parts = anatomy('sidebar').parts(
  'item',
  'list',
  'nest',
  'section',
  'parent',
  'child',
)

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  section: {
    display: 'flex',
    flexDirection: 'column',
    textStyle: 'subhead-2',
  },
  child: {
    borderRadius: 0,
    borderLeftWidth: '2px',
    borderColor: 'base.divider.strong',
    _active: {
      borderColor: 'base.divider.brand',
    },
  },
  item: {
    listStyleType: 'none',
    display: 'flex',
    alignItems: 'center',
    color: 'base.content.default',
    borderRadius: 'md',
    _hover: {
      color: 'interaction.main.default',
    },
    _active: {
      bg: 'interaction.muted.main.active',
      color: 'interaction.main.default',
    },
    _focusVisible: {
      ...layerStyles.focusRing.default._focusVisible,
      outlineOffset: '-2px',
    },
  },
  parent: {
    _expanded: {
      bg: 'interaction.muted.main.active',
      color: 'interaction.main.default',
    },
  },
  list: {
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'column',
  },
  nest: {
    listStyleType: 'none',
  },
})

const sizes = {
  md: definePartsStyle({
    list: {
      paddingInlineStart: '0.75rem',
    },
    nest: {
      paddingInlineStart: '1.75rem',
    },
    item: {
      gap: '0.5rem',
      py: '0.75rem',
      px: '1rem',
    },
    parent: {
      py: '0.75rem',
      px: '1rem',
    },
  }),
}

export const Sidebar = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
  },
})
