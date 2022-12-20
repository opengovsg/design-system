import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'

import { Modal } from './Modal'

// Default parts.
const parts = anatomy('drawer').parts(
  'overlay',
  'dialogContainer',
  'dialog',
  'header',
  'closeButton',
  'body',
  'footer',
)

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle((props) => ({
  overlay: Modal.baseStyle?.(props).overlay,
}))

export const Drawer = defineMultiStyleConfig({
  baseStyle,
})
