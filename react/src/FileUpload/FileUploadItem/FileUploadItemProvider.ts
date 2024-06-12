import type { FileError, ItemProps } from '@zag-js/file-upload'

import { createContext } from '~/utils/createContext'

export interface UseFileUploadItemContext extends ItemProps {
  errors?: FileError[]
}

export const [FileUploadItemProvider, useFileUploadItemContext] =
  createContext<UseFileUploadItemContext>({
    name: 'FileUploadItemContext',
    hookName: 'useFileUploadItemContext',
    providerName: '<FileUploadItemProvider />',
  })
