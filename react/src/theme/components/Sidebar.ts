import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'
import { anatomy, StyleFunctionProps } from '@chakra-ui/theme-tools'

import { layerStyles } from '../layerStyles'

const parts = anatomy('sidebar').parts(
  'item',
  'list',
  'label',
  'nest',
  'section',
  'child',
  'caret',
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
  label: {
    display: 'flex',
    alignItems: 'center',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    listStyleType: 'none',
    color: 'base.content.default',
    borderRadius: 'md',
    _hover: {
      color: 'interaction.main.default',
    },
    _active: {
      bg: 'interaction.muted.main.active',
      color: 'interaction.main.default',
    },
    _groupActive: {
      bg: 'interaction.muted.main.active',
      color: 'interaction.main.default',
    },
    _expanded: {
      bg: 'interaction.muted.main.active',
      color: 'interaction.main.default',
    },
    _focusVisible: {
      ...layerStyles.focusRing.default._focusVisible,
      outlineOffset: '-2px',
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
    label: {
      gap: '0.5rem',
    },
    item: {
      py: '0.75rem',
      px: '1rem',
    },
    caret: {
      cursor: 'pointer',
      fontSize: '1.25rem',
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
