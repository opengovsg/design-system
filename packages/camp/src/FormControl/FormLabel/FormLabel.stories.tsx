import { Stack, StackDivider } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { FormLabel, FormLabelProps } from './FormLabel'

export default {
  title: 'Components/FormControl/FormLabel',
  component: FormLabel,
  tags: ['autodocs'],
  decorators: [],
} as Meta

const Template: StoryFn<FormLabelProps> = (args) => <FormLabel {...args} />
export const Default = Template.bind({})
Default.args = {
  children: 'This is a label that is very very very long',
}

export const WithQuestionNumber = Template.bind({})
WithQuestionNumber.args = {
  questionNumber: '1.',
  children: 'This is a label that is very very very long',
}

export const WithIsRequired = Template.bind({})
WithIsRequired.args = {
  questionNumber: '1.',
  isRequired: true,
  children: 'This is a label that is very very very long',
}
WithIsRequired.storyName = 'With isRequired'

export const WithDescription = Template.bind({})
WithDescription.args = {
  questionNumber: '1.',
  description: 'Additional description',
  children: 'This is a label that is very very very long',
}

export const WithTooltipText = Template.bind({})
WithTooltipText.args = {
  questionNumber: '1.',
  tooltipText: 'This is a tooltip',
  children: 'This is a label that is very very very long',
}

export const Sizes = () => (
  <Stack divider={<StackDivider />}>
    <FormLabel
      size="sm"
      description="Small label description"
      tooltipText="Small label tooltip"
    >
      Small label
    </FormLabel>
    <FormLabel
      size="md"
      description="Medium label description"
      tooltipText="Medium label tooltip"
    >
      Medium label
    </FormLabel>
  </Stack>
)
