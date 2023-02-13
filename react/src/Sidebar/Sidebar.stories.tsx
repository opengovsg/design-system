import { Meta, StoryFn } from '@storybook/react'

import { BxBulb, BxHeart, BxsStar } from '..'

import { Sidebar, SidebarProps } from './Sidebar'

export default {
  title: 'Components/Sidebar',
  component: Sidebar,
  decorators: [],
} as Meta<SidebarProps>

const Template: StoryFn<SidebarProps> = (args) => <Sidebar {...args} />
export const Default = Template.bind({})
Default.args = {
  activeId: '3',
  items: [
    {
      id: '1',
      label: 'Dashboard',
      icon: <BxBulb fontSize="1.5rem" />,
      subItems: [
        {
          id: '2',
          label: 'Overview',
          subItems: [
            {
              id: '3',
              label: 'Overview 1',
              icon: <BxHeart fontSize="1.5rem" />,
            },
            {
              id: '4',
              label: 'Overview 2',
            },
          ],
        },
        {
          id: '5',
          label: 'Reports',
        },
        {
          id: '6',
          label: 'Analytics',
        },
      ],
    },
    {
      id: '2',
      label: 'Second',
      icon: <BxsStar fontSize="1.5rem" />,
    },
  ],
}
