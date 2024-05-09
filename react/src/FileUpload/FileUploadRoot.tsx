import { forwardRef } from 'react'
import { chakra, ThemingProps, useMultiStyleConfig } from '@chakra-ui/react'
import { splitProps } from '@zag-js/file-upload'
import { mergeProps } from '@zag-js/react'

import {
  FileUploadPassthroughProps,
  FileUploadProvider,
} from './FileUploadProvider'
import { FileUploadStylesProvider } from './FileUploadStyleContext'
import { useFileUpload, UseFileUploadProps } from './useFileUpload'

export interface FileUploadRootProps
  extends Omit<UseFileUploadProps, 'disabled'>,
    FileUploadPassthroughProps {
  /**
   * Color scheme of the component.
   */
  colorScheme?: ThemingProps<'Attachment'>['colorScheme']
  isDisabled?: boolean
}

export const FileUploadRoot = forwardRef<HTMLDivElement, FileUploadRootProps>(
  ({ isDisabled, imagePreview, ...props }, ref) => {
    const [fileUploadProps, restProps] = splitProps(props)

    const styles = useMultiStyleConfig('FileUpload', { ...props, imagePreview })

    const fileUploadContext: UseFileUploadProps = {
      ...fileUploadProps,
      disabled: isDisabled,
    }
    const fileUpload = useFileUpload(fileUploadContext)
    // @ts-expect-error types are not correct
    const mergedProps = mergeProps(fileUpload.rootProps, restProps)

    return (
      <FileUploadStylesProvider value={styles}>
        <FileUploadProvider
          value={{
            fileUpload,
            context: fileUploadContext,
            imagePreview,
          }}
        >
          <chakra.div __css={styles.root} {...mergedProps} ref={ref} />
        </FileUploadProvider>
      </FileUploadStylesProvider>
    )
  },
)

FileUploadRoot.displayName = 'FileUploadRoot'
