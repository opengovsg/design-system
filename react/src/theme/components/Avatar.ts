import { ComponentMultiStyleConfig } from '@chakra-ui/react'

import { textStyles } from '../textStyles'

export const Avatar: ComponentMultiStyleConfig = {
  parts: ['container', 'badge', 'usernameItem', 'usernameIcon'],
  sizes: {
    md: {
      container: {
        width: '2.5rem',
        height: '2.5rem',
        fontSize: textStyles['subhead-2'].fontSize,
      },
      label: textStyles['subhead-2'],
      badge: {
        // 20% of container width + 1px border left right.
        w: 'calc(20% + 2px)',
        h: 'calc(20% + 2px)',
      },
    },
  },
  baseStyle: {
    container: {
      bg: 'primary.500',
      width: '2.5rem',
      height: '2.5rem',
      color: 'white',
      textStyle: 'subhead-2',
    },
    badge: {
      bg: 'danger.500',
      border: '1px solid white',
      transform: 'none',
      botton: '1px',
      right: '1px',
    },
  },
  defaultProps: {
    size: 'md',
  },
}
