import { ErrorCode, FileRejection } from 'react-dropzone'

import { getFileExtension } from './getFileExtension'

export const getErrorMessage = (rejectedFile: FileRejection): string => {
  const firstError = rejectedFile.errors[0]
  let errorMessage
  switch (firstError.code) {
    case ErrorCode.FileInvalidType: {
      const fileExt = getFileExtension(rejectedFile.file.name)
      errorMessage = `Your file's extension ending in *${fileExt} is not allowed`
      break
    }
    case ErrorCode.TooManyFiles: {
      errorMessage = 'You can only upload a single file in this input'
      break
    }
    default:
      errorMessage = firstError.message
  }
  return errorMessage
}
