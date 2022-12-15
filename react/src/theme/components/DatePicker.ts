import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'

const parts = anatomy('datepicker').parts('button')

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const variantOutline = definePartsStyle(() => {
  return {
    button: {
      borderRadius: '2px 0px',
    },
  }
})

const variants = {
  outline: variantOutline,
}

export const DatePicker = defineMultiStyleConfig({
  variants,
  defaultProps: {
    variant: 'outline',
    size: 'md',
  },
})
