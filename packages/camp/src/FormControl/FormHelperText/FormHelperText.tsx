import { useMemo } from 'react'
import {
  FormHelperText as ChakraFormHelperText,
  FormHelperTextProps as ChakraFormHelperTextProps,
  Icon,
  ThemingProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'
import merge from 'lodash/merge'

import { BxsCheckCircle } from '~/icons'

export interface FormHelperTextProps extends ChakraFormHelperTextProps {
  /**
   * Variant of input message, determines the styling.
   */
  variant?: ThemingProps<'Form'>['variant']
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

  const mergedStyles = useMemo(
    () => merge({}, styles.helperText, props.sx),
    [props.sx, styles.helperText],
  )
  return (
    <ChakraFormHelperText {...props} sx={mergedStyles}>
      {props.variant === 'success' && (
        <Icon aria-hidden as={BxsCheckCircle} sx={styles.icon} />
      )}
      {children}
    </ChakraFormHelperText>
  )
}
