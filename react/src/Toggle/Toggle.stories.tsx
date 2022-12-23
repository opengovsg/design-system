import { VStack } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { Toggle, ToggleProps } from './Toggle'

export default {
  component: Toggle,
  title: 'Templates/Toggle',
} as Meta<ToggleProps>

const AllToggleStates: StoryFn<ToggleProps> = (args) => {
  return (
    <VStack align="left" w="50%">
      <Toggle
        {...args}
        label="Selected"
        description="Some description"
        containerStyles={{ w: '60%' }}
        isChecked
      />
      <Toggle
        {...args}
        label="A really long label to demonstrate the minimum left margin of the toggle"
        description="The description is also really long for the same reason"
        containerStyles={{ w: '60%' }}
        isChecked
      />
      <Toggle
        {...args}
        label="Selected loading"
        isLoading
        description="Some description"
        containerStyles={{ w: '60%' }}
        isChecked
      />
      <Toggle
        {...args}
        label="Unselected"
        description="Some description"
        containerStyles={{ w: '60%' }}
        isChecked={false}
      />
      <Toggle
        {...args}
        label="Unselected loading"
        isLoading
        description="Some description"
        containerStyles={{ w: '60%' }}
        isChecked={false}
      />
      <Toggle
        {...args}
        label="Selected and disabled"
        description="Some description"
        containerStyles={{ w: '60%' }}
        isChecked
        isDisabled
      />
      <Toggle
        {...args}
        label="Unselected and disabled"
        description="Some description"
        containerStyles={{ w: '60%' }}
        isChecked={false}
        isDisabled
      />
      <Toggle
        {...args}
        label="Wider toggle"
        description="A toggle in a wider container to demonstrate that the width stretches to that of the container"
      />
    </VStack>
  )
}

export const ToggleStates = AllToggleStates.bind({})
ToggleStates.storyName = 'All states'
