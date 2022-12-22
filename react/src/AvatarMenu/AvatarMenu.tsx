import {
  Avatar,
  AvatarBadge,
  AvatarProps,
  MenuDivider,
  MenuListProps,
  MenuProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'

import { Menu, MenuButtonProps } from '~/Menu'

/**
 * MenuButton styled for avatar
 * Used to wrap Avatar component
 * @preconditions Must be a child of Menu component,
 * and returned using a render prop.
 */
const AvatarMenuButton = (props: MenuButtonProps): JSX.Element => {
  return (
    <Menu.Button
      variant="clear"
      iconSpacing="0.25rem"
      chevronSize="1.5rem"
      {...props}
    />
  )
}

/**
 * MenuDivider styled for avatar
 * @preconditions Must be a child of Menu component,
 */
export const AvatarMenuDivider = (): JSX.Element => {
  return <MenuDivider aria-hidden />
}

export interface AvatarMenuProps
  extends Pick<MenuProps, 'defaultIsOpen'>,
    Pick<AvatarProps, 'name' | 'colorScheme' | 'size' | 'variant'> {
  hasNotification?: boolean
  menuListProps?: Omit<MenuListProps, 'children'>
  /** Badge to render when there are notifications. Defaults to AvatarBadge component. */
  badge?: JSX.Element
  children: MenuListProps['children']
}

export const AvatarMenu = ({
  name,
  hasNotification,
  defaultIsOpen,
  menuListProps,
  children,
  badge = <AvatarBadge />,
  ...styleProps
}: AvatarMenuProps): JSX.Element => {
  const styles = useMultiStyleConfig('AvatarMenu', styleProps)

  return (
    <Menu autoSelect={false} defaultIsOpen={defaultIsOpen}>
      {({ isOpen }) => (
        <>
          <AvatarMenuButton
            data-group
            isActive={isOpen}
            isOpen={isOpen}
            sx={styles.button}
          >
            <Avatar name={name} sx={styles.avatar} {...styleProps}>
              {hasNotification && badge}
            </Avatar>
          </AvatarMenuButton>
          <Menu.List role="menu" sx={styles.list} {...menuListProps}>
            {children}
          </Menu.List>
        </>
      )}
    </Menu>
  )
}
