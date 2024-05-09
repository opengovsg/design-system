import { forwardRef } from 'react'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { mergeProps } from '@zag-js/react'

import { useFileUploadContext } from '../FileUploadProvider'
import { useFileUploadStyles } from '../FileUploadStyleContext'

import { useFileUploadItemContext } from './FileUploadItemProvider'

export interface FileUploadItemSizeTextProps extends HTMLChakraProps<'div'> {}

export const FileUploadItemSizeText = forwardRef<
  HTMLDivElement,
  FileUploadItemSizeTextProps
>((props, ref) => {
  const { children, ...rest } = props
  const { fileUpload } = useFileUploadContext()
  const itemProps = useFileUploadItemContext()
  const styles = useFileUploadStyles()

  const mergedProps = mergeProps(
    fileUpload.getItemSizeTextProps(itemProps),
    // @ts-expect-error types are not correct
    rest,
  )

  return (
    <chakra.div __css={styles.itemSizeText} {...mergedProps} ref={ref}>
      {children || fileUpload.getFileSize(itemProps.file)}
    </chakra.div>
  )
})

FileUploadItemSizeText.displayName = 'FileUploadItemSizeText'
