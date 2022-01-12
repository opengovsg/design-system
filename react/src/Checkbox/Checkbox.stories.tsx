import { VStack } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'
import { viewports } from '~/utils/storybook'
import { Checkbox, CheckboxProps } from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
} as Meta

const Template: Story<CheckboxProps> = (args) => {
  return <Checkbox {...args}>{args.name}</Checkbox>
}

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

const AllStates: Story<CheckboxProps> = (args) => {
  return (
    <VStack>
      <Checkbox {...args}>Unselected</Checkbox>
      <Checkbox {...args}>
        Really long unselected option that overflows and wraps to the next line
        because there is too much text. In fact, there's an entire paragraph so
        we can see what it looks like when there is too much text in the option.
      </Checkbox>
      <Checkbox {...args} isChecked>
        Selected
      </Checkbox>
      <Checkbox {...args} isDisabled>
        Unselected disabled
      </Checkbox>
      <Checkbox {...args} isChecked isDisabled>
        Selected disabled
      </Checkbox>
    </VStack>
  )
}

export const CheckboxStates = AllStates.bind({})
