import { Button, chakra, forwardRef, useMergeRefs } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'

import { getMobileViewParameters, mockDateDecorator } from '~/utils/storybook'

import { DatePicker, DatePickerProps } from './DatePicker'
import { useDatePicker } from './DatePickerContext'

export default {
  title: 'Components/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  decorators: [mockDateDecorator],
  parameters: {
    mockdate: new Date('2021-12-25T06:22:27.219Z'),
  },
} as Meta<DatePickerProps>

const Template: StoryFn<DatePickerProps> = (args) => <DatePicker {...args} />
export const Default = Template.bind({})

export const DatePickerWithValue = Template.bind({})
DatePickerWithValue.args = {
  defaultValue: new Date('2001-01-01'),
}

export const SelectTodayWhenTodayButtonClicked = Template.bind({})
SelectTodayWhenTodayButtonClicked.args = {
  shouldSetDateOnTodayButtonClick: true,
}

export const DatePickerInvalid = Template.bind({})
DatePickerInvalid.args = {
  isInvalid: true,
  defaultValue: new Date('2001-01-01'),
}

export const DatePickerDisabled = Template.bind({})
DatePickerDisabled.args = {
  isDisabled: true,
  defaultValue: new Date('2001-01-01'),
}

export const DatePickerDisallowManualInput = Template.bind({})
DatePickerDisallowManualInput.args = {
  allowManualInput: false,
  defaultValue: new Date('2021-09-13'),
}

export const FixedHeightCalendarPopover = Template.bind({})
FixedHeightCalendarPopover.args = {
  isCalendarFixedHeight: true,
}

export const SizeSmall = Template.bind({})
SizeSmall.args = {
  size: 'sm',
  defaultValue: new Date('2021-09-13'),
}

export const SizeXs = Template.bind({})
SizeXs.args = {
  size: 'xs',
  defaultValue: new Date('2021-09-13'),
}

export const Mobile = Template.bind({})
Mobile.parameters = getMobileViewParameters()

// !!REQUIRES `forwardRef` to be set so Popover parent knows where to anchor to.
const CustomInputButton = forwardRef<object, 'button'>((_props, ref) => {
  const {
    inputRef,
    innerRef,
    disclosureProps: { onOpen },
  } = useDatePicker()
  // !!Important to use forwarded ref so popover knows where to anchor to
  const refs = useMergeRefs(inputRef, innerRef, ref)

  return (
    <Button ref={refs} onClick={onOpen}>
      please look at source code to see how to use custom elements
    </Button>
  )
})

export const CustomInput = Template.bind({})
CustomInput.args = {
  inputElement: <CustomInputButton />,
}
