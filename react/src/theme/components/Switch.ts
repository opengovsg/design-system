import { switchAnatomy } from '@chakra-ui/anatomy'
import {
  createMultiStyleConfigHelpers,
  StyleFunctionProps,
} from '@chakra-ui/react'
import { memoizedGet as get } from '@chakra-ui/utils'

import { layerStyles } from '../layerStyles'

const parts = switchAnatomy.extend('thumbIcon')

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const getTrackColor = ({ colorScheme: c }: StyleFunctionProps) => {
  switch (c) {
    case 'success':
    case 'main':
    case 'critical':
    case 'warning':
      return `interaction.${c}.default`
    default:
      return `${c}.500`
  }
}

const baseStyle = definePartsStyle((props) => {
  const trackColor = getTrackColor(props)
  const focusRingStyle = get(
    props.theme,
    'layerStyles.focusRing.default._focusVisible',
    layerStyles.focusRing.default._focusVisible,
  )

  return {
    track: {
      bg: 'interaction.support.unselected',
      _checked: {
        bg: trackColor,
      },
      _groupDisabled: {
        bg: 'interaction.support.disabled',
        opacity: 1,
      },
      p: 0,
      outlineWidth: '1px',
      _focusVisible: {
        ...focusRingStyle,
        outlineWidth: '1px',
      },
      _focus: {
        boxShadow: 'none',
      },
    },
    thumb: {
      // To centre icon
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      _groupDisabled: {
        bg: 'interaction.support.unselected',
      },
    },
    thumbIcon: {
      color: 'interaction.support.unselected',
      _checked: {
        color: trackColor,
      },
      _groupDisabled: {
        color: 'interaction.support.disabled',
      },
    },
  }
})

const sizes = {
  sm: definePartsStyle({
    track: {
      w: '2rem',
      h: '1.25rem',
    },
    thumb: {
      w: '1.125rem',
      h: '1.125rem',
      m: '1px',
      _checked: {
        // Ensure that thumb travels the correct distance
        transform: 'translateX(0.75rem)',
      },
    },
    thumbIcon: {
      fontSize: '0.75rem',
    },
  }),
  md: definePartsStyle({
    track: {
      w: '2.5rem',
      h: '1.5rem',
    },
    thumb: {
      w: '1.375rem',
      h: '1.375rem',
      m: '1px',
      _checked: {
        // Ensure that thumb travels the correct distance
        transform: 'translateX(1rem)',
      },
    },
    thumbIcon: {
      fontSize: '1rem',
    },
  }),
  lg: definePartsStyle({
    track: {
      w: '3rem',
      h: '1.75rem',
    },
    thumb: {
      w: '1.625rem',
      h: '1.625rem',
      m: '1px',
      _checked: {
        // Ensure that thumb travels the correct distance
        transform: 'translateX(1.25rem)',
      },
    },
    thumbIcon: {
      fontSize: '1.25rem',
    },
  }),
}

export const Switch = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
    colorScheme: 'success',
  },
})
