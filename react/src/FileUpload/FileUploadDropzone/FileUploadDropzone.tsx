import { forwardRef } from 'react'
import { Box, type HTMLChakraProps } from '@chakra-ui/react'
import { dataAttr } from '@chakra-ui/utils'
import { mergeProps } from '@zag-js/react'

import { useFileUploadContext } from '../FileUploadProvider'
import { useFileUploadStyles } from '../FileUploadStyleContext'

export interface FileUploadDropzoneProps extends HTMLChakraProps<'div'> {}

export const FileUploadDropzone = forwardRef<
  HTMLDivElement,
  FileUploadDropzoneProps
>(({ children, ...props }, ref) => {
  const { fileUpload } = useFileUploadContext()
  const styles = useFileUploadStyles()

  const hasError =
    fileUpload.rejectedFiles.length !== 0 &&
    fileUpload.rejectedFiles[0].errors.length !== 0

  // @ts-expect-error types are not correct
  const mergedProps = mergeProps(fileUpload.dropzoneProps, props)

  return (
    <Box
      data-active={dataAttr(fileUpload.dragging)}
      {...mergedProps}
      data-invalid={dataAttr(hasError)}
      __css={styles.dropzone}
      ref={ref}
    >
      {children}
    </Box>
  )
})

FileUploadDropzone.displayName = 'FileUploadDropzone'
