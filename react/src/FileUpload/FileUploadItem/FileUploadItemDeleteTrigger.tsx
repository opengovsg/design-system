import { forwardRef } from 'react'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'
import { mergeProps } from '@zag-js/react'

import { IconButton } from '~/IconButton'
import { BxTrash } from '~/icons'

import { useFileUploadContext } from '../FileUploadProvider'
import { useFileUploadStyles } from '../FileUploadStyleContext'

import { useFileUploadItemContext } from './FileUploadItemProvider'

export interface FileUploadItemDeleteTriggerProps
  extends HTMLChakraProps<'button'> {}

export const FileUploadItemDeleteTrigger = forwardRef<
  HTMLButtonElement,
  FileUploadItemDeleteTriggerProps
>(({ children, ...props }, ref) => {
  const { fileUpload } = useFileUploadContext()
  const itemProps = useFileUploadItemContext()
  const styles = useFileUploadStyles()
  const mergedProps = mergeProps(
    fileUpload.getItemDeleteTriggerProps(itemProps),
    // @ts-expect-error types are not correct
    props,
  )

  if (children) {
    return (
      <chakra.button
        __css={styles.itemDeleteTrigger}
        {...mergedProps}
        ref={ref}
      >
        {children}
      </chakra.button>
    )
  }

  return (
    <IconButton
      sx={styles.itemDeleteTrigger}
      variant="clear"
      colorScheme="critical"
      icon={<BxTrash />}
      {...mergedProps}
      aria-label={mergedProps['aria-label'] || 'Remove file'}
      ref={ref}
    />
  )
})

FileUploadItemDeleteTrigger.displayName = 'FileUploadItemDeleteTrigger'
