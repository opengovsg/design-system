import { useCallback, useMemo } from 'react'
import {
  DropzoneProps,
  ErrorCode,
  FileRejection,
  useDropzone,
} from 'react-dropzone'
import {
  Box,
  forwardRef,
  Stack,
  Text,
  ThemingProps,
  useFormControl,
  UseFormControlProps,
  useMergeRefs,
  useMultiStyleConfig,
} from '@chakra-ui/react'
import { dataAttr } from '@chakra-ui/utils'
import { isNil, omit } from 'lodash'
import type { Promisable } from 'type-fest'

import { getErrorMessage } from './utils/getErrorMessage'
import { AttachmentStylesProvider } from './AttachmentContext'
import { AttachmentDropzone } from './AttachmentDropzone'
import { AttachmentError } from './AttachmentError'
import { AttachmentFileInfo } from './AttachmentFileInfo'
import { getReadableFileSize } from './utils'

export interface AttachmentProps extends UseFormControlProps<HTMLElement> {
  /**
   * Callback to be invoked when the file is attached or removed.
   */
  onChange: (files: File[]) => void

  /**
   * If exists, callback to be invoked when file has errors.
   */
  onError?: (errMsg: string) => void
  /**
   * Current value of the input.
   */
  value: File[]
  /**
   * Name of the input.
   */
  name: string
  /**
   * One or more
   * [unique file type specifiers](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers)
   * describing file types to allow
   */
  accept?: DropzoneProps['accept']
  /**
   * If exists, files cannot be attached if they are above the maximum size
   * (in bytes).
   */
  maxSize?: DropzoneProps['maxSize']
  /**
   * Boolean flag on whether to show the file size helper message below the
   * input.
   */
  showFileSize?: boolean

  /**
   * If provided, the image preview will be shown in the given size variant.
   */
  imagePreview?: 'small' | 'large'

  /**
   * Color scheme of the component.
   */
  colorScheme?: ThemingProps<'Attachment'>['colorScheme']

  /**
   * If provided, the file will be validated against the given function.
   * If the function returns a string, the file will be considered invalid
   * and the string will be used as the error message.
   * If the function returns null, the file will be considered valid.
   */
  onFileValidation?: (file: File) => Promisable<string | null>

  /**
   * Boolean flag on whether to support multiple file upload.
   */
  multiple?: boolean

  /**
   * If provided, files that have been rejected will be displayed along with the reasons for rejection.
   */
  rejections?: FileRejection[]

  /**
   * If exists, callback to be invoked when file has errors.
   */
  onRejection?: (rejections: FileRejection[]) => void
}

