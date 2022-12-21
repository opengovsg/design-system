import { tabsAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, cssVar } from '@chakra-ui/react'
import type { StyleFunctionProps } from '@chakra-ui/theme-tools'

import { layerStyles } from '../layerStyles'
import { textStyles } from '../textStyles'

const $fg = cssVar('tabs-color')
const $bg = cssVar('tabs-bg')

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const getColorsForLineVariant = ({
  colorScheme: c,
  orientation,
}: StyleFunctionProps) => {
  const isVertical = orientation === 'vertical'
  switch (c) {
    case 'main':
    case 'sub':
    case 'critical':
      return {
        color: 'interaction.support.unselected',
        selectedColor: `interaction.${c}.default`,
        hoverColor: `interaction.${c}.hover`,
        hoverBg: isVertical ? `interaction.muted.${c}.hover` : 'transparent',
        activeBg: isVertical ? `interaction.muted.${c}.active` : 'transparent',
        borderColor: isVertical ? 'base.divider.dark' : 'transparent',
      }
    default:
      return {
        color: 'interaction.support.unselected',
        borderColor: isVertical ? 'base.divider.dark' : 'transparent',
        selectedColor: `${c}.500`,
        hoverColor: `${c}.600`,
        hoverBg: isVertical ? `${c}.50` : 'transparent',
        activeBg: isVertical ? `${c}.100` : 'transparent',
      }
  }
}

const variantLine = definePartsStyle((props) => {
  const { orientation } = props
  const isVertical = orientation === 'vertical'
  const borderProp = orientation === 'vertical' ? 'borderStart' : 'borderBottom'
  const marginProp = isVertical ? 'marginStart' : 'marginBottom'

  const { color, selectedColor, hoverColor, hoverBg, activeBg, borderColor } =
    getColorsForLineVariant(props)
  return {
    tablist: {
      [borderProp]: '2px solid',
      borderColor: isVertical ? 'base.divider.dark' : 'transparent',
    },
    tab: {
      justifyContent: 'flex-start',
      [marginProp]: isVertical ? '-2px' : 0,
      mt: isVertical ? 0 : '2px',
      textTransform: 'uppercase',
      color: $fg.reference,
      bg: $bg.reference,
      [$fg.variable]: `colors.${color}`,
      [borderProp]: '2px solid',
      borderColor,
      outlineOffset: 0,
      _selected: {
        [$bg.variable]: `transparent`,
        [$fg.variable]: `colors.${selectedColor}`,
        _dark: {
          [$fg.variable]: 'colors.base.content.inverse',
        },
        borderColor: 'currentColor',
        _hover: {
          borderColor: 'currentColor',
        },
        ...textStyles['subhead-3'],
      },
      _active: {
        [$bg.variable]: `colors.${activeBg}`,
      },
      _hover: {
        [$fg.variable]: `colors.${hoverColor}`,
        [$bg.variable]: `colors.${hoverBg}`,
        borderColor,
        _dark: {
          [$fg.variable]: 'colors.base.content.inverse',
          [$bg.variable]: 'transparent',
        },
      },
      _focusVisible: {
        ...layerStyles.focusRing.default._focusVisible,
        outlineOffset: 0,
        _dark: layerStyles.focusRing.inverse._focusVisible,
      },
    },
  }
})

const sizes = {
  sm: definePartsStyle(({ orientation }) => ({
    tablist: {
      gap: orientation === 'vertical' ? 0 : '2rem',
    },
    tab: {
      px: orientation === 'vertical' ? '2rem' : 0,
      py: orientation === 'vertical' ? '1.125rem' : '0.25rem',
      ...textStyles['body-2'],
    },
  })),
  md: definePartsStyle(({ orientation }) => ({
    tablist: {
      gap: orientation === 'vertical' ? 0 : '2rem',
    },
    tab: {
      px: orientation === 'vertical' ? '1.5rem' : 0,
      py: orientation === 'vertical' ? '1rem' : '0.25rem',
      mx: '0.25rem',
      ...textStyles['subhead-3'],
    },
  })),
}

const baseStyle = definePartsStyle(({ orientation }) => {
  const isVertical = orientation === 'vertical'

  return {
    tablist: {
      // Allow drag without showing scrollbar
      overflowX: isVertical ? undefined : 'auto',
      overflowY: isVertical ? undefined : 'initial',
      whiteSpace: 'nowrap',
      /* Scrollbar for Firefox */
      // Firefox only has these two css properties to customise scrollbar
      scrollbarWidth: 0,
      /* Scrollbar for Chrome, Safari, Opera and Microsoft Edge */
      '&::-webkit-scrollbar': {
        width: 0,
        height: 0,
      },
    },
    tabpanel: {
      p: 'initial',
    },
  }
})

const variants = {
  line: variantLine,
}

export const Tabs = defineMultiStyleConfig({
  sizes,
  baseStyle,
  variants,
  defaultProps: {
    colorScheme: 'main',
    variant: 'line',
    size: 'md',
  },
})
