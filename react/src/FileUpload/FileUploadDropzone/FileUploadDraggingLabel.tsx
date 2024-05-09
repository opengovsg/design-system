import { forwardRef } from 'react'
import { Text, TextProps } from '@chakra-ui/react'

import { useFileUploadContext } from '../FileUploadProvider'
import { useFileUploadStyles } from '../FileUploadStyleContext'

export interface FileUploadDraggingLabelProps extends TextProps {}

export const FileUploadDraggingLabel = forwardRef<
  HTMLParagraphElement,
  FileUploadDraggingLabelProps
>(({ children, ...props }, ref) => {
  const { fileUpload, dropzoneDraggingLabel } = useFileUploadContext()
  const styles = useFileUploadStyles()

  if (!fileUpload.dragging) {
    return null
  }

  return (
    <Text as="span" __css={styles.label} {...props} ref={ref}>
      {children || dropzoneDraggingLabel || 'Drop the file here...'}
    </Text>
  )
})

FileUploadDraggingLabel.displayName = 'FileUploadDraggingLabel'
