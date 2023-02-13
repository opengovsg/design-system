import { Meta, StoryFn } from '@storybook/react'

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
      subItems: [
        {
          id: '2',
          label: 'Overview',
          subItems: [
            {
              id: '3',
              label: 'Overview 1',
              link: '/overview-1',
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
  ],
}
