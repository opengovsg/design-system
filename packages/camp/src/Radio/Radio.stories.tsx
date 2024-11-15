import { useMemo } from 'react'
import { FormControl, FormLabel, Stack, VStack } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import {
  getMobileViewParameters,
  getTabletViewParameters,
} from '~/utils/storybook'

import { Radio, RadioProps } from './Radio'

export default {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
} as Meta<RadioProps>

const Template: StoryFn<RadioProps> = (args) => (
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
Mobile.parameters = getMobileViewParameters()

export const Tablet = Template.bind({})
Tablet.args = {
  name: 'Tablet',
}
Tablet.parameters = getTabletViewParameters()

const AllStates: StoryFn<RadioProps> = (args) => {
  return (
    <VStack>
      <Radio {...args}>Unselected</Radio>
      <Radio {...args}>
        Really long unselected option that overflows and wraps to the next line
        because there is too much text. In fact, there's an entire paragraph so
        we can see what it looks like when there is too much text in the option.
      </Radio>
      <Radio {...args} defaultChecked>
        Selected
      </Radio>
      <Radio {...args} isDisabled>
        Unselected disabled
      </Radio>
      <Radio {...args} defaultChecked isDisabled>
        Selected disabled
      </Radio>
    </VStack>
  )
}

export const RadioStates = AllStates.bind({})

export const RadioSizes = () => (
  <VStack>
    <Radio defaultChecked size="xs">
      xs
    </Radio>
    <Radio isDisabled defaultChecked size="sm">
      Disabled sm
    </Radio>
    <Radio size="md" defaultChecked>
      Selected md
    </Radio>
  </VStack>
)

export const RadioColors = () => (
  <VStack>
    <Radio defaultChecked colorScheme="main">
      main
    </Radio>
    <Radio defaultChecked colorScheme="red">
      red
    </Radio>
    <Radio defaultChecked colorScheme="yellow">
      yellow
    </Radio>
    <Radio defaultChecked colorScheme="blue">
      blue
    </Radio>
    <Radio defaultChecked colorScheme="green">
      green
    </Radio>
    <Radio defaultChecked colorScheme="grey">
      grey
    </Radio>
    <Radio defaultChecked colorScheme="slate">
      slate
    </Radio>
  </VStack>
)

export const DisallowDeselect: StoryFn = ({
  name = 'DisallowDeselect',
  label,
  ...args
}) => {
  const options = useMemo(() => ['Option 1', 'Option 2', 'Option 3'], [])

  return (
    <FormControl id={name} mb={6}>
      <FormLabel>{label}</FormLabel>
      <Radio.RadioGroup name={name} {...args} defaultValue="Option 1">
        <Stack spacing="0.5rem">
          {options.map((o, idx) => (
            <Radio key={idx} value={o} allowDeselect={false}>
              {o}
            </Radio>
          ))}
        </Stack>
      </Radio.RadioGroup>
    </FormControl>
  )
}

export const Playground: StoryFn = ({
  name = 'PlaygroundRadio',
  label,
  ...args
}) => {
  const options = useMemo(() => ['Option 1', 'Option 2', 'Option 3'], [])

  return (
    <FormControl id={name} mb={6}>
      <FormLabel>{label}</FormLabel>
      <Radio.RadioGroup name={name} {...args}>
        <Stack spacing="0.5rem">
          {options.map((o, idx) => (
            <Radio key={idx} value={o}>
              {o}
            </Radio>
          ))}
          <Radio.OthersWrapper value="others">
            <Radio.OthersInput />
          </Radio.OthersWrapper>
        </Stack>
      </Radio.RadioGroup>
    </FormControl>
  )
}

Playground.args = {
  label: 'Radio with others',
  size: 'md',
}
