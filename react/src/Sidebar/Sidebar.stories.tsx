import { Link } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

import {
  BxCalendar,
  BxLinkExternal,
  BxMailSend,
  BxsStar,
  BxStar,
  BxsTimeFive,
  BxsUser,
  BxTrash,
  BxWrench,
} from '~/icons'

import { Sidebar, SidebarProps } from './Sidebar'
import { SidebarContainer } from './SidebarContainer'
import { SidebarItem } from './SidebarItem'
import { SidebarList } from './SidebarList'

const meta = {
  title: 'Components/Sidebar',
  component: Sidebar,
  decorators: [],
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>

const DEFAULT_ITEMS: SidebarProps['items'] = [
  { children: 'Inbox', icon: <BxMailSend fontSize="1.25rem" /> },
  { children: 'Notes', icon: <BxsStar fontSize="1.25rem" /> },
  { children: 'Activity', icon: <BxCalendar fontSize="1.25rem" /> },
  { children: 'Expore', icon: <BxLinkExternal fontSize="1.25rem" /> },
  {
    label: 'Settings',
    icon: <BxWrench fontSize="1.25rem" />,
    defaultIsExpanded: true,
    isActive: true,
    subItems: [
      {
        icon: <BxsUser fontSize="1.25rem" />,
        children: 'Profile',
      },
      {
        children: 'Security & Privacy',
        icon: <BxTrash fontSize="1.25rem" />,
        isActive: true,
      },
      {
        children: 'Notifications',
        icon: <BxsTimeFive fontSize="1.25rem" />,
      },
    ],
  },
]

export default meta
type Story = StoryObj<typeof meta>

export const WithItemsProp: Story = {
  args: {
    items: DEFAULT_ITEMS,
  },
}

export const Explicit = {
  render: () => (
    <SidebarContainer>
      <SidebarItem>Child</SidebarItem>
      <SidebarList
        onlyCaretToggle
        label={<Link href="https://google.com">Google</Link>}
      >
        <SidebarItem>
          <Link href="https://google.com">Google</Link>
        </SidebarItem>
      </SidebarList>
      <SidebarList isActive label="Label">
        <SidebarItem>Nested child</SidebarItem>
      </SidebarList>
    </SidebarContainer>
  ),
}

export const NoNest = {
  render: () => (
    <SidebarContainer>
      <SidebarItem isActive icon={<BxStar fontSize="1.25rem" />}>
        Item 1
      </SidebarItem>
      <SidebarItem icon={<BxStar fontSize="1.25rem" />}>Item 2</SidebarItem>
      <SidebarItem icon={<BxStar fontSize="1.25rem" />}>Item 3</SidebarItem>
      <SidebarItem icon={<BxStar fontSize="1.25rem" />}>Item 4</SidebarItem>
      <SidebarItem icon={<BxStar fontSize="1.25rem" />}>Item 5</SidebarItem>
    </SidebarContainer>
  ),
}
