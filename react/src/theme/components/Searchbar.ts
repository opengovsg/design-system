import { anatomy } from '@chakra-ui/theme-tools'

import { ComponentMultiStyleConfig } from '~/theme/types'

import { Input } from './Input'

const parts = anatomy('searchbar').parts('icon', 'field')

export const Searchbar: ComponentMultiStyleConfig<typeof parts> = {
  parts: parts.keys,
  variants: {
    outline: (props) => {
      const inputFieldStyles = Input.variants?.outline(props).field
      const { isExpanded } = props

      return {
        icon: {
          display: 'flex',
          fontSize: '1rem',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'brand.secondary.500',
        },
        field: {
          ...inputFieldStyles,
          display: isExpanded ? 'initial' : 'none',
          w: isExpanded ? '100%' : 0,
          borderColor: isExpanded
            ? inputFieldStyles?.borderColor
            : 'transparent',
          paddingInlineStart: isExpanded ? '2.75rem' : 0,
          transitionDuration: isExpanded ? 'normal' : 0,
        },
      }
    },
  },
  defaultProps: Input.defaultProps,
}
