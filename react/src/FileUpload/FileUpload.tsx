import { FileUploadDraggingLabel } from './FileUploadDropzone/FileUploadDraggingLabel'
import { FileUploadDropzone } from './FileUploadDropzone/FileUploadDropzone'
import { FileUploadDropzoneIcon } from './FileUploadDropzone/FileUploadDropzoneIcon'
import { FileUploadLabel } from './FileUploadDropzone/FileUploadLabel'
import { FileUploadItem } from './FileUploadItem/FileUploadItem'
import { FileUploadItemDeleteTrigger } from './FileUploadItem/FileUploadItemDeleteTrigger'
import { FileUploadItemErrorText } from './FileUploadItem/FileUploadItemErrorText'
import { FileUploadItemName } from './FileUploadItem/FileUploadItemName'
import { FileUploadItemPreview } from './FileUploadItem/FileUploadItemPreview'
import { FileUploadItemPreviewImage } from './FileUploadItem/FileUploadItemPreviewImage'
import { FileUploadItemSizeText } from './FileUploadItem/FileUploadItemSizeText'
import { getFileError } from './utils/getFileError'
import { FileUploadContainer } from './FileUploadContainer'
import { FileUploadContext } from './FileUploadContext'
import { FileUploadErrorText } from './FileUploadErrorText'
import { FileUploadHelperText } from './FileUploadHelperText'
import { FileUploadHiddenInput } from './FileUploadHiddenInput'
import { FileUploadItemGroup } from './FileUploadItemGroup'
import { FileUploadMaxSizeHelperText } from './FileUploadMaxSizeHelperText'
import { FileUploadRoot, FileUploadRootProps } from './FileUploadRoot'

export type { FileUploadDropzoneProps } from './FileUploadDropzone/FileUploadDropzone'
export type { FileUploadRootProps } from './FileUploadRoot'

export interface FileUploadProps extends FileUploadRootProps {
  /**
   * Boolean flag on whether to show the file size helper message below the
   * input.
   * @default true
   */
  showFileSize?: boolean

  /**
   * If exists, callback to be invoked with the error string when file has errors.
   */
  onError?: (error: string) => void

  /**
   * The maximum number of files.
   * @default 1
   */
  maxFiles?: number
}

/**
 * Default implementation of FileUpload component. For more control over the
 * layout, use the individual subcomponents exposed in `FileUpload.*`
 */
export const FileUpload = ({
  showFileSize = true,
  onError,
  maxFiles = 1,
  ...props
}: FileUploadProps) => {
  const handleFileRejection: FileUploadRootProps['onFileReject'] = (
    details,
  ) => {
    if (details.files.length === 0) return
    const firstError = details.files[0].errors[0]
    const errorMessage = getFileError({
      context: {
        maxFiles: maxFiles,
        maxFileSize: props.maxFileSize,
        minFileSize: props.minFileSize,
      },
      file: details.files[0].file,
      error: firstError,
    })
    props.onFileReject?.(details)
    onError?.(errorMessage)
  }

  return (
    <FileUploadRoot
      {...props}
      maxFiles={maxFiles}
      onFileReject={handleFileRejection}
    >
      <FileUploadContainer showFileSize={showFileSize} />
    </FileUploadRoot>
  )
}

FileUpload.Root = FileUploadRoot
FileUpload.Root.displayName = 'FileUpload.Root'
FileUpload.Dropzone = FileUploadDropzone
FileUpload.Dropzone.displayName = 'FileUpload.Dropzone'
FileUpload.DropzoneIcon = FileUploadDropzoneIcon
FileUpload.DropzoneIcon.displayName = 'FileUpload.DropzoneIcon'
FileUpload.Label = FileUploadLabel
FileUpload.Label.displayName = 'FileUpload.Label'
FileUpload.DraggingLabel = FileUploadDraggingLabel
FileUpload.DraggingLabel.displayName = 'FileUpload.DraggingLabel'
FileUpload.HiddenInput = FileUploadHiddenInput
FileUpload.HiddenInput.displayName = 'FileUpload.HiddenInput'
FileUpload.ItemGroup = FileUploadItemGroup
FileUpload.ItemGroup.displayName = 'FileUpload.ItemGroup'
FileUpload.Context = FileUploadContext
// @ts-expect-error displayName type missing
FileUpload.Context.displayName = 'FileUpload.Context'
FileUpload.Item = FileUploadItem
FileUpload.Item.displayName = 'FileUpload.Item'
FileUpload.ItemPreview = FileUploadItemPreview
FileUpload.ItemPreview.displayName = 'FileUpload.ItemPreview'
FileUpload.ItemName = FileUploadItemName
FileUpload.ItemName.displayName = 'FileUpload.ItemName'
FileUpload.ItemSizeText = FileUploadItemSizeText
FileUpload.ItemSizeText.displayName = 'FileUpload.ItemSizeText'
FileUpload.ItemPreviewImage = FileUploadItemPreviewImage
FileUpload.ItemPreviewImage.displayName = 'FileUpload.ItemPreviewImage'
FileUpload.ItemDeleteTrigger = FileUploadItemDeleteTrigger
FileUpload.ItemDeleteTrigger.displayName = 'FileUpload.ItemDeleteTrigger'

FileUpload.ItemErrorText = FileUploadItemErrorText
FileUpload.ItemErrorText.displayName = 'FileUpload.ItemErrorText'

FileUpload.ErrorText = FileUploadErrorText
FileUpload.ErrorText.displayName = 'FileUpload.ErrorText'

FileUpload.MaxSizeHelperText = FileUploadMaxSizeHelperText
FileUpload.MaxSizeHelperText.displayName = 'FileUpload.MaxSizeHelperText'

FileUpload.HelperText = FileUploadHelperText
FileUpload.HelperText.displayName = 'FileUpload.HelperText'
