import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'

const parts = anatomy('attachment').parts(
  'circleIndicator',
  'activeIndicator',
  'container',
)

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle(() => ({
  circleIndicator: {
    _hover: { bg: 'secondary.300' },
    _focus: {
      _active: {
        mr: '1.25rem',
      },
      bg: 'secondary.300',
      boxShadow: `0 0 0 1px var(--chakra-colors-secondary-400)`,
    },
    width: '0.75rem',
    height: '0.75rem',
    padding: '0.125rem',
    borderRadius: 'full',
    backgroundColor: 'interaction.support.unselected',
    mr: '0.25rem',
    backgroundClip: 'content-box',
  },
  activeIndicator: {
    // Top required to align it with CircleIndicators
    top: '0.125rem',
    width: '1.5rem',
    height: '0.5rem',
    borderRadius: 'full',
    bg: 'interaction.support.selected',
    _dark: {
      bg: 'base.content.inverse',
    },
    position: 'absolute',
  },
  container: { display: 'inline-flex', alignSelf: 'center' },
}))

export const ProgressIndicator = defineMultiStyleConfig({
  baseStyle,
})
