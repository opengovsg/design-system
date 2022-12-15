import { menuAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { getColor, StyleFunctionProps } from '@chakra-ui/theme-tools'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

export type MenuVariant = 'outline' | 'clear'

const getItemColors = ({ colorScheme: c }: StyleFunctionProps) => {
  switch (c) {
    case 'main': {
      return {
        hoverBg: 'interaction.muted.main.hover',
        activeBg: 'interaction.muted.main.active',
      }
    }
    default: {
      return {
        hoverBg: `${c}.100`,
        activeBg: `${c}.200`,
      }
    }
  }
}

const baseStyle = definePartsStyle((props) => {
  const { colorScheme: c, isStretch } = props
  const { hoverBg, activeBg } = getItemColors(props)

  return {
    button: {
      width: isStretch ? '100%' : undefined,
      textAlign: 'left',
      justifyContent: 'space-between',
      iconSpacing: '1.5rem',
      _hover: {
        color: `${c}.900`,
      },
      _active: {
        color: `${c}.500`,
        _hover: {
          color: `${c}.900`,
        },
      },
    },
    list: {
      mt: '0.5rem',
      border: 'none',
      borderRadius: 0,
      minWidth: '0rem',
      shadow: 'small',
    },
    item: {
      textStyle: 'body-1',
      fontWeight: '400',
      color: 'base.content.dark',
      _hover: {
        bg: hoverBg,
      },
      _disabled: {
        color: 'interaction.support.disabled-content',
        opacity: 1,
        cursor: 'not-allowed',
      },
      _focus: {
        bg: hoverBg,
        _active: {
          bg: activeBg,
        },
      },
      _focusVisible: {
        boxShadow: `0 0 0 2px var(--chakra-colors-utility-focus-default)`,
        _active: {
          bg: activeBg,
        },
      },
      _active: {
        bg: activeBg,
      },
    },
    divider: {
      borderColor: 'base.divider.medium',
      opacity: 1,
      my: 0,
    },
  }
})

const variantClear = definePartsStyle({
  button: {
    minH: 'auto',
    p: '0.25rem',
    outline: 'none',
    border: 'none',
    boxShadow: 'none',
  },
})

const variantOutline = definePartsStyle(({ colorScheme: c, theme }) => {
  return {
    button: {
      _hover: {
        borderColor: `${c}.900`,
      },
      _active: {
        boxShadow: `0 0 0 1px ${getColor(theme, `${c}.500`)}`,
        _hover: {
          boxShadow: `0 0 0 1px ${getColor(theme, `${c}.900`)}`,
        },
      },
    },
  }
})

const variants = {
  clear: variantClear,
  outline: variantOutline,
}

const sizes = {
  sm: definePartsStyle({
    item: {
      textStyle: 'subhead-2',
      padding: '0.625rem 0.75rem',
    },
  }),
  md: definePartsStyle({
    item: {
      textStyle: 'body-1',
      padding: '0.75rem 1rem',
    },
  }),
}

export const Menu = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    colorScheme: 'main',
    variant: 'outline',
    size: 'md',
  },
})
