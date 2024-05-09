/**
 * Component used to render a hidden input field for file upload
 * Must be available or the file upload dialog will not open
 */
import { forwardRef } from 'react'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { mergeProps } from '@zag-js/react'

import { useFileUploadContext } from './FileUploadProvider'

export interface FileUploadHiddenInputProps extends HTMLChakraProps<'input'> {}

export const FileUploadHiddenInput = forwardRef<
  HTMLInputElement,
  FileUploadHiddenInputProps
>((props, ref) => {
  const { fileUpload } = useFileUploadContext()
  // @ts-expect-error types are not correct
  const mergedProps = mergeProps(fileUpload.hiddenInputProps, props)

  return <chakra.input {...mergedProps} ref={ref} />
})

FileUploadHiddenInput.displayName = 'FileUploadHiddenInput'
