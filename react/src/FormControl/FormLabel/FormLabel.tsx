import { FC, useMemo } from 'react'
import {
  Box,
  chakra,
  FormHelperText,
  FormLabel as ChakraFormLabel,
  FormLabelProps as ChakraFormLabelProps,
  forwardRef,
  HTMLChakraProps,
  Icon,
  Text,
  TextProps,
  ThemingProps,
  useFormControlContext,
  useMultiStyleConfig,
  VisuallyHidden,
} from '@chakra-ui/react'
import { merge } from 'lodash'

import { BxsHelpCircle } from '~/icons/BxsHelpCircle'
import { Tooltip } from '~/Tooltip'

export interface FormLabelProps extends ChakraFormLabelProps {
  /**
   * Question number to be prefixed before each label, if any.
   */
  questionNumber?: string
  /**
   * Tooltip text to be postfixed at the end of each label, if any.
   */
  tooltipText?: string
  /**
   * Description text to be shown below the label text, if any.
   */
  description?: string
  /**
   * Label text.
   */
  children: string
  /**
   * Whether form label is required. This is optional; if this prop is not
   * provided, the value from it's parent `FormContext` (if any) will be used.
   */
  isRequired?: boolean
}

/**
 * @preconditions Must be a child of Chakra's `FormControl` component.
 * Used to enhance the usability of form controls.
 *
 * It is used to inform users as to what information
 * is requested for a form field.
 *
 * ♿️ Accessibility: Every form field should have a form label.
 */
export const FormLabel = ({
  isRequired,
  tooltipText,
  questionNumber,
  description,
  children,
  size,
  ...labelProps
}: FormLabelProps): JSX.Element => {
  return (
    <FormLabel.Label
      requiredIndicator={<Box />}
      display="flex"
      flexDir="column"
      size={size}
      {...labelProps}
    >
      <Box>
        {questionNumber && (
          <FormLabel.QuestionNumber size={size}>
            {questionNumber}
          </FormLabel.QuestionNumber>
        )}
        {children}
        <FormLabel.OptionalIndicator size={size} isRequired={isRequired} />
        {tooltipText && (
          <Tooltip
            size={size}
            label={tooltipText}
            aria-label="Label tooltip"
            wrapperStyles={{
              display: 'inline-flex',
            }}
          >
            <Icon
              lineHeight={1}
              ml="0.5rem"
              color="base.content.strong"
              as={BxsHelpCircle}
            />
          </Tooltip>
        )}
      </Box>
      {description && (
        <FormLabel.Description>{description}</FormLabel.Description>
      )}
    </FormLabel.Label>
  )
}

// Required for FormControl parent to be able to find FormLabel children components.
FormLabel.displayName = 'FormLabel'
FormLabel.Label = ChakraFormLabel

interface FormLabelDescriptionProps extends TextProps {
  children: string
}
const FormLabelDescription: FC<FormLabelDescriptionProps> = ({
  children,
  ...props
}) => {
  // useFormControlContext is a ChakraUI hook that returns props passed down
  // from a parent ChakraUI's `FormControl` component.
  // The return object is used to determine whether FormHelperText or Text is
  // used.
  // Using FormHelperText allows for the children text to be added to the parent
  // FormLabel's aria-describedby attribute. This is done internally by ChakraUI.
  const field = useFormControlContext()
  const styles = useMultiStyleConfig('Form', props)

  const mergedStyles = useMemo(
    () => merge({}, styles.helperText, props.sx),
    [props.sx, styles.helperText],
  )

  // Render normal Text component if no form context is found.
  const ComponentToRender = useMemo(() => {
    if (field) return FormHelperText
    return Text
  }, [field])

  return (
    <ComponentToRender {...props} sx={mergedStyles}>
      {children}
    </ComponentToRender>
  )
}

FormLabel.Description = FormLabelDescription

FormLabel.QuestionNumber = ({ children, ...props }: TextProps): JSX.Element => {
  return (
    <Text
      as="span"
      textStyle="caption-1"
      color="base.content.strong"
      mr="0.5rem"
      verticalAlign="baseline"
      lineHeight={0}
      {...props}
    >
      <VisuallyHidden>Question number:</VisuallyHidden>
      {children}
    </Text>
  )
}

interface OptionalIndicatorProps extends HTMLChakraProps<'span'> {
  size?: ThemingProps<'Form'>['size']
  isRequired?: boolean
}

const OptionalIndicator = forwardRef<OptionalIndicatorProps, 'span'>(
  ({ isRequired, ...props }, ref) => {
    // useFormControlContext is a ChakraUI hook that returns props passed down
    // from a parent ChakraUI's `FormControl` component.
    // Valid hook usage since composited component is still a component.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const field = useFormControlContext()
    const styles = useMultiStyleConfig('Form', props)

    // If isRequired is explicitly provided, ignore form control context value.
    if (isRequired ?? field?.isRequired) return null

    return (
      <chakra.span
        ref={ref}
        role="presentation"
        aria-hidden
        __css={styles.optionalIndicator}
        {...props}
      >
        (optional)
      </chakra.span>
    )
  },
)

OptionalIndicator.displayName = 'OptionalIndicator'

FormLabel.OptionalIndicator = OptionalIndicator
FormLabel.OptionalIndicator.displayName = 'FormLabel.OptionalIndicator'
