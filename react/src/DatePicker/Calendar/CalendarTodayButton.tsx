import { Box, useStyles } from '@chakra-ui/react'

import { Button } from '~/Button'

import { useCalendar } from './CalendarContext'

export const CalendarTodayButton = (): JSX.Element => {
  const styles = useStyles()
  const { handleTodayClick } = useCalendar()
  return (
    <Box sx={styles.todayLinkContainer}>
      <Button
        variant="link"
        type="button"
        onClick={handleTodayClick}
        tabIndex={0}
      >
        Today
      </Button>
    </Box>
  )
}
