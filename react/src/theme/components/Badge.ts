import { defineStyle } from '@chakra-ui/react'
import { getColor, SystemStyleObject } from '@chakra-ui/theme-tools'

import { getContrastColor } from '~/theme/utils/contrast'

import { textStyles } from '../textStyles'

const baseStyle = defineStyle({
  textTransform: 'initial',
  width: 'fit-content',
  display: 'inline-flex',
  py: '0.25rem',
  px: '0.5rem',
  borderRadius: 'base',
  alignItems: 'center',
})

const variantSolid = defineStyle((props) => {
  const { colorScheme: c, theme } = props

  const solidBgTokenMap: Record<string, string> = {
    main: 'interaction.main.default',
    sub: 'interaction.sub.default',
    neutral: 'interaction.neutral.default',
    info: 'utility.feedback.info',
    success: 'utility.feedback.success',
    warning: 'utility.feedback.warning',
    critical: 'utility.feedback.critical',
  }

  const bgColor = getColor(theme, solidBgTokenMap[c] ?? `${c}.500`)
  let textColor = getColor(theme, 'base.content.inverse')

  textColor = getContrastColor(textColor, bgColor, 'base.content.default')

  return {
    bg: bgColor,
    color: textColor,
  }
})

const variantSubtle = defineStyle((props) => {
  const { colorScheme: c, theme } = props

  const subtleBgTokenMap: Record<string, string> = {
    main: 'interaction.main-subtle.default',
    sub: 'interaction.sub-subtle.default',
    neutral: 'interaction.neutral-subtle.default',
    info: 'utility.feedback.info-subtle',
    success: 'utility.feedback.success-subtle',
    warning: 'utility.feedback.warning-subtle',
    critical: 'utility.feedback.critical-subtle',
  }
  const subtleColorTokenMap: Record<string, string> = {
    main: 'interaction.main.default',
    sub: 'interaction.sub.default',
    neutral: 'interaction.neutral.default',
    info: 'utility.feedback.info',
    success: 'utility.feedback.success',
    warning: 'yellow.700',
    critical: 'utility.feedback.critical',
  }

  const bgColor = getColor(theme, subtleBgTokenMap[c] ?? `${c}.100`)
  const textColor = getColor(theme, subtleColorTokenMap[c] ?? `${c}.500`)

  return {
    bgColor,
    color: textColor,
  }
})

const variantClear = defineStyle(({ colorScheme: c }) => {
  const clearIconColorTokenMap: Record<string, string> = {
    main: 'interaction.main.default',
    sub: 'interaction.sub.default',
    neutral: 'interaction.neutral.default',
    info: 'utility.feedback.info',
    success: 'utility.feedback.success',
    warning: 'utility.feedback.warning',
    critical: 'utility.feedback.critical',
  }

  return {
    ...textStyles['body-2'],
    color: 'base.content.default',
    accentColor: clearIconColorTokenMap[c] ?? `${c}.500`,
  }
})

const variants = {
  solid: variantSolid,
  subtle: variantSubtle,
  clear: variantClear,
}

const sizes: Record<string, SystemStyleObject> = {
  xs: {
    ...textStyles['legal'],
  },
  sm: {
    ...textStyles['caption-1'],
  },
}

export const Badge = {
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'solid',
    size: 'sm',
    colorScheme: 'main',
  },
}
