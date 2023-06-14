import { checkboxAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { StyleFunctionProps } from '@chakra-ui/theme-tools'

import { layerStyles } from '../layerStyles'

import { Input } from './Input'

/**
 * With reference to
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/checkbox.ts
 */
const parts = checkboxAnatomy.extend(
  'othersInput',
  'othersContainer',
  'othersCheckbox',
)

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const getColorProps = ({ colorScheme: c }: StyleFunctionProps) => {
  switch (c) {
    case 'main':
      return {
        bg: 'white',
        checkedBg: 'interaction.main.default',
        hoverBg: 'interaction.muted.main.hover',
        borderColor: 'interaction.main.default',
      }
    case 'inverse':
      return {
        bg: 'white',
        checkedBg: 'white',
        iconColor: 'interaction.main.default',
        hoverBg: 'interaction.muted.main.hover',
        borderColor: 'interaction.main.default',
      }
    default: {
      return {
        bg: 'white',
        hoverBg: `${c}.100`,
        borderColor: `${c}.500`,
      }
    }
  }
}

const baseStyle = definePartsStyle((props) => {
  const { bg, hoverBg, borderColor, checkedBg, iconColor } =
    getColorProps(props)
  return {
    // Control is the box containing the check icon
    control: {
      bg,
      borderRadius: 'base',
      border: '2px solid',
      borderColor,
      _checked: {
        bg: checkedBg,
        borderColor,
      },
      // When the label is long and overflows to the next line, we want
      // the checkbox to be aligned with the first line rather than the center
      alignSelf: 'start',
      _focus: {
        boxShadow: 'none',
      },
      _disabled: {
        borderColor: 'interaction.support.disabled-content',
        bg: 'white',
        _checked: {
          borderColor: 'interaction.support.disabled-content',
          bg: 'interaction.support.disabled-content',
        },
      },
    },
    // Container for the checkbox as well as label
    container: {
      w: '100%',
      _hover: {
        bg: hoverBg,
        _disabled: {
          bg: 'none',
        },
      },
      _focusWithin: {
        ...layerStyles.focusRing.default._focusVisible,
        outlineOffset: 0,
      },
    },
    // Text label
    label: {
      _disabled: {
        color: 'interaction.support.disabled-content',
        // Chakra automatically sets opacity to 0.4, so override that
        opacity: 1,
      },
      color: 'base.content.strong',
    },
    // Check mark icon
    icon: {
      // Chakra changes the icon colour if disabled, but we want it to always be white
      color: iconColor ?? 'white',
      // Remove default Chakra animations so we can replace with our own. This is because
      // we ran into issues where we could not increase the size of the tick icon without
      // the animation messing up.
      transform: 'scale(1)',
      transition: 'none',
    },
    othersContainer: {
      display: 'flex',
      flexDirection: 'column',
      cursor: 'pointer',
      _hover: {
        bg: hoverBg,
        _disabled: {
          bg: 'none',
        },
      },
      _focusWithin: {
        ...layerStyles.focusRing.default._focusVisible,
        outlineOffset: 0,
      },
    },
    othersCheckbox: {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      // To get around an issue where the hover background blocks the border when focused
      _focusWithin: {
        boxShadow: 'none',
      },
      _hover: {
        bg: 'none',
      },
      w: '100%',
    },
    othersInput: Input.variants?.outline(props),
  }
})

const sizes = {
  xs: definePartsStyle({
    control: {
      w: '1rem',
      h: '1rem',
      // Account for font line height differences
      mt: '0.125rem',
    },
    icon: { fontSize: '0.5rem' },
    label: {
      ml: '0.75rem',
      textStyle: 'body-2',
    },
    container: {
      px: '0.25rem',
      py: '0.5rem',
    },
    othersContainer: {
      px: '0.25rem',
      py: '0.5rem',
    },
    othersInput: {
      // To align left of input with left of "Others" label
      ml: '1.75rem',
      mt: '0.5rem',
      // Use 100% of the width, not counting the left margin
      w: 'calc(100% - 1.75rem)',
    },
  }),
  sm: definePartsStyle({
    control: { w: '1.25rem', h: '1.25rem' },
    icon: { fontSize: '0.75rem' },
    label: {
      textStyle: 'body-2',
      ml: '0.75rem',
    },
    container: {
      px: '0.25rem',
      py: '0.625rem',
    },
    othersContainer: {
      px: '0.25rem',
      py: '0.625rem',
    },
    othersInput: {
      // To align left of input with left of "Others" label
      ml: '2.25rem',
      mt: '0.625rem',
      // Use 100% of the width, not counting the left margin
      w: 'calc(100% - 2.25rem)',
    },
  }),
  md: definePartsStyle({
    control: { w: '1.5rem', h: '1.5rem' },
    icon: { fontSize: '1rem' },
    label: {
      textStyle: 'body-1',
      ml: '1rem',
    },
    container: {
      px: '0.25rem',
      py: '0.625rem',
    },
    othersContainer: {
      px: '0.25rem',
      py: '0.625rem',
    },
    othersInput: {
      // To align left of input with left of "Others" label
      ml: '2.625rem',
      mt: '0.625rem',
      // Use 100% of the width, not counting the left margin
      w: 'calc(100% - 2.625rem)',
    },
  }),
}

export const Checkbox = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    colorScheme: 'main',
    size: 'md',
  },
})
