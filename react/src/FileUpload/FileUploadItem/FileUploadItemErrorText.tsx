import { forwardRef, useMemo } from 'react'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { mergeProps } from '@zag-js/react'

import { useFileUploadItemContext } from '../FileUploadItem/FileUploadItemProvider'
import { useFileUploadContext } from '../FileUploadProvider'
import { useFileUploadStyles } from '../FileUploadStyleContext'
import { getFileExtension } from '../utils/getFileExtension'
import { getReadableFileSize } from '../utils/getReadableFizeSize'

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
    switch (itemProps.errors[0]) {
      case 'FILE_INVALID_TYPE': {
        const fileExt = getFileExtension(itemProps.file.name)
        return `Your file's extension ending in *${fileExt} is not allowed`
      }
      case 'TOO_MANY_FILES': {
        return `You can only upload ${maxFiles} file${maxFiles === 1 ? '' : 's'} in this input`
      }
      case 'FILE_TOO_LARGE': {
        let errorMessage = 'This file exceeds the size limit.'
        if (maxFileSize !== undefined) {
          errorMessage += ` Please upload a file that is under ${getReadableFileSize(maxFileSize)}`
        }
        return errorMessage
      }
      case 'FILE_TOO_SMALL': {
        let errorMessage = 'This file is too small.'
        if (minFileSize !== undefined) {
          errorMessage += ` Please upload a file that is at least ${getReadableFileSize(minFileSize)}`
        }
        return errorMessage
      }
      default: {
        const expect: never = itemProps.errors[0]
        return `Unexpected error: ${expect}`
      }
    }
  }, [
    children,
    itemProps.errors,
    itemProps.file.name,
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
