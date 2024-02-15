import { DropzoneInputProps, DropzoneState } from 'react-dropzone'
import { chakra, Icon, Text } from '@chakra-ui/react'

import { BxsCloudUpload } from '~/icons/BxsCloudUpload'
import { Link } from '~/Link'

import { useAttachmentStyles } from './AttachmentContext'

interface AttachmentDropzoneProps {
  inputProps: DropzoneInputProps
  isDragActive: DropzoneState['isDragActive']
}

export const AttachmentDropzone = ({
  inputProps,
  isDragActive,
}: AttachmentDropzoneProps): JSX.Element => {
  const styles = useAttachmentStyles()
  const filePlural = inputProps.multiple ? 'files' : 'file'
  return (
    <>
      <chakra.input {...inputProps} data-testid={inputProps.name} />
      <Icon aria-hidden as={BxsCloudUpload} __css={styles.icon} />

      {isDragActive ? (
        <Text>Drop the file here ...</Text>
      ) : (
        <Text>
          <Link isDisabled={inputProps.disabled}>{`Choose ${filePlural}`}</Link>{' '}
          or drag and drop here
        </Text>
      )}
    </>
  )
}
