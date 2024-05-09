import { forwardRef, useEffect, useState } from 'react'
import { type HTMLChakraProps, Image } from '@chakra-ui/react'
import { mergeProps } from '@zag-js/react'

import { useFileUploadContext } from '../FileUploadProvider'
import { useFileUploadStyles } from '../FileUploadStyleContext'

import { useFileUploadItemContext } from './FileUploadItemProvider'

export interface FileUploadItemPreviewImageProps
  extends HTMLChakraProps<'img'> {}

export const FileUploadItemPreviewImage = forwardRef<
  HTMLImageElement,
  FileUploadItemPreviewImageProps
>((props, ref) => {
  const [url, setUrl] = useState<string>('')
  const { fileUpload } = useFileUploadContext()
  const itemProps = useFileUploadItemContext()

  const styles = useFileUploadStyles()

  const mergedProps = mergeProps(
    fileUpload.getItemPreviewImageProps({ ...itemProps, url }),
    // @ts-expect-error types are not correct
    props,
  )

  useEffect(() => {
    fileUpload.createFileUrl(itemProps.file, (url) => setUrl(url))
  }, [itemProps, fileUpload])

  return <Image __css={styles.itemPreviewImage} {...mergedProps} ref={ref} />
})

FileUploadItemPreviewImage.displayName = 'FileUploadItemPreviewImage'
