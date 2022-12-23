import { avatarAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, ThemingProps } from '@chakra-ui/react'
import { StyleFunctionProps, SystemStyleObject } from '@chakra-ui/theme-tools'

import { textStyles } from '../textStyles'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const getSubtleColorProps = ({ colorScheme: c }: StyleFunctionProps) => {
  switch (c) {
    case 'main':
    case 'success':
    case 'critical':
    case 'warning':
    case 'sub':
      return {
        color: `interaction.${c}.default`,
        bg: `interaction.${c}-light.default`,
      }
    default:
      return {
        color: `${c}.500`,
        bg: `${c}.50`,
      }
  }
}

const getSolidColorProps = ({ colorScheme: c }: StyleFunctionProps) => {
  switch (c) {
    case 'main':
    case 'success':
    case 'critical':
    case 'warning':
    case 'sub':
      return {
        color: 'base.content.inverse',
        bg: `interaction.${c}.default`,
      }
    default:
      return {
        bg: `${c}.500`,
        color: 'base.content.inverse',
      }
  }
}

const baseStyle = definePartsStyle({
  badge: {
    bg: 'utility.feedback.critical',
    border: '1px solid white',
    transform: 'none',
  },
})

const getBadgePlacement = (size: ThemingProps['size']): SystemStyleObject => {
  switch (size) {
    case '2xs':
      return {
        bottom: '-1px',
        right: '-1px',
        borderWidth: '0.5px',
        // 20% of container width + 1px border left right.
        w: 'calc(20% + 2px)',
        h: 'calc(20% + 2px)',
      }
    // Update width and height calculation in the future if needed.
    default:
      return {
        bottom: '-1.5px',
        right: '-1.5px',
        borderWidth: '1px',
        // 20% of container width + 1px border left right.
        w: 'calc(20% + 2px)',
        h: 'calc(20% + 2px)',
      }
  }
}

const sizes = {
  '2xs': definePartsStyle({
    container: {
      width: '1.25rem',
      height: '1.25rem',
      textStyle: 'legal',
      fontSize: textStyles['legal'].fontSize,
    },
    label: textStyles['legal'],
    excessLabel: {
      ...textStyles['legal'],
      width: '1.25rem',
      height: '1.25rem',
    },
    badge: getBadgePlacement('2xs'),
  }),
  xs: definePartsStyle({
    container: {
      width: '2rem',
      height: '2rem',
      textStyle: 'caption-1',
      fontSize: textStyles['caption-1'].fontSize,
    },
    label: textStyles['caption-1'],
    excessLabel: {
      ...textStyles['caption-1'],
      width: '2rem',
      height: '2rem',
    },
    badge: getBadgePlacement('xs'),
  }),
  sm: definePartsStyle({
    container: {
      width: '2.25rem',
      height: '2.25rem',
      textStyle: 'caption-1',
      fontSize: textStyles['caption-1'].fontSize,
    },
    label: textStyles['caption-1'],
    excessLabel: {
      ...textStyles['caption-1'],
      width: '2.25rem',
      height: '2.25rem',
    },
    badge: getBadgePlacement('sm'),
  }),
  md: definePartsStyle({
    container: {
      width: '2.5rem',
      height: '2.5rem',
      textStyle: 'subhead-2',
      fontSize: textStyles['subhead-2'].fontSize,
    },
    label: textStyles['subhead-2'],
    excessLabel: {
      ...textStyles['subhead-2'],
      width: '2.5rem',
      height: '2.5rem',
    },
    badge: getBadgePlacement('md'),
  }),
  lg: definePartsStyle({ badge: getBadgePlacement('lg') }),
  xl: definePartsStyle({ badge: getBadgePlacement('xl') }),
}

const variantSolid = definePartsStyle((props) => {
  const { bg, color } = getSolidColorProps(props)
  return {
    container: {
      bg,
      color,
    },
  }
})

const variantSubtle = definePartsStyle((props) => {
  const { bg, color } = getSubtleColorProps(props)
  return {
    container: {
      bg,
      color,
    },
  }
})

const variants = {
  subtle: variantSubtle,
  solid: variantSolid,
}

export const Avatar = defineMultiStyleConfig({
  sizes,
  baseStyle,
  variants,
  defaultProps: {
    size: 'md',
    colorScheme: 'main',
    variant: 'solid',
  },
})
