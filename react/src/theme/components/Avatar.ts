import { avatarAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, ThemingProps } from '@chakra-ui/react'
import {
  PartsStyleFunction,
  StyleFunctionProps,
  SystemStyleObject,
} from '@chakra-ui/theme-tools'

import { textStyles } from '../textStyles'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const getColorProps = ({ colorScheme: c }: StyleFunctionProps) => {
  switch (c) {
    case 'main':
      return {
        color: 'base.content.inverse',
        bg: 'interaction.main.default',
      }
    case 'main-light':
      return {
        color: 'interaction.main.default',
        bg: 'interaction.main-light.default',
      }
    default:
      return {
        bg: `${c}.500`,
        color: 'white',
      }
  }
}

const baseStyle: PartsStyleFunction<typeof parts> = (props) => {
  const { bg, color } = getColorProps(props)

  return {
    container: {
      bg,
      color,
      textStyle: 'subhead-2',
    },
    badge: {
      bg: 'utility.feedback.critical',
      border: '1px solid white',
      transform: 'none',
    },
  }
}

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

export const Avatar = defineMultiStyleConfig({
  sizes,
  baseStyle,
  defaultProps: {
    size: 'md',
    colorScheme: 'main',
  },
})
