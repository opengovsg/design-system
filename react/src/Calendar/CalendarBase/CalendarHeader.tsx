import {
  ChangeEvent,
  memo,
  PropsWithChildren,
  useCallback,
  useMemo,
} from 'react'
import { Flex, HStack, Select, SelectProps, Text } from '@chakra-ui/react'
import { addMonths } from 'date-fns'

import { IconButton } from '~/IconButton'
import { BxChevronLeft, BxChevronRight } from '~/icons'

import { useCalendar } from './CalendarContext'
import { useCalendarStyles } from './CalendarStyleProvider'
import { MONTH_NAMES } from './utils'

interface CalendarHeaderProps {
  monthOffset: number
}

type MonthYearSelectProps = PropsWithChildren<SelectProps>

const MonthYearSelect = ({ children, ...props }: MonthYearSelectProps) => {
  return (
    <Select
      // Prevents any parent form control from applying error styles to this select.
      isInvalid={false}
      variant="flushed"
      borderRadius="4px"
      color="base.content.dark"
      textStyle="subhead-1"
      flexBasis="fit-content"
      borderColor="transparent"
      cursor="pointer"
      _hover={{
        borderColor: 'transparent',
      }}
      _focus={{
        boxShadow: '0 0 0 4px var(--chakra-colors-secondary-300)',
      }}
      {...props}
    >
      {children}
    </Select>
  )
}

const SelectableMonthYear = memo(() => {
  const {
    currMonth,
    setCurrMonth,
    currYear,
    setCurrYear,
    yearOptions,
    isMobile,
  } = useCalendar()

  const memoizedMonthOptions = useMemo(() => {
    return MONTH_NAMES.map(({ shortName, fullName }, index) => (
      <option value={index} key={index}>
        {isMobile ? shortName : fullName}
      </option>
    ))
  }, [isMobile])

  const memoizedYearOptions = useMemo(() => {
    return yearOptions.map((year, index) => (
      <option value={year} key={index}>
        {year}
      </option>
    ))
  }, [yearOptions])

  const handleMonthChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setCurrMonth(parseInt(e.target.value))
    },
    [setCurrMonth],
  )
  const handleYearChange = useCallback(
    (e: ChangeEvent<HTMLSelectElement>) => {
      setCurrYear(parseInt(e.target.value))
    },
    [setCurrYear],
  )

  return (
    <HStack>
      <MonthYearSelect
        // Align with dates in the calendar
        pl={{ base: '0.5rem', md: '1rem' }}
        value={currMonth}
        onChange={handleMonthChange}
        aria-label="Change displayed month"
      >
        {memoizedMonthOptions}
      </MonthYearSelect>
      <MonthYearSelect
        value={currYear}
        onChange={handleYearChange}
        aria-label="Change displayed year"
      >
        {memoizedYearOptions}
      </MonthYearSelect>
    </HStack>
  )
})

const MonthYear = memo(({ monthOffset }: CalendarHeaderProps) => {
  const { currMonth, currYear, isMobile } = useCalendar()

  const newOffsetDate = useMemo(
    () => addMonths(new Date(currYear, currMonth), monthOffset),
    [currMonth, currYear, monthOffset],
  )

  const monthDisplay = useMemo(() => {
    const month = MONTH_NAMES[newOffsetDate.getMonth()]
    return isMobile ? month.shortName : month.fullName
  }, [isMobile, newOffsetDate])

  const yearDisplay = useMemo(() => {
    return newOffsetDate.getFullYear()
  }, [newOffsetDate])

  return (
    <HStack
      ml={{ base: '0.5rem', md: '1rem' }}
      textStyle="subhead-1"
      color="base.content.dark"
      spacing="1.5rem"
    >
      <Text>{monthDisplay}</Text>
      <Text>{yearDisplay}</Text>
    </HStack>
  )
})

export const CalendarHeader = memo(
  ({ monthOffset }: CalendarHeaderProps): JSX.Element => {
    const styles = useCalendarStyles()
    const {
      renderProps: { calendars, getBackProps, getForwardProps },
    } = useCalendar()

    return (
      <Flex sx={styles.monthYearSelectorContainer}>
        {monthOffset === 0 ? (
          <SelectableMonthYear />
        ) : (
          <MonthYear monthOffset={monthOffset} />
        )}
        {calendars.length - 1 === monthOffset ? (
          <Flex sx={styles.monthArrowContainer}>
            <IconButton
              variant="clear"
              colorScheme="neutral"
              icon={<BxChevronLeft />}
              aria-label="Back one month"
              {...getBackProps({ calendars })}
            />
            <IconButton
              variant="clear"
              colorScheme="neutral"
              icon={<BxChevronRight />}
              aria-label="Forward one month"
              {...getForwardProps({ calendars })}
            />
          </Flex>
        ) : null}
      </Flex>
    )
  },
)
