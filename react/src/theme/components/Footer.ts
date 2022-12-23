import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'

const parts = anatomy('footer').parts(
  'container',
  'section',
  'brandContainer',
  'link',
)

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  link: {
    m: '-0.25rem',
    textStyle: 'body-2',
    width: 'fit-content',
  },
})

const variantFull = definePartsStyle({
  container: {
    display: 'flex',
    flexDirection: 'column',
    bg: 'base.canvas.brandLight',
    _dark: {
      bg: 'base.canvas.inverse',
    },
    py: '3rem',
    px: { base: '1.5rem', md: '5.5rem', lg: '9.25rem' },
  },
  section: {
    display: 'flex',
    alignItems: { base: 'normal', lg: 'center' },
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: { base: 'column', lg: 'row' },
  },
  brandContainer: {
    display: 'flex',
    flex: 1,
    gap: { base: 0, lg: '1rem' },
    paddingBottom: { base: '1.5rem', lg: 0 },
    paddingEnd: { base: 0, lg: '1.5rem' },
  },
})

const variantCompact = definePartsStyle({
  container: {
    px: '0.75rem',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  brandContainer: {
    height: '2.25rem',
    alignItems: 'center',
    gap: '2rem',
  },
})

const variants = {
  full: variantFull,
  compact: variantCompact,
}

export const Footer = defineMultiStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: 'full',
  },
})
