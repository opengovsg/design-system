import { forwardRef, useEffect } from 'react'
import {
  chakra,
  HTMLChakraProps,
  ThemingProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'
import { splitProps } from '@zag-js/file-upload'
import { mergeProps } from '@zag-js/react'
import { isEqual } from 'lodash'

import {
  FileUploadPassthroughProps,
  FileUploadProvider,
} from './FileUploadProvider'
import { FileUploadStylesProvider } from './FileUploadStyleContext'
import { useFileUpload, UseFileUploadProps } from './useFileUpload'

export interface FileUploadRootProps
  extends Omit<UseFileUploadProps, 'disabled'>,
    FileUploadPassthroughProps,
    Omit<HTMLChakraProps<'div'>, 'dir' | 'defaultValue'> {
  /**
   * Color scheme of the component.
   */
  colorScheme?: ThemingProps<'Attachment'>['colorScheme']
  isDisabled?: boolean

  /**
   * If provided, the component will be a controlled component.
   */
  value?: File[]
}

export const FileUploadRoot = forwardRef<HTMLDivElement, FileUploadRootProps>(
  ({ isDisabled, imagePreview, value, ...props }, ref) => {
    const [fileUploadProps, restProps] = splitProps(props)

    const styles = useMultiStyleConfig('FileUpload', { ...props, imagePreview })

    const fileUploadContext: UseFileUploadProps = {
      ...fileUploadProps,
      disabled: isDisabled,
    }

    const fileUpload = useFileUpload(fileUploadContext)
    // @ts-expect-error types are not correct
    const mergedProps = mergeProps(fileUpload.rootProps, restProps)

    useEffect(() => {
      if (value) {
        if (isEqual(value, fileUpload.acceptedFiles)) return
        fileUpload.setFiles(value)
      }
      // Should only rerender if value changes
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

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
