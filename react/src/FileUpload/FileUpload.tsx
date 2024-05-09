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
