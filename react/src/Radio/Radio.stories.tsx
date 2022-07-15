import { VStack } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'

import { viewports } from '~/utils/storybook'

import { Radio, RadioProps } from './Radio'

export default {
  title: 'Components/Radio',
  component: Radio,
} as Meta

const Template: Story<RadioProps> = (args) => (
  <Radio {...args}>{args.name}</Radio>
)

export const Default = Template.bind({})
Default.args = {
  name: 'Default',
}

export const Mobile = Template.bind({})
Mobile.args = {
  name: 'Mobile',
}
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
  chromatic: { viewports: [viewports.xs] },
}

export const Tablet = Template.bind({})
Tablet.args = {
  name: 'Tablet',
}
Tablet.parameters = {
  viewport: {
    defaultViewport: 'tablet',
  },
  chromatic: { viewports: [viewports.md] },
}

const AllStates: Story<RadioProps> = (args) => {
  return (
    <VStack>
      <Radio {...args}>Unselected</Radio>
      <Radio {...args}>
        Really long unselected option that overflows and wraps to the next line
        because there is too much text. In fact, there's an entire paragraph so
        we can see what it looks like when there is too much text in the option.
      </Radio>
      <Radio {...args} isChecked>
        Selected
      </Radio>
      <Radio {...args} isDisabled>
        Unselected disabled
      </Radio>
      <Radio {...args} isChecked isDisabled>
        Selected disabled
      </Radio>
    </VStack>
  )
}

export const RadioStates = AllStates.bind({})
