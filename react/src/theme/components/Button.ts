import {
  getColor,
  StyleFunctionProps,
  SystemStyleFunction,
} from '@chakra-ui/theme-tools'
import { merge } from 'lodash'

import { textStyles } from '../textStyles'
import { meetsWcagAaRatio } from '../utils'
import { hexToRgba } from '../utils/hexToRgba'

import { Link } from './Link'

export type ThemeButtonVariant =
  | 'solid'
  | 'reverse'
  | 'outline'
  | 'clear'
  | 'link'
  | 'inputAttached'

const genVariantSolidColours = ({
  colorScheme: c,
  theme,
}: StyleFunctionProps) => {
  let color = 'base.content.inverse'
  let solidVariantProps

  switch (c) {
    case 'main':
    case 'success':
    case 'critical':
      {
        solidVariantProps = {
          bg: `interaction.${c}.default`,
          activeBg: `interaction.${c}.active`,
          hoverBg: `interaction.${c}.hover`,
        }
      }
      break
    default: {
      solidVariantProps = {
        bg: `${c}.600`,
        activeBg: `${c}.800`,
        hoverBg: `${c}.700`,
      }
    }
  }
  const hasSufficientContrast = meetsWcagAaRatio(
    getColor(theme, color),
    getColor(theme, solidVariantProps.bg),
  )
  // Note that using the default content colour for the button text could still result in bad contrast.
  if (!hasSufficientContrast) {
    color = 'base.content.default'
  }
  return { ...solidVariantProps, color }
}

const genVariantOutlineColours = ({
  colorScheme: c,
  theme,
}: StyleFunctionProps) => {
  switch (c) {
    case 'main':
    case 'critical': {
      return {
        borderColor: `interaction.${c}.default`,
        activeBg: `interaction.tinted.${c}.active`,
        hoverBg: `interaction.tinted.${c}.hover`,
      }
    }
    case 'neutral': {
      return {
        borderColor: 'base.content.dark',
        hoverBg: 'interaction.tinted.dark.hover',
        activeBg: 'interaction.tinted.dark.active',
      }
    }
    case 'inverse': {
      return {
        borderColor: 'base.content.inverse',
        hoverBg: 'interaction.tinted.light.hover',
        activeBg: 'interaction.tinted.light.active',
      }
    }
    default: {
      return {
        borderColor: `${c}.500` as const,
        activeBg: hexToRgba(getColor(theme, `${c}.500`), 0.12),
        hoverBg: hexToRgba(getColor(theme, `${c}.500`), 0.04),
      }
    }
  }
}

const variantSolid: SystemStyleFunction = (props) => {
  const { bg, hoverBg, activeBg, color } = genVariantSolidColours(props)

  return {
    bg,
    borderColor: bg,
    color,
    px: '15px',
    _active: {
      bg: activeBg,
      borderColor: activeBg,
    },
    _hover: {
      bg: hoverBg,
      borderColor: hoverBg,
      _disabled: {
        bg: 'interaction.support.disabled',
        borderColor: 'interaction.support.disabled',
      },
    },
  }
}

const genVariantReverseColours = ({ colorScheme: c }: StyleFunctionProps) => {
  switch (c) {
    case 'main':
    case 'critical': {
      return {
        activeBg: `interaction.muted.${c}.active`,
        hoverBg: `interaction.muted.${c}.hover`,
        color: `interaction.${c}.default`,
      }
    }

    default: {
      return {
        activeBg: `${c}.100`,
        hoverBg: `${c}.50`,
        color: `${c}.500`,
      }
    }
  }
}

const variantReverse: SystemStyleFunction = (props) => {
  const { hoverBg, activeBg, color } = genVariantReverseColours(props)

  return {
    bg: 'white',
    borderColor: 'transparent',
    color,
    px: '15px',
    _disabled: {
      bg: 'white',
      borderColor: 'transparent',
    },
    _active: {
      bg: activeBg,
    },
    _hover: {
      bg: hoverBg,
      _disabled: {
        bg: 'white',
      },
    },
  }
}

const variantOutlineClear: SystemStyleFunction = (props) => {
  const { borderColor, activeBg, hoverBg } = genVariantOutlineColours(props)
  const showBorder = props.variant === 'outline'

  return {
    bg: 'transparent',
    px: '15px',
    borderColor: showBorder ? borderColor : 'transparent',
    color: borderColor,
    _disabled: {
      borderColor: showBorder
        ? 'interaction.support.disabledContent'
        : 'transparent',
      bg: 'transparent',
    },
    _active: {
      bg: activeBg,
      borderColor: showBorder ? borderColor : 'transparent',
    },
    _hover: {
      bg: hoverBg,
      borderColor: showBorder ? borderColor : 'transparent',
      _disabled: {
        borderColor: showBorder
          ? 'interaction.support.disabledContent'
          : 'transparent',
        bg: 'transparent',
      },
    },
  }
}

const variantLink: SystemStyleFunction = (props) => {
  return merge(Link.baseStyle(props), Link.variants.standalone, {
    border: 'none',
    minHeight: 'auto',
    fontWeight: 'normal',
    w: 'fit-content',
  })
}

const variantInputAttached: SystemStyleFunction = (props) => {
  const {
    focusBorderColor: fc = `${props.colorScheme}.500`,
    errorBorderColor: ec = `danger.500`,
    theme,
  } = props

  return {
    fontSize: '1.25rem',
    color: 'secondary.500',
    ml: '-1px',
    borderColor: 'neutral.400',
    borderRadius: 0,
    _hover: {
      bg: 'neutral.100',
    },
    _active: {
      borderColor: getColor(theme, fc),
      bg: 'white',
      zIndex: 1,
      _hover: {
        bg: 'neutral.100',
      },
    },
    _invalid: {
      // Remove extra 1px of outline.
      borderColor: getColor(theme, ec),
      boxShadow: 'none',
    },
    _focus: {
      borderColor: fc,
      boxShadow: `0 0 0 1px ${getColor(theme, fc)}`,
      zIndex: 1,
    },
  }
}

export const Button = {
  baseStyle: {
    ...textStyles['subhead-1'],
    whiteSpace: 'pre-wrap',
    borderRadius: '0.25rem',
    border: '1px solid',
    flexShrink: 0,
    // -1px for border
    px: '15px',
    py: '9px',
    _disabled: {
      bg: 'interaction.support.disabled',
      borderColor: 'interaction.support.disabled',
      opacity: 1,
      color: 'interaction.support.disabledContent',
    },
    _focus: {
      boxShadow: 'none !important',
      outline: `2px solid var(--chakra-colors-utility-focus-default)`,
      outlineOffset: '0.125rem',
    },
  },
  sizes: {
    sm: {
      minH: 'auto',
      minW: 'auto',
    },
    md: {
      minH: '2.75rem',
      minW: '2.75rem',
    },
    lg: {
      minH: '3rem',
      minW: '3rem',
    },
  },
  variants: {
    solid: variantSolid,
    reverse: variantReverse,
    outline: variantOutlineClear,
    clear: variantOutlineClear,
    link: variantLink,
    inputAttached: variantInputAttached,
  },
  defaultProps: {
    variant: 'solid',
    colorScheme: 'main',
    size: 'md',
  },
}
