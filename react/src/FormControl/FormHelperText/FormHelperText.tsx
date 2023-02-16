import {
  FormHelperText as ChakraFormHelperText,
  FormHelperTextProps as ChakraFormHelperTextProps,
  Icon,
  useMultiStyleConfig,
} from '@chakra-ui/react'

import { BxsCheckCircle } from '~/icons'

export interface FormHelperTextProps extends ChakraFormHelperTextProps {
  /**
   * Variant of input message, determines the styling. Defaults to `info`.
   */
  variant?: 'success' | 'info'
}

/**
 * @precondition This element should be instantiated as a child of ChakraUI's `FormControl` element.
 *
 * An assistive component that conveys additional guidance about the field, such
 * as how it will be used and what types in values should be provided.
 */
export const FormHelperText = ({
  children,
  ...props
}: FormHelperTextProps): JSX.Element => {
  const styles = useMultiStyleConfig('Form', props)

  return (
    <ChakraFormHelperText {...props} sx={styles.helperText}>
      {props.variant === 'success' && (
        <Icon aria-hidden as={BxsCheckCircle} sx={styles.icon} />
      )}
      {children}
    </ChakraFormHelperText>
  )
}
