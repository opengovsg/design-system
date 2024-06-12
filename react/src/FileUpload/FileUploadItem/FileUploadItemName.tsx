import { forwardRef } from 'react'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { mergeProps } from '@zag-js/react'

import { useFileUploadContext } from '../FileUploadProvider'
import { useFileUploadStyles } from '../FileUploadStyleContext'

import { useFileUploadItemContext } from './FileUploadItemProvider'

export interface FileUploadItemNameProps extends HTMLChakraProps<'div'> {}

export const FileUploadItemName = forwardRef<
  HTMLDivElement,
  FileUploadItemNameProps
>((props, ref) => {
  const { children, ...rest } = props
  const { fileUpload } = useFileUploadContext()
  const itemProps = useFileUploadItemContext()
  const styles = useFileUploadStyles()

  // @ts-expect-error types are not correct
  const mergedProps = mergeProps(fileUpload.getItemNameProps(itemProps), rest)

  return (
    <chakra.div __css={styles.itemName} {...mergedProps} ref={ref}>
      {children || itemProps.file.name}
    </chakra.div>
  )
})

FileUploadItemName.displayName = 'FileUploadItemName'
