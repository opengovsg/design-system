import { forwardRef, useMemo } from 'react'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { mergeProps } from '@zag-js/react'

import { useFileUploadItemContext } from '../FileUploadItem/FileUploadItemProvider'
import { useFileUploadContext } from '../FileUploadProvider'
import { useFileUploadStyles } from '../FileUploadStyleContext'
import { getFileError } from '../utils/getFileError'

export interface FileUploadItemErrorTextProps extends HTMLChakraProps<'div'> {}

export const FileUploadItemErrorText = forwardRef<
  HTMLDivElement,
  FileUploadItemErrorTextProps
>((props, ref) => {
  const { children, ...rest } = props
  const {
    fileUpload,
    context: { maxFiles, maxFileSize, minFileSize },
  } = useFileUploadContext()
  const itemProps = useFileUploadItemContext()
  const styles = useFileUploadStyles()

  // @ts-expect-error types are not correct
  const mergedProps = mergeProps(fileUpload.getItemNameProps(itemProps), rest)

  const errorToDisplay = useMemo(() => {
    if (children) return children
    if (!itemProps.errors || itemProps.errors.length === 0) {
      return null
    }
    return getFileError({
      context: { maxFiles, maxFileSize, minFileSize },
      file: itemProps.file,
      error: itemProps.errors[0],
    })
  }, [
    children,
    itemProps.errors,
    itemProps.file,
    maxFileSize,
    maxFiles,
    minFileSize,
  ])

  if (!itemProps.errors || itemProps.errors.length === 0) {
    return null
  }

  return (
    <chakra.div __css={styles.itemErrorText} {...mergedProps} ref={ref}>
      {errorToDisplay}
    </chakra.div>
  )
})

FileUploadItemErrorText.displayName = 'FileUploadItemErrorText'
