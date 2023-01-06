import { SimpleGrid } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { NumberInput, NumberInputProps } from './NumberInput'

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
  tags: ['autodocs'],
  decorators: [],
} as Meta

const Template: StoryFn<NumberInputProps> = (args) => <NumberInput {...args} />
export const Default = Template.bind({})
Default.args = {
  placeholder: 'Test placeholder',
}

export const HideSteppers = Template.bind({})
HideSteppers.args = {
  placeholder: 'This field has no steppers',
  showSteppers: false,
}

export const Prefilled = Template.bind({})
Prefilled.args = {
  placeholder: 'Test placeholder',
  defaultValue: '3.142',
  isPrefilled: true,
}

export const Error = Template.bind({})
Error.args = {
  isInvalid: true,
  defaultValue: '-1',
}

export const Success = Template.bind({})
Success.args = {
  isInvalid: false,
  isSuccess: true,
  defaultValue: '1337',
}
export const Disabled = Template.bind({})
Disabled.args = {
  defaultValue: '0',
  isDisabled: true,
}

export const Sizes = () => (
  <SimpleGrid columns={3} spacing="0.5rem">
    <NumberInput placeholder="Extra Small placeholder" size="xs" />
    <NumberInput placeholder="Small placeholder" size="sm" />
    <NumberInput placeholder="Medium placeholder" size="md" />

    <NumberInput placeholder="Extra Small" size="xs" defaultValue="3" />
    <NumberInput placeholder="Small" size="sm" defaultValue="44" />
    <NumberInput placeholder="Medium" size="md" defaultValue="555" />

    <NumberInput placeholder="Extra Small success" size="xs" isSuccess />
    <NumberInput placeholder="Small success" size="sm" isSuccess />
    <NumberInput placeholder="Medium success" size="md" isSuccess />

    <NumberInput placeholder="Extra Small disabled" size="xs" isDisabled />
    <NumberInput placeholder="Small disabled" size="sm" isDisabled />
    <NumberInput placeholder="Medium disabled" size="md" isDisabled />

    <NumberInput
      placeholder="Extra Small prefilled"
      size="xs"
      defaultValue="123"
      isPrefilled
    />
    <NumberInput
      placeholder="Small prefilled"
      size="sm"
      defaultValue="1234"
      isPrefilled
    />
    <NumberInput
      placeholder="Medium prefilled"
      size="md"
      defaultValue="12345"
      isPrefilled
    />

    <NumberInput placeholder="Extra Small invalid" size="xs" isInvalid />
    <NumberInput placeholder="Small invalid" size="sm" isInvalid />
    <NumberInput placeholder="Medium invalid" size="md" isInvalid />
  </SimpleGrid>
)
