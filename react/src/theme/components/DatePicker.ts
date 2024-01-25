import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'
import { memoizedGet as get } from '@chakra-ui/utils'

export const datepickerAnatomy = anatomy('datepicker').parts(
  'header',
  'inputButton',
  'container',
  'calendarButton',
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

const baseStyle = definePartsStyle(({ theme }) => {
  const themeTextStyles = get(theme, 'textStyles')
  return {
    container: {
      bg: 'utility.ui',
    },
    calendarButton: {
      _active: {
        zIndex: '1',
        borderColor: 'utility.focus-default',
        bg: 'interaction.muted.main.hover',
        boxShadow: 'none',
        _disabled: {
          bg: 'interaction.support.disabled',
        },
      },
    },
    header: {
      h: '3.5rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: 'base.content.strong',
      px: '1.5rem',
      ...themeTextStyles['subhead-2'],
    },
    inputButton: {
      color: 'base.content.strong',
      _groupDisabled: {
        color: 'interaction.support.disabled-content',
      },
    },
  }
})

export const DatePicker = defineMultiStyleConfig({
  baseStyle,
  sizes,
})
