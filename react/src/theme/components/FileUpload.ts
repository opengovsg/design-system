import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

import { Input } from './Input'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers([
    'root',
    'dropzone',
    'dropzoneIcon',
    'item',
    'itemDeleteTrigger',
    'itemGroup',
    'itemName',
    'itemPreview',
    'itemPreviewImage',
    'itemSizeText',
    'label',
    'trigger',
  ])

const baseStyle = definePartsStyle(({ imagePreview }) => {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      width: '100%',
    },
    label: {
      textStyle: 'subhead-1',
    },
    dropzone: {
      transitionProperty: 'common',
      transitionDuration: 'normal',
    },
    itemGroup: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
    },
    item: {
      py: '0.875rem',
      px: '1rem',
      display: 'grid',
      borderRadius: 'base',
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
      gridTemplateColumns: 'auto 1fr auto',
      gridTemplateAreas:
        imagePreview === 'large'
          ? `"preview preview preview" "name name delete" "size size delete"`
          : `"preview name delete" "preview size delete"`,
    },
    itemPreview: {
      gridArea: 'preview',
      mt: '-0.875rem',
      mb: imagePreview !== 'large' ? '-0.875rem' : undefined,
      ml: '-1rem',
      mr: imagePreview !== 'large' ? '1rem' : '-1rem',
      bg: 'white',
    },
    itemName: {
      color: 'base.content.default',
      _disabled: {
        color: 'interaction.support.disabled-content',
      },
      gridArea: 'name',
      textStyle: 'subhead-1',
      _notFirst: {
        mt: imagePreview === 'large' ? '0.875rem' : undefined,
      },
    },
    itemSizeText: {
      color: 'base.content.medium',
      _disabled: {
        color: 'interaction.support.disabled-content',
      },
      gridArea: 'size',
      textStyle: 'caption-1',
      mt: '0.25rem',
    },
    itemDeleteTrigger: {
      alignSelf: 'end',
      gridArea: 'delete',
    },
    itemPreviewImage: {
      aspectRatio: '1',
      objectFit: imagePreview === 'large' ? 'contain' : 'cover',
      borderRight: imagePreview !== 'large' ? '1px solid' : undefined,
      borderBottom: imagePreview === 'large' ? '1px solid' : undefined,
      borderColor: 'base.divider.medium',
      borderLeftRadius: imagePreview !== 'large' ? 'base' : undefined,
      borderTopRadius: imagePreview === 'large' ? 'base' : undefined,
    },
    // fileInfo: {
    //   display: 'inline-flex',
    //   justifyContent: 'space-between',
    //   alignItems: 'center',
    //   flex: 1,
    // },
    // fileInfoDescription: {
    //   color: 'base.content.medium',
    //   _disabled: {
    //     color: 'interaction.support.disabled-content',
    //   },
    //   textStyle: 'caption-1',
    // },
    // fileErrorMessage: {
    //   textColor: 'interaction.critical.default',
    //   _disabled: {
    //     color: 'interaction.support.disabled-content',
    //   },
    //   textStyle: 'caption-1',
    // },
    // fileInfoImage: {
    //   borderRight: '1px solid',
    //   borderColor: 'inherit',
    //   bg: 'utility.ui',
    // },
    // fileErrorIcon: {
    //   height: '1.3rem',
    //   weight: '1.3rem',
    //   color: 'interaction.critical.default',
    // },
  }
})

const sizes = {
  md: definePartsStyle(({ imagePreview }) => {
    return {
      dropzoneIcon: {
        fontSize: '3.5rem',
      },
      dropzone: {
        px: '3rem',
        py: '4rem',
        textStyle: 'body-1',
      },
      itemPreviewImage: {
        height: imagePreview === 'large' ? undefined : '4.5rem',
        width: imagePreview === 'large' ? '100%' : '6rem',
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
      borderRadius: 'base',
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

export const FileUpload = defineMultiStyleConfig({
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
