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
import { FileUploadRoot } from './FileUploadRoot'

export type { FileUploadDropzoneProps } from './FileUploadDropzone/FileUploadDropzone'
export type { FileUploadRootProps } from './FileUploadRoot'

export const FileUpload = () => {
  return null
}

FileUpload.Root = FileUploadRoot
FileUpload.Dropzone = FileUploadDropzone
FileUpload.DropzoneIcon = FileUploadDropzoneIcon
FileUpload.Label = FileUploadLabel
FileUpload.DraggingLabel = FileUploadDraggingLabel
FileUpload.HiddenInput = FileUploadHiddenInput
FileUpload.ItemGroup = FileUploadItemGroup
FileUpload.Context = FileUploadContext
FileUpload.Item = FileUploadItem
FileUpload.ItemPreview = FileUploadItemPreview
FileUpload.ItemName = FileUploadItemName
FileUpload.ItemSizeText = FileUploadItemSizeText
FileUpload.ItemPreviewImage = FileUploadItemPreviewImage
FileUpload.ItemDeleteTrigger = FileUploadItemDeleteTrigger
