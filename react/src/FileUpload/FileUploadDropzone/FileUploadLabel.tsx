import { PropsWithChildren, useMemo } from 'react'
import { Text } from '@chakra-ui/react'

import { Link } from '~/Link'

import { useFileUploadContext } from '../FileUploadProvider'
import { useFileUploadStyles } from '../FileUploadStyleContext'

export interface FileUploadLabelProps extends PropsWithChildren {}

export const FileUploadLabel = ({ children }: FileUploadLabelProps) => {
  const { fileUpload, context } = useFileUploadContext()
  const styles = useFileUploadStyles()

  const chooseFileText = useMemo(
    () => `Choose file${context.maxFiles !== 1 ? 's' : ''}`,
    [context.maxFiles],
  )

  if (fileUpload.dragging) {
    return null
  }
  if (children) {
    return children
  }

  return (
    <Text __css={styles.label}>
      <Link isDisabled={context.disabled}>{chooseFileText}</Link> or drag and
      drop here
    </Text>
  )
}
