import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'
import { memoizedGet as get } from '@chakra-ui/utils'

import { layerStyles } from '../layerStyles'

const parts = anatomy('banner').parts('banner', 'item', 'icon', 'link', 'close')

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  item: {
    display: 'flex',
    justifyContent: 'space-between',
  },
})

const sizes = {
  sm: definePartsStyle({
    item: {
      py: '0.5rem',
      px: '0.75rem',
      textStyle: 'body-2',
    },
    icon: {
      my: '0.125rem',
      fontSize: '1rem',
      mr: '0.5rem',
    },
    close: {
      my: '-0.5rem',
      ml: '0.5rem',
      mr: '-0.5rem',
      fontSize: '1rem',
      w: '2.25rem',
      h: '2.25rem',
    },
  }),
  md: definePartsStyle({
    item: {
      py: '0.5rem',
      px: '1rem',
      textStyle: 'body-1',
    },
    icon: {
      fontSize: '1.5rem',
      mr: '0.5rem',
    },
    close: {
      ml: '0.5rem',
      mr: '-0.5rem',
      my: '-0.375rem',
      fontSize: '1.5rem',
      w: '2.25rem',
      h: '2.25rem',
    },
  }),
}

const variantInfo = definePartsStyle(({ theme }) => {
  const focusRingStyle = get(
    theme,
    'layerStyles.focusRing.inverse',
    layerStyles.focusRing.inverse,
  )

  return {
    banner: {
      color: 'base.content.inverse',
      bg: 'utility.feedback.info',
    },
    link: {
      color: 'base.content.inverse',
      _hover: {
        color: 'base.content.inverse',
      },
      ...focusRingStyle,
    },
    close: {
      color: 'base.content.inverse',
      ...focusRingStyle,
    },
  }
})

const variantWarn = definePartsStyle(({ theme }) => {
  const focusRingStyle = get(
    theme,
    'layerStyles.focusRing.default',
    layerStyles.focusRing.default,
  )
  return {
    banner: {
      color: 'base.content.strong',
      bg: 'utility.feedback.warning',
    },
    link: {
      color: 'base.content.strong',
      _hover: {
        color: 'base.content.strong',
      },
      ...focusRingStyle,
    },
    close: {
      color: 'base.content.strong',
      ...focusRingStyle,
    },
  }
})

const variantError = definePartsStyle(({ theme }) => {
  const focusRingStyle = get(
    theme,
    'layerStyles.focusRing.inverse',
    layerStyles.focusRing.inverse,
  )

  return {
    banner: {
      color: 'base.content.inverse',
      bg: 'utility.feedback.critical',
    },
    link: {
      color: 'base.content.inverse',
      _hover: {
        color: 'base.content.inverse',
      },
      ...focusRingStyle,
    },
    close: {
      color: 'base.content.inverse',
      ...focusRingStyle,
    },
  }
})

const variants = {
  info: variantInfo,
  warn: variantWarn,
  error: variantError,
}

export const Banner = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    variant: 'info',
    size: 'md',
  },
})
