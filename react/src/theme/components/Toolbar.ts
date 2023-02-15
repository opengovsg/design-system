import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'

const parts = anatomy('toolbar').parts('container')

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys)

export const Toolbar = defineMultiStyleConfig({})
