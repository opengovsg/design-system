import { Meta, Story } from '@storybook/react'

import { Attachment, AttachmentProps } from './Attachment'

export default {
  title: 'Components/Attachment',
  component: Attachment,
  decorators: [],
} as Meta

const Template: Story<AttachmentProps> = (args) => {
  return <Attachment {...args} />
}

export const Default = Template.bind({})
Default.args = {
  name: 'Test-input',
  maxSize: 23000,
}

export const ShowMaxSize = Template.bind({})
ShowMaxSize.args = {
  name: 'Test-input',
  maxSize: 23000,
  showFileSize: true,
}

export const Invalid = Template.bind({})
Invalid.args = {
  name: 'Test-input',
  isInvalid: true,
}

export const Disabled = Template.bind({})
Disabled.args = {
  name: 'Test-input',
  isDisabled: true,
}

export const WithUploadedFile = Template.bind({})
WithUploadedFile.args = {
  name: 'Test-input',
  value: Object.defineProperty(
    new File([''], 'mock file', { type: 'text/html' }),
    'size',
    { value: 1100 * 1000 },
  ),
}
