import { forwardRef, useMemo } from 'react'
import { chakra, HTMLChakraProps } from '@chakra-ui/react'
import { mergeProps } from '@zag-js/react'

import { Link } from '~/Link'

import { useFileUploadContext } from '../FileUploadProvider'
import { useFileUploadStyles } from '../FileUploadStyleContext'

export interface FileUploadLabelProps extends HTMLChakraProps<'label'> {}

export const FileUploadLabel = forwardRef<
  HTMLLabelElement,
  FileUploadLabelProps
>(({ children, ...props }, ref) => {
  const { fileUpload, context } = useFileUploadContext()
  const styles = useFileUploadStyles()

  const chooseFileText = useMemo(
    () => `Choose file${context.maxFiles !== 1 ? 's' : ''}`,
    [context.maxFiles],
  )

  const mergedProps = mergeProps(
    fileUpload.labelProps,
    {
      onClick: (event) => {
        // Required to prevent file dialog from opening twice when clicking on the label
        // As the event bubbles to the dropzone, which also opens the file dialog
        return event.stopPropagation()
      },
    },
    // @ts-expect-error types are not correct
    props,
  )

  if (fileUpload.dragging) {
    return null
  }
  if (children && typeof children !== 'string') {
    return children
  }

  return (
    <chakra.label __css={styles.label} {...mergedProps} ref={ref}>
      {children || (
        <>
          <Link colorScheme="neutral" isDisabled={context.disabled}>
            {chooseFileText}
          </Link>
          {context.allowDrop !== false ? ' or drag and drop here' : ''}
        </>
      )}
    </chakra.label>
  )
})

FileUploadLabel.displayName = 'FileUploadLabel'
