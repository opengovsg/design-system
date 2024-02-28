import { ReactNode, useMemo } from 'react'
import {
  Box,
  Flex,
  forwardRef,
  mergeThemeOverride,
  SystemStyleObject,
  useMultiStyleConfig,
} from '@chakra-ui/react'

import { FormLabel } from '~/FormControl'
import { Switch, SwitchProps } from '~/Switch'

export interface ToggleProps extends SwitchProps {
  /**
   * Main label of the toggle
   */
  label: string
  /**
   * Secondary description text
   */
  description?: ReactNode
  /**
   * Overriding styles for the container which wraps the text
   * as well as the switch
   */
  containerStyles?: SystemStyleObject
  /**
   * Overriding styles for the main label
   */
  labelStyles?: SystemStyleObject
  /**
   * Overriding styles for the description
   */
  descriptionStyles?: SystemStyleObject
}

export const Toggle = forwardRef<ToggleProps, 'input'>(
  (
    {
      label,
      description,
      containerStyles,
      labelStyles,
      descriptionStyles,
      ...props
    },
    ref,
  ) => {
    const styles = useMultiStyleConfig('Toggle', props)
    const mergedContainerStyles = useMemo(
      () => mergeThemeOverride(styles.overallContainer, containerStyles),
      [containerStyles, styles.overallContainer],
    )
    const mergedLabelStyles = useMemo(
      () => mergeThemeOverride(styles.label, labelStyles),
      [labelStyles, styles.label],
    )
    const mergedDescriptionStyles = useMemo(
      () => mergeThemeOverride(styles.description, descriptionStyles),
      [descriptionStyles, styles.description],
    )

    return (
      <Flex sx={mergedContainerStyles}>
        {(label || description) && (
          <Box>
            <FormLabel.Label sx={mergedLabelStyles}>{label}</FormLabel.Label>
            {description && (
              <FormLabel.Description sx={mergedDescriptionStyles}>
                {description}
              </FormLabel.Description>
            )}
          </Box>
        )}
        <Switch {...props} aria-label={label} ref={ref} />
      </Flex>
    )
  },
)

Toggle.displayName = 'Toggle'
