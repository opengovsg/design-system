import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import { StyleFunctionProps } from '@chakra-ui/theme-tools'

import { layerStyles } from '../layerStyles'

const getLinkColors = ({ colorScheme: c }: StyleFunctionProps) => {
  switch (c) {
    case 'main':
      return {
        color: 'interaction.links.default',
        hoverColor: 'interaction.links.hover',
      }
    case 'neutral':
      return {
        color: 'interaction.links.dark-default',
        hoverColor: 'interaction.links.dark-hover',
      }
    // Special cases for accessibility.
    case 'success':
      return {
        color: `${c}.700`,
        hoverColor: `${c}.800`,
      }
    case 'warning':
      return {
        color: `${c}.800`,
        hoverColor: `${c}.900`,
      }
    default:
      return {
        color: `${c}.500`,
        hoverColor: `${c}.600`,
      }
  }
}

const baseStyle = defineStyle((props) => {
  const { color, hoverColor } = getLinkColors(props)

  return {
    position: 'relative',
    color,
    borderRadius: '0.25rem',
    _hover: {
      color: hoverColor,
      _disabled: {
        color: 'interaction.support.disabled-content',
      },
    },
    _disabled: {
      color: 'interaction.support.disabled-content',
      cursor: 'not-allowed',
    },
    _focusVisible: {
      ...layerStyles.focusRing.default._focusVisible,
      outlineOffset: 0,
    },
  }
})

const variantInline = defineStyle({
  textDecorationLine: 'underline',
  textUnderlineOffset: '0.125rem',
})

const variantStandalone = defineStyle(({ size }) => {
  const sizeToFontMap: Record<string, string> = {
    sm: 'subhead-2',
    md: 'subhead-1',
  }
  return {
    p: '0.25rem',
    textUnderlineOffset: '0.125rem',
    textStyle: sizeToFontMap[size],
    _hover: {
      textDecorationLine: 'underline',
    },
  }
})

const variants = {
  inline: variantInline,
  standalone: variantStandalone,
}

export const Link = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'inline',
    colorScheme: 'main',
    size: 'md',
  },
})
