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
import { BxsChevronDown, BxsChevronUp } from '~/icons'
import { MenuVariant } from '~/theme/components/Menu'

export interface MenuButtonProps extends Omit<ButtonProps, 'isFullWidth'> {
  variant?: MenuVariant
  isStretch?: boolean
  isOpen?: boolean
  chevronSize?: string
}

/**
 * @preconditions Must be a child of Menu component,
 * and returned using a render prop (see implementation in Menu.stories).
 */
const MenuButton = ({
  isOpen,
  isStretch,
  chevronSize,
  ...props
}: MenuButtonProps): JSX.Element => {
  const styles = useMultiStyleConfig('Menu', props)
  const ChevronIcon = useMemo(
    () => (
      <Icon
        as={isOpen ? BxsChevronUp : BxsChevronDown}
        fontSize={chevronSize}
        sx={styles.chevron}
      />
    ),
    [chevronSize, isOpen, styles.chevron],
  )

  return (
    <ChakraMenuButton
      as={Button}
      rightIcon={ChevronIcon}
      width={isStretch ? '100%' : undefined}
      sx={styles.button}
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
