import type { Meta, StoryObj } from '@storybook/react'

import { FileUpload, FileUploadRootProps } from './FileUpload'

const Template = (args: FileUploadRootProps) => {
  return (
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
              {acceptedFiles.map((file, index) => (
                <FileUpload.Item key={`${file.name}-${index}`} file={file}>
                  <FileUpload.ItemPreview type="image/*">
                    <FileUpload.ItemPreviewImage />
                  </FileUpload.ItemPreview>
                  <FileUpload.ItemName />
                  <FileUpload.ItemSizeText />
                  <FileUpload.ItemDeleteTrigger />
                </FileUpload.Item>
              ))}
              {rejectedFiles.map(({ file, errors }, index) => (
                <FileUpload.Item
                  key={`${file.name}-${index}`}
                  file={file}
                  errors={errors}
                >
                  <FileUpload.ItemName />
                  <FileUpload.ItemSizeText />
                  <FileUpload.RejectedErrorText />
                </FileUpload.Item>
              ))}
            </>
          )}
        </FileUpload.Context>
      </FileUpload.ItemGroup>
      <FileUpload.HiddenInput />
    </FileUpload.Root>
  )
}

export default {
  title: 'Components/FileUpload',
  tags: ['autodocs'],
  argTypes: {
    imagePreview: { control: 'select', options: ['small', 'large', undefined] },
  },
  args: {
    maxFiles: 5,
    isDisabled: false,
    imagePreview: 'small',
    onFileAccept: (file) => {
      console.log('file accepted', file)
    },
    onFileReject: (file) => {
      console.log('file rejected', file)
    },
  },
  render: Template,
} as Meta<FileUploadRootProps>

export const WithParts: StoryObj<FileUploadRootProps> = {}

export const MaxSize: StoryObj<FileUploadRootProps> = {
  args: {
    maxFileSize: 1,
  },
}

export const OnlyAcceptImage: StoryObj<FileUploadRootProps> = {
  args: {
    accept: 'image/*',
  },
}

export const LargeImagePreview: StoryObj<FileUploadRootProps> = {
  args: {
    accept: 'image/*',
    imagePreview: 'large',
  },
}
