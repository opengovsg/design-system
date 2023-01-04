import { radioAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { StyleFunctionProps } from '@chakra-ui/theme-tools'

import { layerStyles } from '../layerStyles'

/**
 * With reference to
 * https://github.com/chakra-ui/chakra-ui/blob/main/packages/theme/src/components/radio.ts
 */
const parts = radioAnatomy.extend(
  'othersInput',
  'othersContainer',
  'othersRadio',
)

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const getColorProps = ({ colorScheme: c }: StyleFunctionProps) => {
  switch (c) {
    case 'main':
      return {
        bg: 'utility.ui',
        checkedBg: 'interaction.main.default',
        hoverBg: 'interaction.muted.main.hover',
        borderColor: 'interaction.main.default',
      }
    default: {
      return {
        bg: 'utility.ui',
        checkedBg: `${c}.500`,
        hoverBg: `${c}.100`,
        borderColor: `${c}.500`,
      }
    }
  }
}

const baseStyle = definePartsStyle((props) => {
  const { bg, hoverBg, borderColor, checkedBg } = getColorProps(props)

  return {
    control: {
      bg,
      cursor: 'pointer',
      border: '2px solid',
      borderColor,
      // When the label is long and overflows to the next line, we want
      // the radio to be aligned with the first line rather than the center
      alignSelf: 'start',
      _before: {
        content: `""`,
        transition: 'transform ease 200ms',
      },
      _focus: {
        boxShadow: 'none',
      },
      _checked: {
        bg,
        borderColor,
        color: checkedBg,
      },
      _invalid: {
        // override Chakra UI style which turns the control red when invalid
        borderColor,
      },
      _disabled: {
        cursor: 'not-allowed',
        borderColor: 'interaction.support.disabled-content',
        bg: 'utility.ui',
        _checked: {
          bg: 'utility.ui',
          borderColor: 'interaction.support.disabled-content',
          color: 'interaction.support.disabled-content',
        },
      },
    },
    container: {
      w: '100%',
      color: 'base.content.strong',
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
      textStyle: 'body-1',
      color: 'base.content.strong',
    },
    othersContainer: {
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
    othersRadio: {
      // To get around an issue where the hover background blocks the border when focused
      _focusWithin: {
        boxShadow: 'none',
      },
      _hover: {
        bg: 'none',
      },
      p: 0,
    },
  }
})

const sizes = {
  xs: definePartsStyle({
    control: {
      w: '1rem',
      h: '1rem',
      // Account for font line height differences
      mt: '0.125rem',
      // the ::before pseudoclass controls the solid circle which indicates
      // that the radio button is checked
      _before: {
        w: '0.625rem',
        h: '0.625rem',
        transform: 'scale(0)',
      },
      _checked: {
        _before: {
          w: '0.625rem',
          h: '0.625rem',
          transform: 'scale(1)',
        },
      },
    },
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
    control: {
      width: '1.25rem',
      height: '1.25rem',
      // the ::before pseudoclass controls the solid circle which indicates
      // that the radio button is checked
      _before: {
        w: '0.75rem',
        h: '0.75rem',
        transform: 'scale(0)',
      },
      _checked: {
        _before: {
          w: '0.75rem',
          h: '0.75rem',
          transform: 'scale(1)',
        },
      },
    },
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
    label: {
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
    control: {
      w: '1.5rem',
      h: '1.5rem',
      // the ::before pseudoclass controls the solid circle which indicates
      // that the radio button is checked
      _before: {
        w: '1rem',
        h: '1rem',
        transform: 'scale(0)',
      },
      _checked: {
        _before: {
          w: '1rem',
          h: '1rem',
          transform: 'scale(1)',
        },
      },
    },
  }),
}

export const Radio = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    colorScheme: 'main',
    size: 'md',
  },
})
