import { useCallback, useRef } from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: any[]) => unknown

type Options = {
  /**
   * Whether to use flushSync or not
   */
  sync?: boolean
}

/**
 * Returns a memoized callback that will flushSync the callback if sync is true
 */
export function useEvent<T extends AnyFunction>(
  callback: T | undefined,
  opts: Options = {},
): T {
  const { sync = false } = opts

  const callbackRef = useLatestRef(callback)

  return useCallback(
    (...args: unknown[]) => {
      if (sync) return queueMicrotask(() => callbackRef.current?.(...args))
      return callbackRef.current?.(...args)
    },
    [sync, callbackRef],
  ) as T
}

function useLatestRef<T>(value: T) {
  const ref = useRef(value)
  ref.current = value
  return ref
}
