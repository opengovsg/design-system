import {
  getColor,
  StyleFunctionProps,
  SystemStyleFunction,
} from '@chakra-ui/theme-tools'
import { merge } from 'lodash'

import { textStyles } from '../textStyles'
import { meetsWcagAaRatio } from '../utils'

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
    case 'warning':
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

const genVariantOutlineColours = ({ colorScheme: c }: StyleFunctionProps) => {
  switch (c) {
    case 'main':
    case 'critical': {
      return {
        bg: `standard.white`,
        borderColor: `interaction.${c}.default`,
        activeBg: `interaction.muted.${c}.active`,
        hoverBg: `interaction.tinted.${c}.hover`,
      }
    }
    default: {
      return {
        borderColor: `${c}.500` as const,
        activeBg: `${c}.200`,
        hoverBg: `${c}.100`,
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

const variantClear: SystemStyleFunction = (props) => {
  const { colorScheme: c } = props

  return {
    bg: 'transparent',
    borderColor: 'transparent',
    px: '15px',
    color: `${c}.500`,
    _focus: {
      boxShadow: `0 0 0 4px var(--chakra-colors-${c}-300)`,
    },
    _disabled: {
      color: `${c}.300`,
      opacity: 1,
    },
    _active: {
      bg: `${c}.200`,
      _disabled: {
        bg: 'transparent',
      },
    },
    _hover: {
      bg: `${c}.100`,
      _disabled: {
        bg: 'transparent',
      },
    },
  }
}

const variantOutlineReverse: SystemStyleFunction = (props) => {
  const { colorScheme: c, variant } = props
  const { borderColor, activeBg, hoverBg } = genVariantOutlineColours(props)
  const showBorder = variant === 'outline'

  return {
    bg: 'white',
    px: '15px',
    borderColor: showBorder ? borderColor : 'white',
    color: borderColor,
    _disabled: {
      borderColor: 'interaction.support.disabledContent',
      bg: 'white',
    },
    _active: {
      bg: activeBg,
      borderColor: showBorder ? borderColor : `${c}.200`,
    },
    _hover: {
      bg: hoverBg,
      borderColor: showBorder ? borderColor : `${c}.100`,
      _disabled: {
        borderColor: 'interaction.support.disabledContent',
        bg: 'white',
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
    reverse: variantOutlineReverse,
    outline: variantOutlineReverse,
    clear: variantClear,
    link: variantLink,
    inputAttached: variantInputAttached,
  },
  defaultProps: {
    variant: 'solid',
    colorScheme: 'main',
    size: 'md',
  },
}
