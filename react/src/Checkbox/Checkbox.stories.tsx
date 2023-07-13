import { FC, PropsWithChildren, useMemo, useState } from 'react'
import { CheckboxGroup, FormControl, Stack, VStack } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { FormLabel } from '~/FormControl/FormLabel'
import {
  getMobileViewParameters,
  getTabletViewParameters,
} from '~/utils/storybook'

import { Checkbox, CheckboxProps } from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} as Meta<CheckboxProps>

const Template: StoryFn<CheckboxProps> = (args) => {
  return <Checkbox {...args}>{args.name}</Checkbox>
}

export const Default = Template.bind({})
Default.args = {
  colorScheme: 'main',
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

const IndeterminateCheckbox: FC<PropsWithChildren> = ({ children }) => {
  const [checked, setChecked] = useState(true)

  return (
    <Checkbox
      isChecked={checked}
      onChange={(e) => setChecked(e.target.checked)}
      isIndeterminate={!!checked}
    >
      {children}
    </Checkbox>
  )
}

const AllStates: StoryFn = (args) => {
  return (
    <VStack>
      <Checkbox {...args}>Unselected</Checkbox>
      <Checkbox {...args}>
        Really long unselected option that overflows and wraps to the next line
        because there is too much text. In fact, there's an entire paragraph so
        we can see what it looks like when there is too much text in the option.
      </Checkbox>
      <Checkbox data-hover {...args}>
        Hover
      </Checkbox>
      <IndeterminateCheckbox>Indeterminate</IndeterminateCheckbox>
      <Checkbox {...args} defaultChecked>
        Selected
      </Checkbox>
      <Checkbox {...args} isDisabled>
        Unselected disabled
      </Checkbox>
      <Checkbox {...args} defaultChecked isDisabled>
        Selected disabled
      </Checkbox>
    </VStack>
  )
}

export const CheckboxStates = AllStates.bind({})

export const CheckboxSizes = () => (
  <VStack>
    <Checkbox size="xs">xs</Checkbox>
    <Checkbox isDisabled size="sm">
      Disabled sm
    </Checkbox>
    <Checkbox size="md" defaultChecked>
      Selected md
    </Checkbox>
  </VStack>
)

export const CheckboxColors = () => (
  <VStack>
    <Checkbox defaultChecked colorScheme="main">
      main
    </Checkbox>
    <Checkbox defaultChecked colorScheme="red">
      red
    </Checkbox>
    <Checkbox defaultChecked colorScheme="yellow">
      yellow
    </Checkbox>
    <Checkbox defaultChecked colorScheme="blue">
      blue
    </Checkbox>
    <Checkbox defaultChecked colorScheme="green">
      green
    </Checkbox>
    <Checkbox defaultChecked colorScheme="grey">
      grey
    </Checkbox>
    <Checkbox defaultChecked colorScheme="slate">
      slate
    </Checkbox>
  </VStack>
)

export const Playground: StoryFn = ({ label, ...args }) => {
  const options = useMemo(() => ['Option 1', 'Option 2', 'Option 3'], [])

  return (
    <FormControl mb={6}>
      <FormLabel isRequired>{label}</FormLabel>
      <CheckboxGroup {...args}>
        <Stack spacing="0.5rem">
          {options.map((o, idx) => (
            <Checkbox key={idx} value={o} {...args}>
              {o}
            </Checkbox>
          ))}
          <Checkbox.OthersWrapper {...args}>
            <Checkbox.OthersCheckbox {...args} />
            <Checkbox.OthersInput />
          </Checkbox.OthersWrapper>
        </Stack>
      </CheckboxGroup>
    </FormControl>
  )
}

Playground.args = {
  label: 'Checkbox label',
  size: 'md',
}
