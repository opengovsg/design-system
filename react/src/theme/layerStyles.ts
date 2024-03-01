const defaultFocusRing = {
  boxShadow: 'none !important',
  outline: `2px solid var(--chakra-colors-utility-focus-default)`,
  _dark: {
    outline: `2px solid var(--chakra-colors-utility-focus-inverse)`,
  },
}

export const layerStyles = {
  focusRing: {
    default: {
      _focusVisible: {
        ...defaultFocusRing,
        outlineOffset: '0.125rem',
      },
    },
    tightDefault: {
      _focusVisible: {
        ...defaultFocusRing,
        outlineOffset: '-2px',
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
