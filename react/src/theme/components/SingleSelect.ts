import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'
import { anatomy } from '@chakra-ui/theme-tools'
import { mergeWith } from '@chakra-ui/utils'

import { Input } from './Input'
import { Menu } from './Menu'

export const comboboxParts = anatomy('combobox').parts(
  'container',
  'list',
  'item',
  'itemDescription',
  'selected',
  'highlight',
  'icon',
  'emptyItem',
)

export const parts = anatomy('singleselect')
  .parts(...comboboxParts.keys)
  .extend('field')

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const itemBaseStyle = defineStyle((props) => {
  const menuItemStyle = Menu.baseStyle?.(props).item
  return mergeWith(menuItemStyle, {
    _selected: menuItemStyle?._focus,
  })
})

const listBaseStyle = defineStyle((props) => {
  const menuListStyle = Menu.baseStyle?.(props).list
  return mergeWith(menuListStyle, {
    // To accomodate focus ring.
    my: '1px',
    w: '100%',
    overflowY: 'auto',
    maxH: '12rem',
    bg: 'white',
  })
})

const baseStyle = definePartsStyle((props) => {
  const itemStyle = itemBaseStyle(props)
  return {
    container: {
      pos: 'relative',
    },
    item: itemStyle,
    highlight: {
      bg: 'interaction.tinted.main.active',
    },
    selected: {
      gridArea: '1 / 1 / 2 / 3',
      pointerEvents: 'none',
      pl: 'calc(1rem + 1px)',
      pr: 'calc(2.75rem + 1px)',
      alignItems: 'center',
      zIndex: 2,
      textStyle: 'body-1',
      _disabled: {
        color: 'interaction.support.disabled-content',
      },
    },
    itemDescription: {
      textStyle: 'body-2',
      color: 'base.content.light',
    },
    emptyItem: {
      ...itemStyle,
      fontStyle: 'italic',
      cursor: 'not-allowed',
      _hover: {
        bg: 'initial',
      },
      _active: {
        bg: 'initial',
      },
    },
    list: listBaseStyle(props),
    icon: {
      transitionProperty: 'common',
      transitionDuration: 'normal',
      color: 'base.content.dark',
      _disabled: {
        cursor: 'not-allowed',
        color: 'interaction.support.disabled-content',
      },
    },
  }
})

const variantOutline = definePartsStyle((props) => {
  const { isClearable } = props
  const inputVariantOutline = Input.variants?.outline(props)

  return {
    list: { py: 0 },
    item: { cursor: 'pointer' },
    field: mergeWith(inputVariantOutline?.field, {
      zIndex: 1,
      borderRightRadius: isClearable ? 0 : undefined,
      gridArea: '1 / 1 / 2 / 3',
    }),
  }
})

const variants = {
  outline: variantOutline,
}

const sizes = {
  md: definePartsStyle(() => {
    const menuStyles = Menu.sizes?.md
    return {
      icon: {
        fontSize: '1.25rem',
      },
      item: menuStyles?.item,
      emptyItem: menuStyles?.item,
    }
  }),
}

export const SingleSelect = defineMultiStyleConfig({
  baseStyle,
  variants,
  sizes,
  defaultProps: {
    variant: 'outline',
    size: 'md',
    // @ts-expect-error Invalid exported type.
    focusBorderColor: Input.defaultProps?.focusBorderColor,
    // @ts-expect-error Invalid exported type.
    errorBorderColor: Input.defaultProps?.errorBorderColor,
    colorScheme: 'main',
  },
})
