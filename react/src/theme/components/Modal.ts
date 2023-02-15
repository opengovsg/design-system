import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'
import { SystemStyleObject } from '@chakra-ui/theme-tools'

import { textStyles } from '../textStyles'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyleOverlay = defineStyle({
  bg: 'rgba(0, 0, 0, 0.65)',
})

const baseStyleDialog = defineStyle((props) => {
  const { scrollBehavior } = props
  return {
    borderRadius: 'base',
    my: '8rem',
    maxH: scrollBehavior === 'inside' ? 'calc(100% - 16rem)' : undefined,
    boxShadow: 'md',
  }
})

const baseStyle = definePartsStyle((props) => ({
  overlay: baseStyleOverlay,
  dialog: baseStyleDialog(props),
}))

const fullDialogStyle: SystemStyleObject = {
  maxW: '100vw',
  minH: '100vh',
  my: 0,
  borderRadius: 0,
}

const sizes = {
  mobile: definePartsStyle({
    header: {
      pt: '2rem',
      pb: '1.5rem',
      px: '1.5rem',
      ...textStyles['h5'],
    },
    body: {
      flex: 'initial',
    },
    dialog: fullDialogStyle,
    closeButton: {
      top: '2rem',
      insetEnd: '1.5rem',
    },
  }),
  md: definePartsStyle({
    dialog: { maxW: '42.5rem' },
    header: {
      ...textStyles['h4'],
      pt: '2rem',
      pb: '1rem',
      px: '2rem',
    },
    closeButton: {
      top: '2rem',
      insetEnd: '2rem',
    },
    body: {
      py: 0,
      px: '2rem',
    },
    footer: {
      pt: '2rem',
      pb: '2.75rem',
      px: '2rem',
    },
  }),
  full: definePartsStyle({
    overlay: {
      bg: 'none',
    },
    dialog: fullDialogStyle,
    header: {
      ...textStyles['h4'],
      p: '1.5rem',
    },
    closeButton: {
      top: '1.5rem',
      insetEnd: '1.5rem',
    },
  }),
}

export const Modal = defineMultiStyleConfig({
  baseStyle,
  sizes,
})
