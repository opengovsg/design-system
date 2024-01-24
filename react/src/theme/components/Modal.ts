import { modalAnatomy as parts } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'
import { SystemStyleObject } from '@chakra-ui/theme-tools'
import { memoizedGet as get } from '@chakra-ui/utils'

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
    bg: 'utility.ui',
  }
})

const baseStyle = definePartsStyle((props) => ({
  overlay: baseStyleOverlay,
  dialog: baseStyleDialog(props),
}))

const fullDialogStyle: SystemStyleObject = {
  maxW: '100vw',
  minH: '$100vh',
  my: 0,
  borderRadius: 0,
}

const sizes = {
  mobile: definePartsStyle(({ theme }) => {
    const themeTextStyles = get(theme, 'textStyles')

    return {
      header: {
        pt: '2rem',
        pb: '1.5rem',
        px: '1.5rem',
        ...themeTextStyles['h5'],
      },
      body: {
        flex: 'initial',
      },
      dialog: fullDialogStyle,
      closeButton: {
        top: '1.5rem',
        insetEnd: '1.5rem',
      },
    }
  }),
  md: definePartsStyle(({ theme }) => {
    const themeTextStyles = get(theme, 'textStyles')
    return {
      dialog: { maxW: '42.5rem' },
      header: {
        ...themeTextStyles['h4'],
        pt: '2rem',
        pb: '1rem',
        px: '2rem',
      },
      closeButton: {
        top: '1.5rem',
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
    }
  }),
  full: definePartsStyle(({ theme }) => {
    const themeTextStyles = get(theme, 'textStyles')
    return {
      overlay: {
        bg: 'none',
      },
      dialog: fullDialogStyle,
      header: {
        ...themeTextStyles['h4'],
        p: '1.5rem',
      },
      closeButton: {
        top: '1.5rem',
        insetEnd: '1.5rem',
      },
    }
  }),
}

export const Modal = defineMultiStyleConfig({
  baseStyle,
  sizes,
})
