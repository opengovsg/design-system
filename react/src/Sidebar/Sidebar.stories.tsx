import { Link } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

import { BxBulb, BxHeart, BxsStar } from '~/icons'

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
  {
    label: 'Dashboard',
    icon: <BxBulb fontSize="1.5rem" />,
    subItems: [
      {
        label: 'Overview',
        subItems: [
          {
            children: 'Overview 1',
            icon: <BxHeart fontSize="1.5rem" />,
            props: {
              onClick: () => alert('test'),
            },
          },
          { children: 'Overview 2' },
          { children: <Link href="https://google.com">Link</Link> },
        ],
      },
      { children: 'Reports' },
      { children: 'Analytics' },
    ],
  },
  {
    children: 'Second',
    icon: <BxsStar fontSize="1.5rem" />,
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
      <SidebarList label="Dashboard">
        <SidebarItem>
          <Link href="https://google.com">Google</Link>
        </SidebarItem>
      </SidebarList>
    </SidebarContainer>
  ),
}
