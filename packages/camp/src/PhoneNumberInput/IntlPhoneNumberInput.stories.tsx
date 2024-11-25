import { useState } from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { Meta, StoryFn, StoryObj } from '@storybook/react'

import { PhoneNumberInput, PhoneNumberInputProps } from './PhoneNumberInput'

const Template: StoryFn<PhoneNumberInputProps> = (args) => {
  const [value, setValue] = useState<string | undefined>(args.value ?? '')
  return (
    <PhoneNumberInput
      {...args}
      value={value}
      onChange={(...params) => {
        args.onChange?.(...params)
        setValue(...params)
      }}
    />
  )
}

export default {
  title: 'Components/PhoneNumberInput/International',
  component: PhoneNumberInput,
  tags: ['autodocs'],
  parameters: { actions: { argTypesRegex: '^on.*' } },
  decorators: [],
  render: (args) => <Template {...args} />,
} as Meta

type Story = StoryObj<PhoneNumberInputProps>

export const Default: Story = {}

export const Prefilled: Story = {
  args: {
    value: '+12015550123',
    isPrefilled: true,
  },
}

export const Error: Story = {
  args: {
    isInvalid: true,
    value: '999',
  },
}

export const Success: Story = {
  args: {
    isInvalid: false,
    isSuccess: true,
    value: '+6598765432',
  },
}
export const Disabled: Story = {
  args: {
    value: '123',
    isDisabled: true,
  },
}

export const Sizes: StoryFn = (args) => {
  return (
    <SimpleGrid columns={3} spacing="0.5rem">
      <PhoneNumberInput {...args} size="xs" />
      <PhoneNumberInput {...args} size="sm" />
      <PhoneNumberInput {...args} size="md" />

      <PhoneNumberInput {...args} size="sm" defaultValue="sm filled" />
      <PhoneNumberInput {...args} size="xs" defaultValue="xs filled" />
      <PhoneNumberInput {...args} size="md" defaultValue="md filled" />

      <PhoneNumberInput
        {...args}
        size="xs"
        isSuccess
        defaultValue="xs success"
      />
      <PhoneNumberInput
        {...args}
        size="sm"
        isSuccess
        defaultValue="sm success"
      />
      <PhoneNumberInput
        {...args}
        size="md"
        isSuccess
        defaultValue="md success"
      />

      <PhoneNumberInput
        {...args}
        size="sm"
        isDisabled
        defaultValue="sm disabled"
      />
      <PhoneNumberInput
        {...args}
        size="xs"
        isDisabled
        defaultValue="xs disabled"
      />
      <PhoneNumberInput
        {...args}
        size="md"
        isDisabled
        defaultValue="md disabled"
      />

      <PhoneNumberInput
        {...args}
        size="xs"
        defaultValue="xs prefilled"
        isPrefilled
      />
      <PhoneNumberInput
        {...args}
        size="sm"
        defaultValue="sm prefilled"
        isPrefilled
      />
      <PhoneNumberInput
        {...args}
        size="md"
        defaultValue="md prefilled"
        isPrefilled
      />

      <PhoneNumberInput {...args} size="xs" defaultValue="xs error" isInvalid />
      <PhoneNumberInput {...args} size="sm" defaultValue="sm error" isInvalid />
      <PhoneNumberInput {...args} size="md" defaultValue="md error" isInvalid />
    </SimpleGrid>
  )
}
