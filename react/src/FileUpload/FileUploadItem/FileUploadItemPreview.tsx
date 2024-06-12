import { forwardRef } from 'react'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { mergeProps } from '@zag-js/react'

import { useFileUploadContext } from '../FileUploadProvider'
import { useFileUploadStyles } from '../FileUploadStyleContext'

import { useFileUploadItemContext } from './FileUploadItemProvider'

export interface FileUploadItemPreviewProps extends HTMLChakraProps<'div'> {
  /**
   * The file type to match against. Matches all file types by default.
   * @default '.*'
   */
  type?: string
}

export const FileUploadItemPreview = forwardRef<
  HTMLImageElement,
  FileUploadItemPreviewProps
>((props, ref) => {
  const { fileUpload } = useFileUploadContext()
  const itemProps = useFileUploadItemContext()
  const styles = useFileUploadStyles()

  const mergedProps = mergeProps(
    fileUpload.getItemPreviewProps(itemProps),
    // @ts-expect-error types are not correct
    props,
  )

  if (!itemProps.file.type.match(props.type ?? '.*')) return null

  return <chakra.div __css={styles.itemPreview} {...mergedProps} ref={ref} />
})

FileUploadItemPreview.displayName = 'FileUploadItemPreview'
