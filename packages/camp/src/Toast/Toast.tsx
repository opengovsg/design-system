import { useMemo } from 'react'
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

import { BxsCheckCircle, BxsErrorCircle, BxsInfoCircle, BxX } from '~/icons'
import { SpinnerIcon } from '~/Spinner'

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

  return (
    <Box sx={styles.wrapper}>
      <Alert sx={styles.container} id={String(id)} aria-live="assertive">
        <Icon sx={styles.icon} as={StatusIcon} />
        <Box sx={styles.content}>
          <AlertTitle sx={styles.title}>{title}</AlertTitle>
          <AlertDescription sx={styles.description}>
            {description}
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
