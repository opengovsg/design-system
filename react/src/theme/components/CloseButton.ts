import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

import { layerStyles } from '../layerStyles'

import { Button } from './Button'

export const CloseButton = defineStyleConfig({
  baseStyle: {
    p: 0,
  },
  variants: {
    subtle: defineStyle({
      _focusVisible: layerStyles.focusRing.default._focusVisible,
    }),
    clear: defineStyle((props) => ({
      ...Button.variants.clear(props),
      px: 'initial',
    })),
  },
  defaultProps: {
    colorScheme: 'neutral',
    size: 'md',
  },
})
