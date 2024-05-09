import { forwardRef } from 'react'
import { type HTMLChakraProps } from '@chakra-ui/react'

import { getReadableFileSize } from './utils/getReadableFizeSize'
import { FileUploadHelperText } from './FileUploadHelperText'
import { useFileUploadContext } from './FileUploadProvider'

export interface FileUploadHelperTextProps extends HTMLChakraProps<'div'> {}

/**
 * Helper text at the bottom of the file upload component showing the maximum file size allowed.
 */
export const FileUploadMaxSizeHelperText = forwardRef<
  HTMLDivElement,
  FileUploadHelperTextProps
>((props, ref) => {
  const { context } = useFileUploadContext()

  if (context.maxFileSize === undefined) return null

  return (
    <FileUploadHelperText ref={ref} {...props}>
      Maximum file size: {getReadableFileSize(context.maxFileSize)}
    </FileUploadHelperText>
  )
})

FileUploadMaxSizeHelperText.displayName = 'FileUploadMaxSizeHelperText'
