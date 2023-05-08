import { Link } from '@chakra-ui/react'
import type { Meta, StoryObj } from '@storybook/react'

import { BxBulb, BxHeart, BxsStar } from '~/icons'

import { Sidebar, SidebarProps } from './Sidebar'
import { SidebarChildItem } from './SidebarChildItem'
import { SidebarContainer } from './SidebarContainer'
import { SidebarParentItem } from './SidebarParentItem'

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
            label: 'Overview 1',
            icon: <BxHeart fontSize="1.5rem" />,
            props: {
              onClick: () => alert('test'),
            },
          },
          {
            label: 'Overview 2',
          },
          {
            label: 'Link',
            props: {
              as: Link,
              href: 'https://google.com',
            },
          },
        ],
      },
      {
        label: 'Reports',
      },
      {
        label: 'Analytics',
      },
    ],
  },
  {
    label: 'Second',
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
      <SidebarParentItem label="Dashboard">
        <SidebarChildItem label="Link" as={Link} href="https://google.com" />
      </SidebarParentItem>
    </SidebarContainer>
  ),
}
