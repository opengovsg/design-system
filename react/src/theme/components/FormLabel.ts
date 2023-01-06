import { defineStyleConfig } from '@chakra-ui/react'

import { textStyles } from '../textStyles'

export const FormLabel = defineStyleConfig({
  baseStyle: {
    ...textStyles['subhead-1'],
    mb: '0.75rem',
    color: 'base.content.strong',
  },
})
