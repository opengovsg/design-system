import { InputProps } from '@chakra-ui/react'

import { WithSsr } from '~/types/WithSsr'

export interface DatePickerBaseProps
  extends Omit<
      InputProps,
      'value' | 'defaultValue' | 'onChange' | 'colorScheme' | 'size'
    >,
    WithSsr {
  /**
   * The `date-fns` format to display the date.
   * @defaultValue `dd/MM/yyyy`
   */
  displayFormat?: string
  /**
   * The `date-fns` format to parse manual string input.
   * @defaultValue `dd/MM/yyyy`
   */
  dateFormat?: string
  /** Whether the input allows manual date entry. */
  allowManualInput?: boolean
  /** If `true`, will allow invalid dates to be set for external validation.
   * @defaultValue `true`
   */
  allowInvalidDates?: boolean
  /**
   * Whether the calendar will close once a date is selected.
   * @defaultValue `true`
   */
  closeCalendarOnChange?: boolean

  /**
   * Whether to force the number keyboard on iOS.
   *
   * This will set the `pattern` prop on the input to `[0-9]*`, which
   * will force the number keyboard to show on iOS for a better user experience.
   *
   * ⚠️ This will break native form input validation if set, since the value of the input
   * will always be `"DD/MM/YYYY"`, which does not conform to the pattern.
   * To prevent native form validation, set `noValidate` on the parent `form` component.
   */
  experimental_forceIosNumberKeyboard?: boolean
  /**
   * Whether to refocus date picker when calendar is closed.
   * @defaultValue `true`
   */
  refocusOnClose?: boolean
  /** date-fns's Locale of the date to be applied if provided. */
  locale?: Locale
  renderInputElement?: () => React.ReactElement
}
