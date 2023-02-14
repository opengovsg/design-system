import { Meta, StoryFn } from '@storybook/react'

import { BxBulb, BxHeart, BxsStar } from '~/icons'

import { Sidebar, SidebarProps } from './Sidebar'

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  decorators: [],
  tags: ['autodocs'],
} as Meta<SidebarProps>

const Template: StoryFn<SidebarProps> = (args) => <Sidebar {...args} />
export const Default = Template.bind({})
Default.args = {
  items: [
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
            },
            {
              label: 'Overview 2',
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
  ],
}

export const UseSubcomponents = () => {
  return (
    <Sidebar.Container>
      <Sidebar.NestedItem
        icon={<BxBulb fontSize="1.5rem" />}
        root
        label="Parent Option 1"
      >
        <Sidebar.Item label="Child Option 1" />
        <Sidebar.Item label="Child Option 2" />
        <Sidebar.NestedItem label="Nestable Child Option 3">
          <Sidebar.Item label="Child Option 2" />
        </Sidebar.NestedItem>
      </Sidebar.NestedItem>
      <Sidebar.Item
        icon={<BxHeart fontSize="1.5rem" />}
        root
        label="Parent Option 2"
      />
      <Sidebar.NestedItem root label="Parent Option 2">
        <Sidebar.Item label="Child Option 1" />
        <Sidebar.Item label="Child Option 2" />
        <Sidebar.Item label="Child Option 3" />

        <Sidebar.NestedItem label="Nested Parent Option 1">
          <Sidebar.Item label="Nested Child Option 1" />
        </Sidebar.NestedItem>
      </Sidebar.NestedItem>
    </Sidebar.Container>
  )
}
