import {
  forwardRef,
  Stack,
  StackDivider,
  ThemingProps,
  useControllableState,
  useMultiStyleConfig,
} from '@chakra-ui/react'

import {
  CalendarAria,
  CalendarBaseProps,
  CalendarPanel,
  CalendarProvider,
  CalendarStylesProvider,
  CalendarTodayButton,
  UseProvideCalendarProps,
} from './CalendarBase'

export interface CalendarProps
  extends CalendarBaseProps,
    Pick<UseProvideCalendarProps, 'showOutsideDays'> {
  /**
   * The current selected date.
   * If provided, the input will be a controlled input, and `onChange` must be provided.
   */
  value?: Date | null
  /**
   * Callback fired when the date changes.
   * If `value` is provided, this must be provided.
   * @param {Date | null} date The new selected date.
   */
  onChange?: (date: Date | null) => void
  /**
   * Callback fired when the currently viewed month changes.
   * @param {number} currMonth The new month being viewed.
   */
  onMonthChange?: (currMonth: number) => void
  /**
   * Callback fired when the currently viewed year changes.
   * @param {number} currYear The new year being viewed.
   */
  onYearChange?: (currYear: number) => void
  /** The default selected date, used if input is uncontrolled */
  defaultValue?: Date | null
  /** Function to determine whether a date should be made unavailable. */
  isDateUnavailable?: (d: Date) => boolean
  /** Color scheme for component */
  colorScheme?: ThemingProps<'Calendar'>['colorScheme']
}

export const Calendar = forwardRef<CalendarProps, 'input'>(
  (
    {
      value,
      onChange,
      onMonthChange,
      onYearChange,
      defaultValue,
      showTodayButton = true,
      ...props
    },
    initialFocusRef,
  ) => {
    const styles = useMultiStyleConfig('Calendar', props)

    const [internalValue, setInternalValue] = useControllableState({
      value,
      onChange,
      defaultValue: defaultValue,
    })

    const [currMonth, setCurrMonth] = useControllableState<number>({
      defaultValue:
        props.defaultFocusedDate?.getMonth() ?? new Date().getMonth(),
      onChange: onMonthChange,
    })

    const [currYear, setCurrYear] = useControllableState<number>({
      defaultValue:
        props.defaultFocusedDate?.getFullYear() ?? new Date().getFullYear(),
      onChange: onYearChange,
    })

    return (
      <CalendarProvider
        {...props}
        selectedDates={internalValue ?? undefined}
        onSelectDate={setInternalValue}
        currMonth={currMonth}
        setCurrMonth={setCurrMonth}
        currYear={currYear}
        setCurrYear={setCurrYear}
      >
        <CalendarStylesProvider value={styles}>
          <CalendarAria />
          <Stack spacing={0} divider={<StackDivider />} sx={styles.container}>
            <CalendarPanel ref={initialFocusRef} />
            {showTodayButton && <CalendarTodayButton />}
          </Stack>
        </CalendarStylesProvider>
      </CalendarProvider>
    )
  },
)

Calendar.displayName = 'Calendar'
