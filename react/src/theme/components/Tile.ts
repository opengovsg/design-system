import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'

const parts = anatomy('tile').parts(
  'container',
  'title',
  'icon',
  'subtitle',
  'text',
)

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  container: {
    transitionProperty: 'common',
    transitionDuration: 'normal',
    color: 'base.content.dark',
    borderRadius: '4px',
    padding: '1.5rem',
    height: 'auto',
    _hover: {
      bg: 'interaction.muted.main.hover',
    },
    outline: 'none',
    _focusVisible: {
      boxShadow: '0 0 0 1px var(--chakra-colors-utility-focus-default)',
      borderColor: 'utility.focus-default',
      outline: 'none',
    },
    _active: {
      bg: 'interaction.muted.main.active',
      borderColor: 'utility.focus-default',
      boxShadow: '0 0 0 2px var(--chakra-colors-utility-focus-default)',
    },
    bg: 'utility.ui',
    border: '1px solid',
    borderColor: 'base.divider.medium',
    whiteSpace: 'pre-line',
    flexDir: 'column',
    alignItems: 'flex-start',
    maxWidth: 'inherit',
    textAlign: 'left',
    alignSelf: 'stretch',
    justifyContent: 'stretch',
  },
  title: {
    color: 'base.content.dark',
    textStyle: 'h5',
    mt: '1rem',
  },
  icon: {
    boxSize: '2.5rem',
    color: 'base.content.dark',
  },
  subtitle: {
    color: 'base.content.light',
    textStyle: 'body-2',
  },
  text: {
    color: 'base.content.default',
    textStyle: 'body-2',
    textAlign: 'left',
  },
})

const variantComplex = definePartsStyle({
  title: {
    mb: 0,
  },
  subtitle: {
    mb: '1rem',
  },
})

const variantSimple = definePartsStyle({
  title: { mb: '1rem' },
})

const variants = {
  complex: variantComplex,
  simple: variantSimple,
}

export const Tile = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'simple',
  },
})
