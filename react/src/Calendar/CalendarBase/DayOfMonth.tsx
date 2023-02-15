import { useCallback, useMemo } from 'react'
import {
  ButtonProps,
  chakra,
  Flex,
  forwardRef,
  SystemStyleObject,
  useMultiStyleConfig,
  useToken,
} from '@chakra-ui/react'
import { dataAttr } from '@chakra-ui/utils'
import {
  compareAsc,
  isFirstDayOfMonth,
  isLastDayOfMonth,
  isSameDay,
  isSaturday,
  isSunday,
} from 'date-fns'
import { DateObj } from 'dayzed'
import { get } from 'lodash'

import { useCalendar } from './CalendarContext'

export interface DayOfMonthProps extends ButtonProps {
  /**
   * DateObj to decide what is rendered.
   */
  dateObj: DateObj
  /**
   * Whether this date falls outside the range of the
   * month currently being displayed.
   */
  isOutsideCurrMonth?: boolean
}

export const DayOfMonth = forwardRef<DayOfMonthProps, 'button'>(
  (
    { dateObj: { date, selected, today }, isOutsideCurrMonth, ...props },
    ref,
  ) => {
    const {
      isDateUnavailable,
      isDateFocusable,
      onMouseEnterHighlight,
      isDateInRange,
      selectedDates,
      hoveredDate,
      colorScheme,
    } = useCalendar()

    const isAvailable = useMemo(
      () => !isDateUnavailable?.(date),
      [date, isDateUnavailable],
    )
    const isFocusable = useMemo(
      () => isDateFocusable(date),
      [date, isDateFocusable],
    )
    const isInRange = useMemo(
      () => isDateInRange?.(date),
      [date, isDateInRange],
    )

    const handleMouseEnter = useCallback(
      () => onMouseEnterHighlight?.(date),
      [date, onMouseEnterHighlight],
    )

    const styles = useMultiStyleConfig('Calendar', {
      isSelected: selected,
      isToday: today,
      isOutsideCurrMonth,
      colorScheme,
    })

    const isCurrentDateHovered = useMemo(
      () => hoveredDate && isSameDay(hoveredDate, date),
      [date, hoveredDate],
    )

    const selectedBgColor = useToken(
      'colors',
      `${get(styles, 'dayOfMonth._selected.bg')}`,
    )

    const buttonBoxStyles = useMemo(() => {
      let gradientTo: 'left' | 'right' | undefined
      // Only style background if it is a range.
      if (Array.isArray(selectedDates)) {
        const [startDate, endDate] = selectedDates
        // Case 1: Both dates selected and equal, no need for background.
        if (startDate && endDate && isSameDay(startDate, endDate)) {
          return {}
        }
        // Case 2: Hovered date with previously selected date.
        // Background corner should follow date that is hovered.
        if (hoveredDate && startDate && !endDate) {
          if (isSameDay(hoveredDate, date)) {
            gradientTo =
              compareAsc(hoveredDate, selectedDates[0]) === 1 ? 'left' : 'right'
          }
        }
        // Case 3: Current date is a selected date.
        if (startDate && isSameDay(startDate, date)) {
          gradientTo = 'right'
          // Case 4: Only one date selected, background corner should follow
          // date that is selected.
          if (hoveredDate && startDate && !endDate) {
            if (compareAsc(selectedDates[0], hoveredDate) === 1) {
              gradientTo = 'left'
            }
          }
        }
        // Case 5: Current date is the later selected date.
        if (endDate && isSameDay(endDate, date)) {
          gradientTo = 'left'
        }
        if (gradientTo) {
          return {
            bg: `linear-gradient(to ${gradientTo}, transparent 50%,${selectedBgColor} 50%)`,
          }
        }
        // Case 6: In range but none of the above criteria. Means in between range.
        if (isInRange) {
          const returnStyles: SystemStyleObject = {}
          if (isLastDayOfMonth(date) || isSaturday(date)) {
            returnStyles.borderEndRadius = 'sm'
          }
          if (isFirstDayOfMonth(date) || isSunday(date)) {
            returnStyles.borderStartRadius = 'sm'
          }
          return { bg: selectedBgColor, ...returnStyles }
        }
      }
      // Case 7. Not in a range, no background
      return {}
    }, [date, hoveredDate, isInRange, selectedBgColor, selectedDates])

    return (
      <Flex sx={{ ...styles.dayOfMonthContainer, ...buttonBoxStyles }}>
        <chakra.button
          onMouseEnter={handleMouseEnter}
          // Prevent form submission if this component is nested in a form.
          type="button"
          data-hover={dataAttr(isCurrentDateHovered)}
          data-active={dataAttr(selected)}
          sx={styles.dayOfMonth}
          aria-label={date.toLocaleDateString()}
          tabIndex={isFocusable ? 0 : -1}
          aria-disabled={!isAvailable}
          ref={ref}
          {...props}
        >
          {date.getDate()}
        </chakra.button>
      </Flex>
    )
  },
)

DayOfMonth.displayName = 'DayOfMonth'
