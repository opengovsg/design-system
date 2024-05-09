import { forwardRef, useMemo } from 'react'
import { Text, TextProps } from '@chakra-ui/react'

import { Link } from '~/Link'

import { useFileUploadContext } from '../FileUploadProvider'
import { useFileUploadStyles } from '../FileUploadStyleContext'

export interface FileUploadLabelProps extends TextProps {}

export const FileUploadLabel = forwardRef<
  HTMLParagraphElement,
  FileUploadLabelProps
>(({ children, ...props }, ref) => {
  const { fileUpload, context } = useFileUploadContext()
  const styles = useFileUploadStyles()

  const chooseFileText = useMemo(
    () => `Choose file${context.maxFiles !== 1 ? 's' : ''}`,
    [context.maxFiles],
  )

  if (fileUpload.dragging) {
    return null
  }
  if (children && typeof children !== 'string') {
    return children
  }

  return (
    <Text __css={styles.label} {...props} ref={ref}>
      {children || (
        <>
          <Link isDisabled={context.disabled}>{chooseFileText}</Link>
          {context.allowDrop ? ' or drag and drop here' : ''}
        </>
      )}
    </Text>
  )
})

FileUploadLabel.displayName = 'FileUploadLabel'
