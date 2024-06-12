import { FileUploadDraggingLabel } from './FileUploadDropzone/FileUploadDraggingLabel'
import { FileUploadDropzone } from './FileUploadDropzone/FileUploadDropzone'
import { FileUploadDropzoneIcon } from './FileUploadDropzone/FileUploadDropzoneIcon'
import { FileUploadLabel } from './FileUploadDropzone/FileUploadLabel'
import { FileUploadItem } from './FileUploadItem/FileUploadItem'
import { FileUploadItemDeleteTrigger } from './FileUploadItem/FileUploadItemDeleteTrigger'
import { FileUploadItemName } from './FileUploadItem/FileUploadItemName'
import { FileUploadItemPreview } from './FileUploadItem/FileUploadItemPreview'
import { FileUploadItemPreviewImage } from './FileUploadItem/FileUploadItemPreviewImage'
import { FileUploadItemSizeText } from './FileUploadItem/FileUploadItemSizeText'
import { FileUploadContext } from './FileUploadContext'
import { FileUploadHiddenInput } from './FileUploadHiddenInput'
import { FileUploadItemGroup } from './FileUploadItemGroup'
import { FileUploadMaxSizeHelperText } from './FileUploadMaxSizeHelperText'
import { useFileUploadContext } from './FileUploadProvider'

export interface FileUploadContainerProps {
  /**
   * Boolean flag on whether to show the file size helper message below the
   * input.
   */
  showFileSize?: boolean
}

/**
 * Contains the default implementation of file upload component.
 */
export const FileUploadContainer = ({
  showFileSize,
}: FileUploadContainerProps): JSX.Element => {
  const {
    context: { maxFiles },
    fileUpload,
  } = useFileUploadContext()
  const singular = maxFiles === 1
  const currentFiles = fileUpload.acceptedFiles.length

  const showDropzone = !singular || currentFiles === 0

  return (
    <>
      {showDropzone && (
        <FileUploadDropzone>
          <FileUploadDropzoneIcon />
          <FileUploadLabel />
          <FileUploadDraggingLabel />
        </FileUploadDropzone>
      )}
      <FileUploadContext>
        {({ acceptedFiles }) =>
          acceptedFiles.length !== 0 && (
            <FileUploadItemGroup>
              {acceptedFiles.map((file, index) => (
                <FileUploadItem key={`${file.name}-${index}`} file={file}>
                  <FileUploadItemPreview type="image/*">
                    <FileUploadItemPreviewImage />
                  </FileUploadItemPreview>
                  <FileUploadItemName />
                  <FileUploadItemSizeText />
                  <FileUploadItemDeleteTrigger />
                </FileUploadItem>
              ))}
            </FileUploadItemGroup>
          )
        }
      </FileUploadContext>
      {showFileSize && <FileUploadMaxSizeHelperText />}
      <FileUploadHiddenInput />
    </>
  )
}
