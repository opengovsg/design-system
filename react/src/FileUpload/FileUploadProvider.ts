import { createContext } from '~/utils/createContext'

import { UseFileUploadProps, UseFileUploadReturn } from './useFileUpload'

export interface FileUploadPassthroughProps {
  /**
   * If provided, the image preview will be shown in the given size variant.
   */
  imagePreview?: 'small' | 'large'
}

export interface FileUploadProviderProps extends FileUploadPassthroughProps {
  fileUpload: UseFileUploadReturn
  context: UseFileUploadProps
}

export const [FileUploadProvider, useFileUploadContext] =
  createContext<FileUploadProviderProps>({
    name: 'FileUploadContext',
    hookName: 'useFileUploadContext',
    providerName: '<FileUploadProvider />',
  })
