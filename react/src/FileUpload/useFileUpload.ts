import { useId, useRef } from 'react'
import { type Api, connect, type Context, machine } from '@zag-js/file-upload'
import { normalizeProps, type PropTypes, useMachine } from '@zag-js/react'

import { useEvent } from '~/hooks/useEvent'

export interface UseFileUploadProps
  extends Omit<Context, 'dir' | 'getRootNode' | 'id'> {
  id?: string
}
export interface UseFileUploadReturn extends Api<PropTypes> {}

export const useFileUpload = (
  props: UseFileUploadProps = {},
): UseFileUploadReturn => {
  const initialContext: Context = {
    id: useId(),
    ...props,
  }

  const context: Context = {
    ...initialContext,
    onFileAccept: useEvent(props.onFileAccept),
    onFileReject: useEvent(props.onFileReject),
    onFileChange: useEvent(props.onFileChange, { sync: true }),
  }

  const [state, send] = useMachine(machine(initialContext), {
    context,
  })

  const apiRef = useRef<Api<PropTypes>>()
  const api = connect(state, send, normalizeProps)
  apiRef.current = api
  return api
}
