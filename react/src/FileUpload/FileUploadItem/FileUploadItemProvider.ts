import type { ItemProps } from '@zag-js/file-upload'

import { createContext } from '~/utils/createContext'

export interface UseFileUploadItemContext extends ItemProps {}

export const [FileUploadItemProvider, useFileUploadItemContext] =
  createContext<UseFileUploadItemContext>({
    name: 'FileUploadItemContext',
    hookName: 'useFileUploadItemContext',
    providerName: '<FileUploadItemProvider />',
  })
