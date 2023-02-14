import { Meta, StoryFn } from '@storybook/react'

import { BxBulb, BxGitMerge, BxHeart, BxsStar } from '~/icons'

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
      <Sidebar.NestedItem
        root
        label="Nested Options 2 this is a very long title"
      >
        <Sidebar.Item label="Child Option 1" />
        <Sidebar.Item label="Child Option 2" />
        <Sidebar.Item label="Child Option 3" />

        <Sidebar.NestedItem label="Nested Parent Option 1 this is very long title">
          <Sidebar.Item label="Nested Child Option 1" />
        </Sidebar.NestedItem>
      </Sidebar.NestedItem>
    </Sidebar.Container>
  )
}

export const UseCustomComponentInItem = () => {
  return (
    <Sidebar.Container>
      <Sidebar.Item
        icon={<BxHeart fontSize="1.5rem" />}
        root
        label="Link to OGP Website"
        as="a"
        href="https://open.gov.sg"
      />
      <Sidebar.NestedItem
        root
        label="Other sites"
        icon={<BxGitMerge fontSize="1.5rem" />}
      >
        <Sidebar.Item label="FormSG" as="a" href="https://form.gov.sg" />
        <Sidebar.Item
          label="Design System"
          as="a"
          href="https://design.hack.gov.sg"
        />
      </Sidebar.NestedItem>
    </Sidebar.Container>
  )
}
