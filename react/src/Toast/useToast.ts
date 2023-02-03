import { createElement } from 'react'
import {
  CreateToastFnReturn,
  useToast as useChakraToast,
  UseToastOptions as ChakraUseToastOptions,
} from '@chakra-ui/react'
import { omit } from 'lodash'

import type { WithReactMarkdownSsr } from '~/types/WithSsr'

import { Toast } from './Toast'

interface UseToastOptions extends ChakraUseToastOptions, WithReactMarkdownSsr {}

export const useToast = ({
  status = 'success',
  duration = 6000,
  position = 'top',
  containerStyle: containerStyleProps,
  ssr,
  mdIsExternalLinkFn,
  ...initialProps
}: UseToastOptions = {}): CreateToastFnReturn => {
  const initialToastProps = omit(initialProps, ['onClose', 'status'])

  return useChakraToast({
    ...initialToastProps,
    containerStyle: {
      maxWidth: 'initial',
      ...containerStyleProps,
    },
    status,
    duration,
    position,
    render: (props) => {
      return createElement(Toast, { ...props, ssr, mdIsExternalLinkFn })
    },
  })
}
