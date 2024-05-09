import { forwardRef } from 'react'
import { Text, TextProps } from '@chakra-ui/react'

import { useFileUploadContext } from '../FileUploadProvider'
import { useFileUploadStyles } from '../FileUploadStyleContext'

export interface FileUploadDraggingLabelProps extends TextProps {}

export const FileUploadDraggingLabel = forwardRef<
  HTMLParagraphElement,
  FileUploadDraggingLabelProps
>(({ children, ...props }, ref) => {
  const { fileUpload } = useFileUploadContext()
  const styles = useFileUploadStyles()

  if (!fileUpload.dragging) {
    return null
  }
  if (children && typeof children !== 'string') {
    return children
  }

  return (
    <Text __css={styles.label} {...props} ref={ref}>
      {children || 'Drop the file here...'}
    </Text>
  )
})

FileUploadDraggingLabel.displayName = 'FileUploadDraggingLabel'
