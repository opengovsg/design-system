import { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import {
  Alert,
  AlertDescription,
  AlertStatus,
  AlertTitle,
  Box,
  CloseButton,
  Icon,
  useMultiStyleConfig,
  UseToastOptions,
} from '@chakra-ui/react'

import { useMdComponents } from '~/hooks/useMdComponents'
import { BxsCheckCircle, BxsErrorCircle, BxsInfoCircle, BxX } from '~/icons'

import { SpinnerIcon } from '..'

// Alias for convenience
export type ToastStatus = AlertStatus

export interface ToastProps
  extends Omit<
    UseToastOptions,
    'duration' | 'position' | 'render' | 'variant'
  > {
  /**
   * RenderProps that chakra passes to all custom components that uses the
   * render function
   */
  onClose?: () => void
  /**
   * Whether markdown is enabled for rendering strings in toast.
   * Defaults to `true`.
   */
  useMarkdown?: boolean
}

const STATUS_TO_COLOR_SCHEME: Record<ToastStatus, string> = {
  success: 'success',
  error: 'error',
  warning: 'warning',
  info: 'main',
  loading: 'main',
}

const STATUS_TO_ICON = {
  success: BxsCheckCircle,
  error: BxsErrorCircle,
  warning: BxsErrorCircle,
  info: BxsInfoCircle,
  loading: SpinnerIcon,
}

export const Toast = ({
  useMarkdown = true,
  status = 'success',
  title,
  id,
  description,
  isClosable,
  onClose,
  onCloseComplete,
  ...toastStyleProps
}: ToastProps): JSX.Element => {
  const styles = useMultiStyleConfig('Toast', {
    colorScheme: STATUS_TO_COLOR_SCHEME[status],
    ...toastStyleProps,
  })

  const StatusIcon = useMemo(() => {
    return STATUS_TO_ICON[status]
  }, [status])

  const mdComponents = useMdComponents(styles)

  const descriptionComponent = useMemo(() => {
    // ReactMarkdown requires children to be of string type. If description is
    // not a string, return description as is.
    if (!description || !useMarkdown || typeof description !== 'string')
      return description
    return (
      <ReactMarkdown components={mdComponents}>{description}</ReactMarkdown>
    )
  }, [description, mdComponents, useMarkdown])

  const titleComponent = useMemo(() => {
    // ReactMarkdown requires children to be of string type. If title is not a
    // string, return title as is.
    if (!title || !useMarkdown || typeof title !== 'string') return title

    return <ReactMarkdown components={mdComponents}>{title}</ReactMarkdown>
  }, [title, mdComponents, useMarkdown])

  return (
    <Box sx={styles.wrapper}>
      <Alert sx={styles.container} id={String(id)} aria-live="assertive">
        <Icon sx={styles.icon} as={StatusIcon} />
        <Box sx={styles.content}>
          <AlertTitle sx={styles.title}>{titleComponent}</AlertTitle>
          <AlertDescription sx={styles.description}>
            {descriptionComponent}
          </AlertDescription>
        </Box>
        {isClosable && (
          <CloseButton
            variant="clear"
            colorScheme="neutral"
            children={<BxX aria-hidden="true" />}
            onClick={() => {
              onClose?.()
              onCloseComplete?.()
            }}
            __css={styles.close}
          />
        )}
      </Alert>
    </Box>
  )
}
