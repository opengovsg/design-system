import { forwardRef } from 'react'
import { type HTMLChakraProps } from '@chakra-ui/react'

import { getReadableFileSize } from './utils/getReadableFizeSize'
import { FileUploadHelperText } from './FileUploadHelperText'
import { useFileUploadContext } from './FileUploadProvider'

export interface FileUploadHelperTextProps extends HTMLChakraProps<'div'> {}

/**
 * Helper text at the bottom of the file upload component showing the maximum file size allowed.
 * Will be hidden if there are any errors.
 */
export const FileUploadMaxSizeHelperText = forwardRef<
  HTMLDivElement,
  FileUploadHelperTextProps
>((props, ref) => {
  const { fileUpload, context } = useFileUploadContext()

  const hasError =
    fileUpload.rejectedFiles.length !== 0 &&
    fileUpload.rejectedFiles[0].errors.length !== 0

  if (context.maxFileSize === undefined || hasError) return null

  return (
    <FileUploadHelperText ref={ref} {...props}>
      Maximum file size: {getReadableFileSize(context.maxFileSize)}
    </FileUploadHelperText>
  )
})

FileUploadMaxSizeHelperText.displayName = 'FileUploadMaxSizeHelperText'
