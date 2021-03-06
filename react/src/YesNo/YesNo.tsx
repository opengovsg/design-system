import { useMemo } from 'react'
import {
  forwardRef,
  HStack,
  Icon,
  useFormControlProps,
  useMultiStyleConfig,
  useRadioGroup,
  UseRadioGroupProps,
} from '@chakra-ui/react'
import { pick } from 'lodash'

import { BxCheck, BxX } from '~/icons'
import { YESNO_THEME_KEY } from '~/theme/components/YesNo'
import { ThemeColorScheme } from '~/theme/foundations/colours'

import { YesNoOption } from './YesNoOption'

export interface YesNoProps {
  /**
   * Whether YesNo component is disabled.
   */
  isDisabled?: boolean
  /**
   * Function called once a radio is checked
   * @param nextValue the value of the checked radio
   */
  onChange?: UseRadioGroupProps['onChange']
  /**
   * The value of the radio to be `checked`
   * (in controlled mode)
   */
  value?: 'yes' | 'no'
  /**
   * The value of the radio to be `checked`
   * initially (in uncontrolled mode)
   */
  defaultValue?: 'yes' | 'no'
  /**
   * The `name` attribute forwarded to each `radio` element
   */
  name: string

  /**
   * Color scheme of the component to render. Defaults to `primary`.
   */
  colorScheme?: ThemeColorScheme
}

/**
 * YesNo field component.
 */
export const YesNo = forwardRef<YesNoProps, 'input'>(
  ({ colorScheme, ...props }, ref) => {
    const styles = useMultiStyleConfig(YESNO_THEME_KEY, props)
    const formControlProps = useFormControlProps(props)
    const { getRootProps, getRadioProps } = useRadioGroup(props)

    const groupProps = getRootProps()
    const [noProps, yesProps] = useMemo(() => {
      const baseProps = {
        ...pick(formControlProps, [
          'isDisabled',
          'isReadOnly',
          'isRequired',
          'isInvalid',
        ]),
      }

      return [
        getRadioProps({
          value: 'no',
          ...baseProps,
        }),
        getRadioProps({
          value: 'yes',
          ...baseProps,
        }),
      ]
    }, [formControlProps, getRadioProps])

    return (
      // -1px so borders collapse.
      <HStack spacing="-1px" {...groupProps}>
        <YesNoOption
          side="left"
          colorScheme={colorScheme}
          {...noProps}
          // Ref is set here for tracking current value, and also so any errors
          // can focus this input.
          ref={ref}
        >
          <Icon as={BxX} __css={styles.icon} />
          No
        </YesNoOption>
        <YesNoOption side="right" colorScheme={colorScheme} {...yesProps}>
          <Icon as={BxCheck} __css={styles.icon} />
          Yes
        </YesNoOption>
      </HStack>
    )
  },
)
