import { forwardRef } from 'react'
import { chakra, type HTMLChakraProps } from '@chakra-ui/react'

import { useFileUploadStyles } from './FileUploadStyleContext'

export interface FileUploadHelperTextProps extends HTMLChakraProps<'div'> {}

/**
 * Helper text at the bottom of the file upload component.
 */
export const FileUploadHelperText = forwardRef<
  HTMLDivElement,
  FileUploadHelperTextProps
>((props, ref) => {
  const { children, ...rest } = props
  const styles = useFileUploadStyles()

  return (
    <chakra.div __css={styles.helperText} {...rest} ref={ref}>
      {children}
    </chakra.div>
  )
})

FileUploadHelperText.displayName = 'FileUploadHelperText'
