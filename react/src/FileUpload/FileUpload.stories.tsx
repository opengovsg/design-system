import { Meta, StoryObj } from '@storybook/react'

import { FileUpload, FileUploadRootProps } from './FileUpload'

export default {
  title: 'Components/FileUpload',
  tags: ['autodocs'],
  argTypes: {
    imagePreview: { control: 'select', options: ['small', 'large', undefined] },
  },
} as Meta

const Template = (args: FileUploadRootProps) => {
  return (
    <>
      <FileUpload.Root {...args}>
        <FileUpload.Dropzone>
          <FileUpload.DropzoneIcon />
          <FileUpload.Label />
          <FileUpload.DraggingLabel />
        </FileUpload.Dropzone>
        <FileUpload.ItemGroup>
          <FileUpload.Context>
            {({ acceptedFiles, rejectedFiles }) => (
              <>
                {acceptedFiles.map((file) => (
                  <FileUpload.Item key={file.name} file={file}>
                    <FileUpload.ItemPreview type="image/*">
                      <FileUpload.ItemPreviewImage />
                    </FileUpload.ItemPreview>
                    <FileUpload.ItemName />
                    <FileUpload.ItemSizeText />
                    <FileUpload.ItemDeleteTrigger />
                  </FileUpload.Item>
                ))}
              </>
            )}
          </FileUpload.Context>
        </FileUpload.ItemGroup>
        <FileUpload.HiddenInput />
      </FileUpload.Root>
    </>
  )
}

export const WithParts: StoryObj<FileUploadRootProps> = {
  args: {
    maxFiles: 5,
    maxFileSize: 10000,
    isDisabled: true,
    imagePreview: 'small',
    onFileAccept: (file) => {
      console.log('file accepted', file)
    },
    onFileReject: (file) => {
      console.log('file rejected', file)
    },
  },
  render: Template,
}
