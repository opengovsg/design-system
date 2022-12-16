import { switchAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

import { layerStyles } from '../layerStyles'
// Call it Switch to be consistent with Chakra UI so the styles
// are merged correctly
export const TOGGLE_THEME_KEY = 'Switch'

const parts = switchAnatomy.extend(
  'textContainer', // container for label and description
  'label',
  'description',
  'overallContainer', // container for our custom component which contains text + toggle
  'icon', // icon in centre of thumb
)

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  overallContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  container: {
    // To allow container to have a blue border on focus
    positive: 'relative',
  },
  label: {
    textStyle: 'subhead-1',
    color: 'base.content.dark',
  },
  description: {
    textStyle: 'body-2',
    color: 'base.content.default',
  },
  track: {
    bg: 'interaction.support.unselected',
    _checked: {
      bg: 'interaction.success.default',
    },
    _groupDisabled: {
      bg: 'interaction.support.disabled',
    },
    p: 0,
    outlineWidth: '1px',
    _focusVisible: {
      ...layerStyles.focusRing.default._focusVisible,
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
  icon: {
    color: 'interaction.support.unselected',
    _checked: {
      color: 'interaction.success.default',
    },
    _groupDisabled: {
      color: 'interaction.support.disabled',
    },
  },
})

const sizes = {
  md: definePartsStyle({
    container: {
      // Spacing between text and track
      ml: '1rem',
    },
    track: {
      w: '2.5rem',
      h: '1.5rem',
    },
    label: {
      m: 0,
    },
    thumb: {
      w: '1.375rem',
      h: '1.375rem',
      m: '0.0625rem',
      _checked: {
        // Ensure that thumb travels the correct distance
        transform: 'translateX(1rem)',
      },
    },
    icon: {
      fontSize: '1rem',
    },
  }),
}

export const Toggle = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
    colorScheme: 'success',
  },
})
