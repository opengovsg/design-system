import {
  FormControl,
  FormLabel,
  SimpleGrid,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { Switch, SwitchProps } from './Switch'

export default {
  component: Switch,
  title: 'Components/Switch',
} as Meta<SwitchProps>

const Template: StoryFn<SwitchProps> = (args) => <Switch {...args} />

export const Default = Template.bind({})

export const Checked = Template.bind({})
Checked.args = {
  defaultChecked: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  isDisabled: true,
}

export const DisabledChecked = Template.bind({})
DisabledChecked.args = {
  isDisabled: true,
  defaultChecked: true,
}

export const Sizes = () => (
  <Stack>
    <FormControl id="small" display="flex" alignItems="center">
      <FormLabel mb={0}>Small</FormLabel>
      <Switch size="sm" />
    </FormControl>
    <FormControl id="medium" display="flex" alignItems="center">
      <FormLabel mb={0}>Medium</FormLabel>
      <Switch size="md" defaultChecked />
    </FormControl>
    <FormControl id="large" display="flex" alignItems="center">
      <FormLabel mb={0}>Large</FormLabel>
      <Switch size="lg" />
    </FormControl>
  </Stack>
)

export const Colors = () => (
  <SimpleGrid columns={2} templateColumns="min-content auto" spacing="1rem">
    <Text>main</Text>
    <Switch defaultChecked colorScheme="main" />
    <Text>warning</Text>
    <Switch defaultChecked colorScheme="warning" />
    <Text>success</Text>
    <Switch defaultChecked colorScheme="success" />
    <Text>critical</Text>
    <Switch defaultChecked colorScheme="critical" />
    <Text>red</Text>
    <Switch defaultChecked colorScheme="red" />
    <Text>green</Text>
    <Switch defaultChecked colorScheme="green" />
    <Text>blue</Text>
    <Switch defaultChecked colorScheme="blue" />
  </SimpleGrid>
)