export const Attachment = forwardRef<AttachmentProps, 'div'>(
  (
    {
      onChange,
      onError,
      maxSize,
      showFileSize,
      accept,
      value,
      name,
      colorScheme,
      imagePreview,
      onFileValidation,
      multiple,
      rejections,
      onRejection,
      ...props
    },
    ref,
  ) => {
    // Merge given props with any form control props, if they exist.
    const inputProps = useFormControl(props)
    // id to set on the rendered max size FormHelperText component.
    const maxSizeTextId = useMemo(() => `${name}-max-size`, [name])

    const readableMaxSize = useMemo(
      () => (maxSize ? getReadableFileSize(maxSize) : undefined),
      [maxSize],
    )

    const showMaxSize = useMemo(
      () => value.length === 0 && showFileSize && readableMaxSize,
      [value, readableMaxSize, showFileSize],
    )

    const ariaDescribedBy = useMemo(() => {
      const describedByIds = new Set<string>()
      // Must be in this order so the screen reader reads out something coherent.
      // 1. Label text (if available)
      // 2. Initial describedby text (if available)
      // 3. Max size text (if prop is true)
      if (inputProps.id) {
        describedByIds.add(`${inputProps.id}-label`)
      }
      inputProps['aria-describedby']
        ?.split(' ')
        .map((id) => describedByIds.add(id))
      if (showMaxSize) {
        describedByIds.add(maxSizeTextId)
      }

      // Remove helptext, since label should already consist of the text
      describedByIds.delete(`${inputProps.id}-helptext`)

      return Array.from(describedByIds).filter(Boolean).join(' ').trim()
    }, [inputProps, maxSizeTextId, showMaxSize])

    const fileValidator = useCallback<NonNullable<DropzoneProps['validator']>>(
      (file) => {
        if (maxSize && file.size > maxSize) {
          return {
            code: ErrorCode.FileTooLarge,
            message: `Failed to upload. This file exceeds the size limit. Please upload a file that is under ${readableMaxSize}`,
          }
        }
        return null
      },
      [maxSize, readableMaxSize],
    )

    const handleFileDrop = useCallback<NonNullable<DropzoneProps['onDrop']>>(
      async (acceptedFiles, rejectedFiles) => {
        const validatedFiles: File[] = []
        const rejects: FileRejection[] = [...rejectedFiles]
        await Promise.all(
          acceptedFiles.map(async (file) => {
            const fileValidationErrorMessage = await onFileValidation?.(file)
            if (isNil(fileValidationErrorMessage)) {
              validatedFiles.push(file)
            } else {
              rejects.push({
                file,
                errors: [
                  {
                    code: 'file-validation-error',
                    message: fileValidationErrorMessage,
                  },
                ],
              })
            }
          }),
        )
        if (rejects.length > 0) {
          onError?.(getErrorMessage(rejects[0]))
        }
        onRejection?.(rejects)
        onChange(validatedFiles)
      },
      [onChange, onError, onRejection, onFileValidation],
    )

    const { getRootProps, getInputProps, isDragActive, rootRef } = useDropzone({
      multiple,
      accept,
      disabled: inputProps.disabled,
      validator: fileValidator,
      noKeyboard: inputProps.readOnly || value.length > 0,
      noClick: inputProps.readOnly || value.length > 0,
      noDrag: inputProps.readOnly || value.length > 0,
      onDrop: handleFileDrop,
    })

    const mergedRefs = useMergeRefs(rootRef, ref)

    const styles = useMultiStyleConfig('Attachment', {
      isDragActive,
      colorScheme,
      imagePreview,
    })

    const handleRemoveFile = useCallback(
      (target: File) => {
        if (value.length === 0) {
          rootRef.current?.focus()
        } else {
          const attachedFiles = value.filter((file) => file !== target)
          onChange(attachedFiles)
        }
      },
      [onChange, rootRef, value],
    )

    const handleDismissError = useCallback(
      (target: FileRejection) => {
        if (rejections && rejections.length > 0) {
          const rejects = rejections.filter((reject) => reject !== target)
          onRejection?.(rejects)
        }
      },
      [onRejection, rejections],
    )

    // Bunch of memoization to avoid unnecessary re-renders.
    const processedRootProps = useMemo(() => {
      return getRootProps({
        // Root div does not need id prop, prevents duplicate ids.
        ...omit(inputProps, 'id'),
        // Bunch of extra work to prevent field from being used when in readOnly
        // state.
        onKeyDown: (e) => {
          if (inputProps.readOnly) {
            e.stopPropagation()
            return
          }
        },
        'aria-describedby': ariaDescribedBy,
      })
    }, [ariaDescribedBy, getRootProps, inputProps])

    const processedInputProps = useMemo(() => {
      return getInputProps({
        name,
        ...inputProps,
      })
    }, [getInputProps, inputProps, name])

    return (
      <AttachmentStylesProvider value={styles}>
        <Stack gap="1rem">
          {rejections && rejections.length > 0
            ? rejections.map((fileRejection, index) => (
                <AttachmentError
                  key={`${fileRejection.file.name}${fileRejection.file.size}${index}`}
                  fileRejection={fileRejection}
                  handleDismiss={handleDismissError}
                />
              ))
            : null}
          {value && value.length > 0 ? (
            value.map((file, index) => (
              <AttachmentFileInfo
                key={`${file.name}${file.size}${index}`}
                file={file}
                imagePreview={imagePreview}
                isDisabled={inputProps.disabled}
                isReadOnly={inputProps.readOnly}
                handleRemoveFile={() => handleRemoveFile(file)}
              />
            ))
          ) : (
            <Box
              {...processedRootProps}
              ref={mergedRefs}
              data-active={dataAttr(isDragActive)}
              __css={styles.dropzone}
            >
              <AttachmentDropzone
                isDragActive={isDragActive}
                inputProps={processedInputProps}
              />
            </Box>
          )}
        </Stack>
        {showMaxSize ? (
          <Text
            id={maxSizeTextId}
            color="base.content.medium"
            mt="0.5rem"
            textStyle="body-2"
          >
            You can upload multiple files at once. Maximum file size:{' '}
            {readableMaxSize}
          </Text>
        ) : null}
      </AttachmentStylesProvider>
    )
  },
)

Attachment.displayName = 'Attachment'
