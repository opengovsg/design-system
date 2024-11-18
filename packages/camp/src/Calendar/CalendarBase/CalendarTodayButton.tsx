import { Box, Skeleton } from '@chakra-ui/react'

import { Button } from '~/Button'

import { useCalendar } from './CalendarContext'
import { useCalendarStyles } from './CalendarStyleProvider'

export const CalendarTodayButton = (): JSX.Element => {
  const styles = useCalendarStyles()
  const { handleTodayClick, colorScheme, isLoading } = useCalendar()
  return (
    <Box sx={styles.todayLinkContainer}>
      <Skeleton isLoaded={!isLoading}>
        <Button
          aria-label="Focus on today's date"
          colorScheme={colorScheme}
          variant="link"
          type="button"
          sx={styles.todayLink}
          onClick={handleTodayClick}
        >
          Today
        </Button>
      </Skeleton>
    </Box>
  )
}
