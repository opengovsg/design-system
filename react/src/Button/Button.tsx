import {
  Box,
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  forwardRef,
  IconProps,
} from '@chakra-ui/react'

import { Spinner } from '~/Spinner'
import { ThemeButtonVariant } from '~/theme/components/Button'
import { ThemeColorScheme } from '~/theme/foundations/colours'

type ButtonColorScheme = 'main' | 'success' | 'critical'
export interface ButtonProps extends ChakraButtonProps {
  /**
   * The variant of the button.
   */
  variant?: ThemeButtonVariant

  /**
   * Specifies whether the button is full-width.
   * If so, set button width to 100%, height to auto and padding to 15px
   */
  isFullWidth?: boolean

  /**
   * Loading spinner font size. Defaults to `1.5rem`.
   */
  spinnerFontSize?: IconProps['fontSize']

  /**
   * Color scheme of button.
   */
  colorScheme?: ThemeColorScheme | ButtonColorScheme
}

export const Button = forwardRef<ButtonProps, 'button'>(
  (
    {
      children,
      spinnerFontSize,
      isFullWidth,
      textStyle = 'subhead-1',
      ...props
    },
    ref,
  ) => {
    return (
      <ChakraButton
        ref={ref}
        spinner={<Spinner fontSize={spinnerFontSize ?? '1.5rem'} />}
        {...props}
        // 15px due to 1px border
        {...(isFullWidth ? { w: '100%', p: '15px', h: 'auto' } : {})}
      >
        <Box textStyle={textStyle}>{children}</Box>
      </ChakraButton>
    )
  },
)
