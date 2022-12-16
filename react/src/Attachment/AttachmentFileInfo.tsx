import { useEffect, useMemo, useState } from 'react'
import {
  Flex,
  forwardRef,
  Image,
  Stack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react'
import { dataAttr } from '@chakra-ui/utils'

import { IconButton } from '~/IconButton'
import { BxTrash } from '~/icons'

import { getReadableFileSize } from './utils/getReadableFileSize'
import { useAttachmentStyles } from './AttachmentContext'

export interface AttachmentFileInfoProps {
  file: File
  handleRemoveFile: () => void
  imagePreview?: 'small' | 'large'
  isDisabled?: boolean
  isReadOnly?: boolean
}

export const AttachmentFileInfo = forwardRef<AttachmentFileInfoProps, 'div'>(
  ({ file, handleRemoveFile, imagePreview, isDisabled, isReadOnly }, ref) => {
    const [previewSrc, setPreviewSrc] = useState('')
    const styles = useAttachmentStyles()
    const readableFileSize = useMemo(
      () => getReadableFileSize(file.size),
      [file.size],
    )

    useEffect(() => {
      let objectUrl = ''
      // create the preview
      if (file.type.startsWith('image/')) {
        objectUrl = URL.createObjectURL(file)
        setPreviewSrc(objectUrl)
      }

      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl)
    }, [file])

    return (
      <Flex aria-disabled={isDisabled} ref={ref} sx={styles.fileInfoContainer}>
        <VisuallyHidden>
          File attached: {file.name} with file size of {readableFileSize}
        </VisuallyHidden>
        {imagePreview && previewSrc && (
          <Image
            alt="uploaded image preview"
            sx={styles.fileInfoImage}
            src={previewSrc}
          />
        )}
        <Flex sx={styles.fileInfo}>
          <Stack spacing="0.25rem" flexDir="column" aria-hidden>
            <Text>{file.name}</Text>
            <Text
              data-disabled={dataAttr(isDisabled)}
              sx={styles.fileInfoDescription}
            >
              {readableFileSize}
            </Text>
          </Stack>
          <IconButton
            variant="clear"
            colorScheme="critical"
            aria-label="Remove file"
            icon={<BxTrash />}
            onClick={handleRemoveFile}
            isDisabled={isDisabled || isReadOnly}
          />
        </Flex>
      </Flex>
    )
  },
)
