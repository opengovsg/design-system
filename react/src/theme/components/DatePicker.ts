import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'

import { textStyles } from '../textStyles'

export const datepickerAnatomy = anatomy('datepicker').parts(
  'header',
  'inputButton',
)
const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(datepickerAnatomy.keys)

const sizes = {
  xs: definePartsStyle({
    inputButton: {
      fontSize: '1rem',
    },
  }),
  sm: definePartsStyle({
    inputButton: {
      fontSize: '1.25rem',
    },
  }),
  md: definePartsStyle({
    inputButton: {
      fontSize: '1.25rem',
    },
  }),
}

export const DatePicker = defineMultiStyleConfig({
  baseStyle: {
    header: {
      h: '3.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'base.content.strong',
      px: '1.5rem',
      ...textStyles['subhead-2'],
    },
    inputButton: {
      color: 'base.content.strong',
      _groupDisabled: {
        color: 'interaction.support.disabled-content',
      },
    },
  },
  sizes,
})
