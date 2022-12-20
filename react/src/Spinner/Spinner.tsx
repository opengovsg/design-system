import { Flex, FlexProps, IconProps, VisuallyHidden } from '@chakra-ui/react'

import { SpinnerIcon } from './SpinnerIcon'

interface SpinnerProps extends FlexProps {
  /**
   * The color of the spinner
   */
  color?: string
  /**
   * The speed of the spinner.
   * @example
   * ```jsx
   * <Spinner speed="0.2s"/>
   * ```
   */
  speed?: string
  /**
   * For accessibility, it is important to add a fallback loading text.
   * This text will be visible to screen readers.
   */
  label?: string

  /**
   * Font size of the spinner.
   */
  fontSize?: IconProps['fontSize']
}
export const Spinner = ({
  speed = '2.5s',
  color = 'inherit',
  label = 'Loading...',
  fontSize = '1rem',
  ...flexProps
}: SpinnerProps): JSX.Element => {
  return (
    <Flex color={color} align="center" {...flexProps}>
      {label && <VisuallyHidden>{label}</VisuallyHidden>}
      <SpinnerIcon speed={speed} fontSize={fontSize} />
    </Flex>
  )
}
