import { forwardRef } from 'react'
import { chakra, HTMLChakraProps } from '@chakra-ui/react'
import { type ItemProps } from '@zag-js/file-upload'
import { mergeProps } from '@zag-js/react'

import { useFileUploadContext } from '../FileUploadProvider'
import { useFileUploadStyles } from '../FileUploadStyleContext'

import { FileUploadItemProvider } from './FileUploadItemProvider'

export interface FileUploadItemProps
  extends Omit<HTMLChakraProps<'ul'>, keyof ItemProps>,
    ItemProps {}

export const FileUploadItem = forwardRef<HTMLLIElement, FileUploadItemProps>(
  ({ file, ...localProps }, ref) => {
    const { fileUpload } = useFileUploadContext()
    const styles = useFileUploadStyles()

    const mergedProps = mergeProps(
      fileUpload.getItemProps({ file }),
      // @ts-expect-error types are not correct
      localProps,
    )

    return (
      <FileUploadItemProvider value={{ file }}>
        <chakra.li
          listStyleType="none"
          __css={styles.item}
          {...mergedProps}
          ref={ref}
        />
      </FileUploadItemProvider>
    )
  },
)

FileUploadItem.displayName = 'FileUploadItem'
