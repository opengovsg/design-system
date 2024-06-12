import { forwardRef } from 'react'
import { As, Icon } from '@chakra-ui/react'

import { BxsCloudUpload } from '~/icons'

import { useFileUploadStyles } from '../FileUploadStyleContext'

export interface FileUploadDropzoneIconProps {
  icon?: As
}

export const FileUploadDropzoneIcon = forwardRef<
  'svg',
  FileUploadDropzoneIconProps
>(({ icon, ...props }, ref) => {
  const styles = useFileUploadStyles()
  return (
    <Icon
      aria-hidden
      __css={styles.dropzoneIcon}
      as={icon ?? BxsCloudUpload}
      ref={ref}
      {...props}
    />
  )
})
