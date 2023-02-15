import { Spacer, Stack, Text } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { BxUpload } from '..'

import { Toolbar, ToolbarProps } from './Toolbar'
import { ToolbarButton } from './ToolbarButton'
import { ToolbarDivider } from './ToolbarDivider'
import { ToolbarGroup } from './ToolbarGroup'

export default {
  title: 'Components/Toolbar',
  component: Toolbar,
  decorators: [],
  tags: ['autodocs'],
} as Meta<ToolbarProps>

const Template: StoryFn<ToolbarProps> = ({ children, ...args }) => {
  return (
    <Toolbar {...args}>
      <Text>1 item selected</Text>
      <Spacer />
      {children}
      <ToolbarGroup>
        <ToolbarButton leftIcon={<BxUpload fontSize="1.25rem" />}>
          Button
        </ToolbarButton>
        <ToolbarButton leftIcon={<BxUpload fontSize="1.25rem" />}>
          Button
        </ToolbarButton>
      </ToolbarGroup>
      <ToolbarDivider />
      <ToolbarButton>Cancel</ToolbarButton>
    </Toolbar>
  )
}
export const Default = Template.bind({})
Default.args = {
  colorScheme: 'main',
}
