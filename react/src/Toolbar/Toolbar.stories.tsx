import { Text } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { Toolbar, ToolbarProps } from './Toolbar'

export default {
  title: 'Components/Toolbar',
  component: Toolbar,
  decorators: [],
  tags: ['autodocs'],
} as Meta<ToolbarProps>

const Template: StoryFn<ToolbarProps> = (args) => <Toolbar {...args} />
export const Default = Template.bind({})
Default.args = {
  children: <Text>Hello</Text>,
  colorScheme: 'main',
}
