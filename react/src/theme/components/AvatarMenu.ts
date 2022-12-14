import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy, StyleFunctionProps } from '@chakra-ui/theme-tools'

import { layerStyles } from '../layerStyles'

const parts = anatomy('avatarMenu').parts('button', 'avatar', 'list')

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const getAvatarColorProps = ({ colorScheme: c }: StyleFunctionProps) => {
  switch (c) {
    case 'main':
      return {
        hoverBg: 'interaction.main.hover',
        activeBg: 'interaction.main.active',
      }
    case 'main-light':
      return {
        hoverBg: 'interaction.main-light.hover',
        activeBg: 'interaction.main-light.active',
      }
    default:
      return {
        hoverBg: `${c}.600`,
        activeBg: `${c}.700`,
      }
  }
}

const baseStyle = definePartsStyle((props) => {
  const { hoverBg, activeBg } = getAvatarColorProps(props)

  return {
    button: {
      px: '0',
      bg: 'transparent',
      color: 'base.content.dark',
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
      _groupFocus: layerStyles.focusRing._focusVisible,
      _groupActive: {
        bg: activeBg,
        ...layerStyles.focusRing._focusVisible,
      },
      _groupHover: {
        bg: hoverBg,
      },
    },
  }
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
  defaultProps: {
    colorScheme: 'main',
    size: 'md',
  },
})
