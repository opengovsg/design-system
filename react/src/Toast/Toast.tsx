import { useMemo } from 'react'
import ReactMarkdown from 'react-markdown'
import {
  Alert,
  AlertDescription,
  AlertTitle,
  Box,
  CloseButton,
  Icon,
  useMultiStyleConfig,
  UseToastOptions,
} from '@chakra-ui/react'

import { useMdComponents } from '~/hooks/useMdComponents'
import { BxsCheckCircle, BxsErrorCircle, BxX } from '~/icons'

export type ToastStatus = 'danger' | 'success' | 'warning'

export interface ToastProps
  extends Omit<
    UseToastOptions,
    'duration' | 'position' | 'render' | 'status' | 'variant'
  > {
  /**
   * The status variant of the toast.
   */
  status: ToastStatus
  /**
   * RenderProps that chakra passes to all custom components that uses the
   * render function
   */
  onClose: () => void
  /**
   * Whether markdown is enabled for rendering strings in toast.
   * Defaults to `true`.
   */
  useMarkdown?: boolean
}

export const Toast = ({
  useMarkdown = true,
  status,
  title,
  id,
  description,
  isClosable,
  onClose,
  onCloseComplete,
}: ToastProps): JSX.Element => {
  const styles = useMultiStyleConfig('Toast', {
    variant: status,
  })

  const StatusIcon = useMemo(
    () => (status === 'success' ? BxsCheckCircle : BxsErrorCircle),
    [status],
  )

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
          <AlertTitle>{titleComponent}</AlertTitle>
          <AlertDescription>{descriptionComponent}</AlertDescription>
        </Box>
        {isClosable && (
          <CloseButton
            variant="clear"
            colorScheme="secondary"
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
