import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'
import { anatomy, StyleFunctionProps } from '@chakra-ui/theme-tools'

import { layerStyles } from '../layerStyles'
import { textStyles } from '../textStyles'

const parts = anatomy('calendar').parts(
  'container', // overall container
  'monthYearSelectorContainer', // container for month, year dropdowns and arrows
  'monthYearSelect', // select for month and year
  'monthYearDisplay', // container for month and year text
  'monthYearDropdownContainer', // container for month, year dropdowns
  'monthArrowContainer', // container for month forward/backward arrows
  'calendarContainer', // container for all month grids
  'monthGrid', // grid of dates for a single month
  'dayNamesContainer', // container for names of days in the week
  'dayOfMonthContainer',
  'dayOfMonth', // container for single date
  'todayLinkContainer', // container for "Today" link,
  'todayLink', // "Today" link
)

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const getDayOfMonthColors = ({
  isToday,
  colorScheme: c,
  isOutsideCurrMonth,
}: StyleFunctionProps) => {
  switch (c) {
    case 'main':
      return {
        color: isOutsideCurrMonth
          ? 'interaction.support.disabled-content'
          : 'base.content.strong',
        activeColor: 'base.content.inverse',
        hoverBg: 'interaction.muted.main.hover',
        activeBg: 'interaction.main.default',
        selectedBg: 'interaction.muted.main.active',
        borderColor: isToday ? 'utility.focus-default' : 'transparent',
      }
    default: {
      return {
        color: 'base.content.strong',
        activeColor: 'base.content.inverse',
        selectedBg: `${c}.200`,
        hoverBg: `${c}.200`,
        activeBg: `${c}.500`,
      }
    }
  }
}

const baseDayOfMonthContainerStyles = defineStyle({
  justifyContent: 'center',
  _focusWithin: { zIndex: 1 },
})

const baseDayOfMonthStyles = defineStyle((props) => {
  const { color, activeBg, borderColor, activeColor, hoverBg, selectedBg } =
    getDayOfMonthColors(props)

  return {
    display: 'inline-block',
    borderRadius: '50%',
    color,
    outline: 'none',
    border: '1px solid',
    borderColor,
    _hover: {
      bg: hoverBg,
    },
    _active: {
      bg: activeBg,
      color: activeColor,
    },
    _selected: {
      bg: selectedBg,
    },
    _focus: {
      ...layerStyles.focusRing.default._focusVisible,
    },
    _disabled: {
      _hover: {
        bg: hoverBg,
      },
      color: 'interaction.support.disabled-content',
      cursor: 'not-allowed',
      bg: 'transparent',
      textDecor: 'line-through',
      borderColor: props.isToday
        ? 'interaction.support.disabled-content'
        : 'transparent',
    },
  }
})

// Both sizes have the same styles for now.
// Declared here since datepicker has xs styling, but calendar does not.
// This allows datepicker's calendar to have sm styling in both xs and sm sizes.
const xsSmStyle = definePartsStyle({
  dayOfMonth: {
    textStyle: 'body-2',
    p: '0.25rem',
    aspectRatio: '1 / 1',
    w: '2.5rem',
    minW: '2.5rem',
  },
  dayNamesContainer: {
    textStyle: 'caption-1',
    color: 'base.content.default',
    w: '2.5rem',
    minW: '2.5rem',
    h: '2.25rem',
  },
  monthYearSelectorContainer: {
    h: '3rem',
  },
  monthYearSelect: {
    ...textStyles['subhead-2'],
  },
  monthYearDisplay: {
    ...textStyles['subhead-2'],
    ml: '0.5rem',
  },
  calendarContainer: {
    pb: '1rem',
    px: '0.625rem',
    mb: '-1px',
  },
  todayLinkContainer: {
    py: '0.5rem',
  },
  todayLink: {
    textStyle: 'body-2',
    ...textStyles['body-2'],
  },
})

const sizes = {
  xs: xsSmStyle,
  sm: xsSmStyle,
  md: definePartsStyle({
    dayOfMonth: {
      textStyle: 'body-1',
      p: '0.25rem',
      aspectRatio: '1 / 1',
      w: '2.75rem',
      minW: '2.75rem',
      maxW: '3rem',
    },
    monthYearSelectorContainer: {
      pt: '0.75rem',
      h: '3.5rem',
    },
    monthYearSelect: {
      ...textStyles['subhead-1'],
    },
    monthYearDisplay: {
      ...textStyles['subhead-1'],
      ml: '1rem',
    },
    calendarContainer: {
      pb: '1rem',
      px: '0.625rem',
      mb: '-1px',
    },
    dayNamesContainer: {
      textStyle: 'subhead-2',
      w: '3.25rem',
      h: '2.75rem',
    },
    todayLinkContainer: {
      py: '0.75rem',
    },
    todayLink: {
      // Both required since link is both a button and a link, and both
      // components override different props.
      textStyle: 'body-1',
      ...textStyles['body-1'],
    },
  }),
}

const monthYearDisplayStyles = defineStyle({
  borderRadius: 'base',
  color: 'base.content.strong',
  height: 'fit-content',
  py: '0.25rem',
})

const baseStyle = definePartsStyle((props) => ({
  container: {
    display: 'inline-block',
  },
  monthYearSelectorContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  monthYearSelect: {
    ...monthYearDisplayStyles,
    borderColor: 'transparent',
    cursor: 'pointer',
    _hover: {
      borderColor: 'transparent',
    },
    _focusVisible: {
      ...layerStyles.focusRing.default._focusVisible,
    },
  },
  monthYearDisplay: monthYearDisplayStyles,
  monthYearDropdownContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
  },
  monthArrowContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  calendarContainer: {
    display: {
      base: 'block',
      md: 'flex',
    },
  },
  monthGrid: {
    w: '100%',
    justifyItems: 'left',
  },
  dayNamesContainer: {
    color: 'base.content.default',
  },
  dayOfMonthContainer: baseDayOfMonthContainerStyles,
  dayOfMonth: baseDayOfMonthStyles(props),
  todayLinkContainer: {
    textAlign: 'center',
  },
}))

export const Calendar = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    colorScheme: 'main',
    size: 'md',
  },
})
