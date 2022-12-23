import type { AttachmentProps } from '../Attachment'

/**
 * Checks whether the given file extension is valid against the list of valid
 * extensions.
 *
 * @param ext the file extension to check
 * @return `true` if the file extension is invalid, otherwise `false`.
 */
export const isInvalidFileExtension = (
  ext: string,
  accept: AttachmentProps['accept'],
): boolean => {
  // Every extension is valid if accept array is undefined/empty.
  if (!accept) return false
  return !accept.includes(ext.toLowerCase())
}
