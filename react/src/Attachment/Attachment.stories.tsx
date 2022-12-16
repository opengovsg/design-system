import { useControllableState } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { getMobileViewParameters } from '~/utils/storybook'

import { Attachment, AttachmentProps } from './Attachment'

const MOCK_OGP_LOGO_FILE = new File(
  [
    Uint8Array.from(
      window.atob(
        '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',
      ),
      (c) => c.charCodeAt(0),
    ),
  ],
  'mock file.png',
  { type: 'image/png' },
)

export default {
  title: 'Components/Attachment',
  component: Attachment,
  decorators: [],
} as Meta

const Template: StoryFn<AttachmentProps> = ({ value, onChange, ...args }) => {
  const [file, setFile] = useControllableState<File | undefined>({
    value,
    onChange,
  })

  return <Attachment value={file} onChange={setFile} {...args} />
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
  value: MOCK_OGP_LOGO_FILE,
}

export const WithUploadedFileDisabled = Template.bind({})
WithUploadedFileDisabled.args = {
  ...WithUploadedFile.args,
  isDisabled: true,
}

export const WithSmallImagePreview = Template.bind({})
WithSmallImagePreview.args = {
  ...WithUploadedFile.args,
  imagePreview: 'small',
}

export const WithLargeImagePreview = Template.bind({})
WithLargeImagePreview.args = {
  ...WithUploadedFile.args,
  imagePreview: 'large',
}
WithLargeImagePreview.parameters = getMobileViewParameters()
