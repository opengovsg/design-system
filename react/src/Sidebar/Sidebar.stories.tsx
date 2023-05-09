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
import { getMobileViewParameters } from '~/utils/storybook'

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
  { children: 'Inbox', icon: BxMailSend },
  { children: 'Notes', icon: BxsStar },
  { children: 'Activity', icon: BxCalendar },
  { children: 'Expore', icon: BxLinkExternal },
  {
    label: 'Settings',
    icon: BxWrench,
    defaultIsExpanded: true,
    isActive: true,
    subItems: [
      {
        icon: BxsUser,
        children: 'Profile',
      },
      {
        children: 'Security & Privacy',
        icon: BxTrash,
        isActive: true,
      },
      {
        children:
          'Notifications With Long Label That Definitely Overflows In Mobile',
        icon: BxsTimeFive,
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

export const SizeSmall: Story = {
  args: {
    items: DEFAULT_ITEMS,
    size: 'sm',
  },
}

export const OnlyCaretToggle = {
  render: () => (
    <SidebarContainer>
      <SidebarItem>Child</SidebarItem>
      <SidebarList
        onlyCaretToggle
        label={<Link href="https://google.com">Google</Link>}
      >
        <SidebarItem>
          <Link href="https://google.com">Nested link</Link>
        </SidebarItem>
      </SidebarList>
      <SidebarList label="Label">
        <SidebarItem>Nested child</SidebarItem>
      </SidebarList>
    </SidebarContainer>
  ),
}

export const NoNest = {
  render: () => (
    <SidebarContainer>
      <SidebarItem isActive icon={BxStar}>
        Item 1
      </SidebarItem>
      <SidebarItem icon={BxStar}>Item 2</SidebarItem>
      <SidebarItem icon={BxStar}>Item 3</SidebarItem>
      <SidebarItem icon={BxStar}>Item 4</SidebarItem>
      <SidebarItem icon={BxStar}>Item 5</SidebarItem>
    </SidebarContainer>
  ),
}

export const Mobile: Story = {
  args: {
    items: DEFAULT_ITEMS,
  },
  parameters: getMobileViewParameters(),
}
