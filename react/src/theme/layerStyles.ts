export const layerStyles = {
  focusRing: {
    default: {
      _focusVisible: {
        boxShadow: 'none !important',
        outline: `2px solid var(--chakra-colors-utility-focus-default)`,
        outlineOffset: '0.125rem',
        _dark: {
          outline: `2px solid var(--chakra-colors-utility-focus-inverse)`,
        },
      },
    },
    inverse: {
      _focusVisible: {
        boxShadow: 'none !important',
        outline: `2px solid var(--chakra-colors-utility-focus-inverse)`,
        outlineOffset: '0.125rem',
      },
    },
  },
}
