import { PropsWithChildren } from 'react'
import { Text } from '@chakra-ui/react'

import { useFileUploadContext } from '../FileUploadProvider'

export interface FileUploadDraggingLabelProps extends PropsWithChildren {}

export const FileUploadDraggingLabel = ({
  children,
}: FileUploadDraggingLabelProps) => {
  const { fileUpload } = useFileUploadContext()

  if (!fileUpload.dragging) {
    return null
  }
  if (children) {
    return children
  }

  return <Text>Drop the file here...</Text>
}
