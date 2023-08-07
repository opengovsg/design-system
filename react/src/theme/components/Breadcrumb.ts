import { breadcrumbAnatomy as parts } from '@chakra-ui/anatomy'
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from '@chakra-ui/styled-system'

import { layerStyles } from '../layerStyles'

import { Link } from './Link'

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const $decor = cssVar('breadcrumb-link-decor')

const baseStyleLink = defineStyle((props) => {
  const linkStyle = Link.baseStyle?.(props)

  return {
    transitionProperty: 'common',
    transitionDuration: 'fast',
    transitionTimingFunction: 'ease-out',
    outline: 'none',
    color: 'base.content.default',
    textDecoration: $decor.reference,
    borderRadius: 'base',
    [$decor.variable]: 'none',
    '&:not([aria-current=page])': {
      cursor: 'pointer',
      color: linkStyle?.color ?? 'inherit',
      _hover: {
        [$decor.variable]: 'underline',
      },
      outlineOffset: 0,
      _focusVisible: {
        ...layerStyles.focusRing.default._focusVisible,
        outlineOffset: 0,
      },
    },
  }
})

const baseStyle = definePartsStyle((props) => {
  return {
    link: baseStyleLink(props),
    separator: {
      color: 'interaction.support.disabled-content',
    },
  }
})

const sizes = {
  xs: definePartsStyle({
    link: Link.sizes?.xs,
    separator: {
      fontSize: '1rem',
    },
  }),
  sm: definePartsStyle({
    link: Link.sizes?.sm,
    separator: {
      fontSize: '1.25rem',
    },
  }),
  md: definePartsStyle({
    link: Link.sizes?.md,
    separator: {
      fontSize: '1.5rem',
    },
  }),
}

export const Breadcrumb = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'sm',
    colorScheme: 'main',
  },
})
