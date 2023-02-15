import { cssVar, defineStyle, defineStyleConfig } from '@chakra-ui/react'

import { textStyles } from '../textStyles'

const $bg = cssVar('tooltip-bg')
const $fg = cssVar('tooltip-fg')

const baseStyle = defineStyle({
  bg: $bg.reference,
  color: $fg.reference,
  [$bg.variable]: 'colors.base.canvas.inverse',
  [$fg.variable]: 'colors.base.content.inverse',
  px: '0.75rem',
  py: '0.5rem',
  borderRadius: 'sm',
  textAlign: 'left',
  margin: '0.25rem',
  maxWidth: '19.5rem',
  ...textStyles['body-2'],
})

export const Tooltip = defineStyleConfig({
  baseStyle,
})
