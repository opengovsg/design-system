import { breadcrumbAnatomy as parts } from '@chakra-ui/anatomy'
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from '@chakra-ui/styled-system'

import { layerStyles } from '../layerStyles'
import { textStyles } from '../textStyles'

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
      outlineOffset: '0.25rem',
      _focusVisible: {
        ...layerStyles.focusRing.default._focusVisible,
        outlineOffset: '0.25rem',
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
      ...textStyles['caption-1'],
    },
  }),
  sm: definePartsStyle({
    link: Link.sizes?.sm,
    separator: {
      ...textStyles['subhead-2'],
    },
  }),
  md: definePartsStyle({
    link: Link.sizes?.md,
    separator: {
      ...textStyles['subhead-1'],
    },
  }),
}

export const Breadcrumb = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
    colorScheme: 'main',
  },
})
