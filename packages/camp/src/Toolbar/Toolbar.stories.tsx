import { Spacer, Text } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { BxsTimeFive, BxUpload } from '~/icons'

import { Toolbar, ToolbarProps } from './Toolbar'
import { ToolbarButton } from './ToolbarButton'
import { ToolbarDivider } from './ToolbarDivider'
import { ToolbarGroup } from './ToolbarGroup'
import { ToolbarIconButton } from './ToolbarIconButton'

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
          Download
        </ToolbarButton>
        <ToolbarButton leftIcon={<BxsTimeFive fontSize="1.25rem" />}>
          Move
        </ToolbarButton>
        <ToolbarDivider />
        <ToolbarIconButton icon={<BxUpload />} aria-label="Upload" />
        <ToolbarDivider />
        <ToolbarButton>Cancel</ToolbarButton>
      </ToolbarGroup>
    </Toolbar>
  )
}
export const TemplateExample = Template.bind({})

export const MainColorScheme = Template.bind({})
MainColorScheme.args = {
  colorScheme: 'main',
}

export const NeutralColorScheme = Template.bind({})
NeutralColorScheme.args = {
  colorScheme: 'neutral',
}

export const SizeXs = Template.bind({})
SizeXs.args = {
  size: 'xs',
}
