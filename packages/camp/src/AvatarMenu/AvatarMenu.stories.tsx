import { Meta, StoryFn } from '@storybook/react'

import { Menu } from '../Menu'

import { AvatarMenu, AvatarMenuDivider, AvatarMenuProps } from './AvatarMenu'

const DEFAULT_MENU_ITEMS = (
  <>
    <Menu.Item>Billing</Menu.Item>
    <Menu.Item>Emergency contact</Menu.Item>
    <AvatarMenuDivider />
    <Menu.Item>Log out</Menu.Item>
  </>
)

export default {
  title: 'Templates/AvatarMenu',
  component: AvatarMenu,
  tags: ['autodocs'],
  args: {
    name: 'My name',
    hasNotification: false,
    defaultIsOpen: false,
    children: DEFAULT_MENU_ITEMS,
  },
} as Meta<AvatarMenuProps>

const AvatarTemplate: StoryFn<AvatarMenuProps> = (args) => (
  <AvatarMenu {...args} />
)

export const Default = AvatarTemplate.bind({})

export const OpenMenu = AvatarTemplate.bind({})
OpenMenu.args = {
  name: undefined,
  defaultIsOpen: true,
}

export const WithNotification = AvatarTemplate.bind({})
WithNotification.args = {
  hasNotification: true,
}

export const OpenMenuWithNotification = AvatarTemplate.bind({})
OpenMenuWithNotification.args = {
  hasNotification: true,
  defaultIsOpen: true,
}

export const VariantSubtle = AvatarTemplate.bind({})
VariantSubtle.args = {
  variant: 'subtle',
}
