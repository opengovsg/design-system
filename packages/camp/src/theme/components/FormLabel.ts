import { defineStyle, defineStyleConfig } from '@chakra-ui/react'
import { memoizedGet as get } from '@chakra-ui/utils'

const baseStyle = defineStyle({
  marginBottom: '0.75rem',
  color: 'base.content.strong',
})

const sizes = {
  sm: defineStyle(({ theme }) => {
    const themeTextStyles = get(theme, 'textStyles')

    return {
      ...themeTextStyles['subhead-2'],
    }
  }),
  md: defineStyle(({ theme }) => {
    const themeTextStyles = get(theme, 'textStyles')

    return {
      ...themeTextStyles['subhead-1'],
    }
  }),
}

export const FormLabel = defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: 'md',
  },
})
