import { ReactNode } from 'react'

import { createContext } from '~/utils/createContext'

import { UseFileUploadProps, UseFileUploadReturn } from './useFileUpload'

export interface FileUploadPassthroughProps {
  /**
   * If provided, the image preview will be shown in the given size variant.
   */
  imagePreview?: 'small' | 'large'
  /**
   * If provided, dropzone label will be changed to the provided prop.
   */
  dropzoneLabel?: ReactNode
  /**
   * If provided, element rendered when file is being dragged over the element will be changed to the provided prop.
   */
  dropzoneDraggingLabel?: ReactNode
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
