import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy, StyleFunctionProps } from '@chakra-ui/theme-tools'

import { layerStyles } from '../layerStyles'

const parts = anatomy('avatarMenu').parts('button', 'avatar', 'list')

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const getAvatarSubtleColorProps = ({ colorScheme: c }: StyleFunctionProps) => {
  switch (c) {
    case 'main':
    case 'success':
    case 'critical':
    case 'warning':
    case 'sub':
      return {
        hoverBg: `interaction.${c}-light.hover`,
        activeBg: `interaction.${c}-light.active`,
      }
    default:
      return {
        hoverBg: `${c}.100`,
        activeBg: `${c}.200`,
      }
  }
}

const getAvatarSolidColorProps = ({ colorScheme: c }: StyleFunctionProps) => {
  switch (c) {
    case 'main':
    case 'success':
    case 'critical':
    case 'warning':
    case 'sub':
      return {
        hoverBg: `interaction.${c}.hover`,
        activeBg: `interaction.${c}.active`,
      }
    default:
      return {
        hoverBg: `${c}.600`,
        activeBg: `${c}.700`,
      }
  }
}

const variantSolid = definePartsStyle((props) => {
  const { hoverBg, activeBg } = getAvatarSolidColorProps(props)
  return {
    avatar: {
      _groupActive: {
        bg: activeBg,
      },
      _groupHover: {
        bg: hoverBg,
      },
    },
  }
})

const variantSubtle = definePartsStyle((props) => {
  const { hoverBg, activeBg } = getAvatarSubtleColorProps(props)
  return {
    avatar: {
      _groupActive: {
        bg: activeBg,
      },
      _groupHover: {
        bg: hoverBg,
      },
    },
  }
})

const variants = {
  subtle: variantSubtle,
  solid: variantSolid,
}

const baseStyle = definePartsStyle({
  button: {
    px: '0',
    bg: 'transparent',
    color: 'base.content.strong',
    _hover: {
      bg: 'transparent',
    },
    _active: {
      bg: 'transparent',
    },
    _focusVisible: {
      outline: 'none',
    },
  },
  avatar: {
    transitionProperty: 'common',
    transitionDuration: 'normal',
    _groupFocus: layerStyles.focusRing.default._focusVisible,
    _groupActive: {
      ...layerStyles.focusRing.default._focusVisible,
    },
  },
})

const sizes = {
  md: definePartsStyle({
    list: {
      mt: '0.375rem',
    },
  }),
}

export const AvatarMenu = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    variant: 'solid',
    colorScheme: 'main',
    size: 'md',
  },
})
