/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMemo } from 'react'
import {
  Icon,
  Menu as ChakraMenu,
  MenuButton as ChakraMenuButton,
  MenuDivider as ChakraMenuDivider,
  MenuItem as ChakraMenuItem,
  MenuList as ChakraMenuList,
  MenuProps as ChakraMenuProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'

import { Button, ButtonProps } from '~/Button'
import { BxsChevronDown } from '~/icons/BxsChevronDown'
import { BxsChevronUp } from '~/icons/BxsChevronUp'
import { MenuVariant } from '~/theme/components/Menu'

import { BxChevronDown } from '..'

export interface MenuButtonProps extends Omit<ButtonProps, 'isFullWidth'> {
  variant?: MenuVariant
  isStretch?: boolean
  isOpen?: boolean
  focusItemBorderColor?: string
  chevronSize?: string
}

/**
 * @preconditions Must be a child of Menu component,
 * and returned using a render prop (see implementation in Menu.stories).
 */
const MenuButton = ({
  isOpen,
  isStretch,
  chevronSize = '1.25rem',
  ...props
}: MenuButtonProps): JSX.Element => {
  const ChevronIcon = useMemo(
    () => (
      <Icon as={isOpen ? BxsChevronUp : BxChevronDown} fontSize={chevronSize} />
    ),
    [chevronSize, isOpen],
  )
  const style = useMultiStyleConfig('Menu', {
    ...props,
    isStretch,
  })

  return (
    <ChakraMenuButton
      as={Button}
      rightIcon={ChevronIcon}
      justifyContent="space-between"
      sx={style.button}
      {...props}
    />
  )
}

/**
 * @preconditions Must be a child of Menu component
 * after MenuButton, and returned using a render prop
 * (see implementation in Menu.stories).
 *
 * Used to wrap MenuItem component
 */
const MenuList = ChakraMenuList

/**
 * Item in MenuList
 */
const MenuItem = ChakraMenuItem

/**
 * Divider in DropdownMenu
 */
const MenuDivider = ChakraMenuDivider

interface MenuProps extends ChakraMenuProps {
  /** If true, menu list will match width of menu. Alias of `matchWidth=true` */
  isStretch?: boolean
}

/**
 * Used to wrap MenuButton, MenuItem and MenuList components
 */
export const Menu = ({ isStretch, ...props }: MenuProps): JSX.Element => {
  return <ChakraMenu matchWidth={isStretch} gutter={4} {...props} />
}

Menu.Button = MenuButton
Menu.List = MenuList
Menu.Item = MenuItem
Menu.Divider = MenuDivider
