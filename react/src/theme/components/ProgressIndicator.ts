import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'

const parts = anatomy('attachment').parts(
  'circleIndicator',
  'activeIndicator',
  'container',
)

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle(({ isActiveIndicator, colorMode }) => ({
  circleIndicator: {
    width: '0.75rem',
    height: '0.75rem',
    padding: '0.125rem',
    borderRadius: 'full',
    backgroundColor: 'interaction.support.unselected',
    mr: isActiveIndicator ? '1.25rem' : '0.25rem',
    backgroundClip: 'content-box',
  },
  activeIndicator: {
    // Top required to align it with CircleIndicators
    top: '0.125rem',
    width: '1.5rem',
    height: '0.5rem',
    borderRadius: 'full',
    backgroundColor:
      colorMode === 'light'
        ? 'interaction.support.selected'
        : 'base.content.inverse',
    position: 'absolute',
  },
  container: { display: 'inline-flex', alignSelf: 'center' },
}))

export const ProgressIndicator = defineMultiStyleConfig({
  baseStyle,
})
