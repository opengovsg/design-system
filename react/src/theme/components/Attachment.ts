import { createMultiStyleConfigHelpers } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'

import { Input } from './Input'

const parts = anatomy('attachment').parts(
  'container',
  'dropzone',
  'icon',
  'fileInfoContainer',
  'fileInfo',
  'fileInfoDescription',
  'fileInfoImage',
)

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const baseStyle = definePartsStyle({
  dropzone: {
    transitionProperty: 'common',
    transitionDuration: 'normal',
  },
  fileInfoContainer: {
    borderRadius: '4px',
    border: '1px solid',
    borderColor: 'base.divider.medium',
    bg: 'interaction.main-subtle.default',
    color: 'base.content.default',
    _disabled: {
      bg: 'interaction.support.disabled',
      borderColor: 'interaction.support.disabled',
      cursor: 'initial',
      color: 'interaction.support.disabled-content',
    },
  },
  fileInfo: {
    display: 'inline-flex',
    justifyContent: 'space-between',
    flex: 1,
  },
  fileInfoDescription: {
    color: 'base.content.medium',
    _disabled: {
      color: 'interaction.support.disabled-content',
    },
    textStyle: 'caption-1',
  },
  fileInfoImage: {
    borderRight: '1px solid',
    borderColor: 'inherit',
    bg: 'white',
  },
})

const sizes = {
  md: definePartsStyle(({ imagePreview }) => {
    return {
      icon: {
        fontSize: '3.5rem',
      },
      dropzone: {
        px: '3rem',
        py: '4rem',
        textStyle: 'body-1',
      },
      fileInfoContainer: {
        maxHeight: imagePreview === 'small' ? '4.5rem' : undefined,
        flexDir: imagePreview === 'large' ? 'column' : 'row',
      },
      fileInfo: {
        py: '0.875rem',
        px: '1rem',
      },
      fileInfoImage: {
        p: '0.25rem',
        maxW: imagePreview === 'large' ? '100%' : '6rem',
        objectFit: 'contain',
      },
    }
  }),
}

const getOutlineColours = definePartsStyle(({ colorScheme: c }) => {
  switch (c) {
    case 'main': {
      return {
        dropzone: {
          borderColor: 'base.divider.strong',
          bg: 'interaction.main-subtle.default',
          _active: {
            bg: 'interaction.main-subtle.active',
          },
          _hover: {
            bg: 'interaction.main-subtle.hover',
          },
        },
      }
    }
    default: {
      return {
        dropzone: {
          borderColor: `${c}.700`,
          bg: `${c}.200`,
          _hover: {
            bg: `${c}.100`,
          },
          _active: {
            bg: `${c}.200`,
          },
        },
      }
    }
  }
})

const variantOutline = definePartsStyle((props) => {
  const { errorBorderColor: ec } = props

  const inputStyle = Input.variants?.outline(props).field
  const colorProps = getOutlineColours(props)

  return {
    dropzone: {
      ...colorProps.dropzone,
      color: 'base.content.default',
      display: 'flex',
      flexDir: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      border: '1px dashed',
      borderRadius: '4px',
      outline: 'none',
      _invalid: {
        // Remove extra 1px of outline.
        borderColor: ec,
        boxShadow: 'none',
      },
      _focus: {
        ...inputStyle?._focusVisible,
        borderStyle: 'solid',
      },
      _disabled: {
        ...inputStyle?._disabled,
      },
    },
  }
})

const variants = {
  outline: variantOutline,
}

export const Attachment = defineMultiStyleConfig({
  baseStyle,
  sizes,
  variants,
  defaultProps: {
    ...Input.defaultProps,
    colorScheme: 'main',
    size: 'md',
    // @ts-expect-error Invalid exported type.
    focusBorderColor: 'utility.focus-default',
    errorBorderColor: 'interaction.critical.default',
  },
})
