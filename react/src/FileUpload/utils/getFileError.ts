import { Context, FileError } from '@zag-js/file-upload'

import { getFileExtension } from './getFileExtension'
import { getReadableFileSize } from './getReadableFizeSize'

type GetFileErrorArgs = {
  error: FileError
  file: File
  context: Pick<Context, 'maxFiles' | 'maxFileSize' | 'minFileSize'>
}

export const getFileError = ({
  error,
  file,
  context: { maxFiles, maxFileSize, minFileSize },
}: GetFileErrorArgs) => {
  switch (error) {
    case 'FILE_INVALID_TYPE': {
      const fileExt = getFileExtension(file.name)
      return `Your file's extension ending in *${fileExt} is not allowed`
    }
    case 'TOO_MANY_FILES': {
      return `You can only upload ${maxFiles} file${maxFiles === 1 ? '' : 's'} in this input`
    }
    case 'FILE_TOO_LARGE': {
      let errorMessage = 'This file exceeds the size limit.'
      if (maxFileSize !== undefined) {
        errorMessage += ` Please upload a file that is under ${getReadableFileSize(maxFileSize)}`
      }
      return errorMessage
    }
    case 'FILE_TOO_SMALL': {
      let errorMessage = 'This file is too small.'
      if (minFileSize !== undefined) {
        errorMessage += ` Please upload a file that is at least ${getReadableFileSize(minFileSize)}`
      }
      return errorMessage
    }
    default: {
      const expect: never = error
      return `Unexpected error: ${expect}`
    }
  }
}
