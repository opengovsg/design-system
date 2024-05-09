import { forwardRef, useMemo } from 'react'
import { chakra, type HTMLChakraProps, Icon } from '@chakra-ui/react'

import { BxsErrorCircle } from '..'

import { getFileError } from './utils/getFileError'
import { useFileUploadContext } from './FileUploadProvider'
import { useFileUploadStyles } from './FileUploadStyleContext'

export interface FileUploadErrorTextProps extends HTMLChakraProps<'div'> {}

export const FileUploadErrorText = forwardRef<
  HTMLDivElement,
  FileUploadErrorTextProps
>((props, ref) => {
  const { children, ...rest } = props
  const { fileUpload, context } = useFileUploadContext()
  const styles = useFileUploadStyles()

  const hasError =
    fileUpload.rejectedFiles.length !== 0 &&
    fileUpload.rejectedFiles[0].errors.length !== 0

  const errorMessage = useMemo(() => {
    if (children) return children
    if (!hasError) return null
    const firstRejectedDetail = fileUpload.rejectedFiles[0]
    return getFileError({
      context,
      file: firstRejectedDetail.file,
      error: firstRejectedDetail.errors[0],
    })
  }, [children, context, fileUpload.rejectedFiles, hasError])

  if (!hasError) return null

  return (
    <chakra.div __css={styles.errorText} {...rest} ref={ref}>
      <Icon as={BxsErrorCircle} />
      {errorMessage}
    </chakra.div>
  )
})

FileUploadErrorText.displayName = 'FileUploadErrorText'
