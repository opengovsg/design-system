/**
 * This component exposes context values to external children, if needed.
 * @example Can be used to display accepted files or hide the dropzone when there is already a file attached.
 */
import type { ReactNode } from 'react'

import {
  FileUploadProviderProps,
  useFileUploadContext,
} from './FileUploadProvider'

export interface FileUploadContextProps {
  children: (
    exposedContextProps: FileUploadProviderProps['fileUpload'],
  ) => ReactNode
}

export const FileUploadContext = (props: FileUploadContextProps) => {
  const { fileUpload } = useFileUploadContext()

  return props.children(fileUpload)
}
