import { useMemo } from 'react'
import { FileRejection } from 'react-dropzone'
import {
  Button,
  Flex,
  forwardRef,
  Icon,
  Stack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react'
import { dataAttr } from '@chakra-ui/utils'

import { BxCrossCircle } from '~/icons/BxCrossCircle'

import { getErrorMessage } from './utils/getErrorMessage'
import { useAttachmentStyles } from './AttachmentContext'
import { getReadableFileSize } from './utils'

export interface AttachmentErrorProps {
  fileRejection: FileRejection
  isDisabled?: boolean
  isReadOnly?: boolean
  handleDismiss: (fileRejection: FileRejection) => void
}

export const AttachmentError = forwardRef<AttachmentErrorProps, 'div'>(
  ({ fileRejection, isDisabled, isReadOnly, handleDismiss }, ref) => {
    const { file } = fileRejection
    const styles = useAttachmentStyles()

    const readableFileSize = useMemo(
      () => getReadableFileSize(file.size),
      [file.size],
    )

    return (
      <Flex
        aria-disabled={isDisabled}
        ref={ref}
        tabIndex={0}
        sx={{ ...styles.fileInfoContainer, maxHeight: 'fit-content' }}
      >
        <VisuallyHidden>
          Invalid file: {getErrorMessage(fileRejection)}
        </VisuallyHidden>
        <Flex sx={styles.fileInfo}>
          <Flex gap="0.5rem">
            <Icon as={BxCrossCircle} sx={styles.fileErrorIcon} />
            <Stack spacing="0.25rem" flexDir="column" aria-hidden>
              <Text sx={styles.fileInfoTitle}>{file.name}</Text>
              <Text
                data-disabled={dataAttr(isDisabled)}
                sx={styles.fileInfoDescription}
              >
                {readableFileSize}
              </Text>
              <Text sx={styles.fileErrorMessage}>
                {getErrorMessage(fileRejection)}
              </Text>
            </Stack>
          </Flex>
          <Button
            size="xs"
            variant="clear"
            aria-label="Dismiss error"
            onClick={() => handleDismiss(fileRejection)}
            isDisabled={isDisabled || isReadOnly}
          >
            Dismiss
          </Button>
        </Flex>
      </Flex>
    )
  },
)

AttachmentError.displayName = 'AttachmentError'
