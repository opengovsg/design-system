import { breadcrumbAnatomy as parts } from '@chakra-ui/anatomy'
import {
  createMultiStyleConfigHelpers,
  cssVar,
  defineStyle,
} from '@chakra-ui/styled-system'
import { memoizedGet as get } from '@chakra-ui/utils'

import { layerStyles } from '../layerStyles'

import { Link } from './Link'

const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(parts.keys)

const $decor = cssVar('breadcrumb-link-decor')

const baseStyleLink = defineStyle((props) => {
  const linkStyle = Link.baseStyle?.(props)
  const focusRingStyle = get(
    props.theme,
    'layerStyles.focusRing.default._focusVisible',
    layerStyles.focusRing.default._focusVisible,
  )

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
        ...focusRingStyle,
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
  xs: definePartsStyle(({ theme }) => {
    const themeTextStyles = get(theme, 'textStyles')

    return {
      link: {
        textStyle: 'caption-1',
      },
      separator: {
        ...themeTextStyles['caption-1'],
      },
    }
  }),
  sm: definePartsStyle(({ theme }) => {
    const themeTextStyles = get(theme, 'textStyles')

    return {
      link: {
        textStyle: 'subhead-2',
      },
      separator: {
        ...themeTextStyles['subhead-2'],
      },
    }
  }),
  md: definePartsStyle(({ theme }) => {
    const themeTextStyles = get(theme, 'textStyles')

    return {
      link: {
        textStyle: 'subhead-1',
      },
      separator: {
        ...themeTextStyles['subhead-1'],
      },
    }
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
