import { forwardRef } from 'react'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { mergeProps } from '@zag-js/react'

import { useFileUploadContext } from './FileUploadProvider'
import { useFileUploadStyles } from './FileUploadStyleContext'

export interface FileUploadItemGroupProps extends HTMLChakraProps<'ul'> {}

export const FileUploadItemGroup = forwardRef<
  HTMLUListElement,
  FileUploadItemGroupProps
>((props, ref) => {
  const { fileUpload } = useFileUploadContext()
  const styles = useFileUploadStyles()

  // @ts-expect-error types are not correct
  const mergedProps = mergeProps(fileUpload.itemGroupProps, props)

  return <chakra.ul __css={styles.itemGroup} {...mergedProps} ref={ref} />
})

FileUploadItemGroup.displayName = 'FileUploadItemGroup'
