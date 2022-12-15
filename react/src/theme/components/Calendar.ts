import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'
import { anatomy, StyleFunctionProps } from '@chakra-ui/theme-tools'

import { layerStyles } from '../layerStyles'

const parts = anatomy('calendar').parts(
  'container', // overall container
  'monthYearSelectorContainer', // container for month, year dropdowns and arrows
  'monthYearDropdownContainer', // container for month, year dropdowns
  'monthArrowContainer', // container for month forward/backward arrows
  'calendarContainer', // container for all month grids
  'monthGrid', // grid of dates for a single month
  'dayNamesContainer', // container for names of days in the week
  'dayOfMonthContainer',
  'dayOfMonth', // container for single date
  'todayLinkContainer', // container for "Today" link
)

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys)

const getDayOfMonthColors = ({
  isToday,
  colorScheme: c,
}: StyleFunctionProps) => {
  switch (c) {
    case 'main':
      return {
        color: 'base.content.dark',
        activeColor: 'base.content.inverse',
        hoverBg: 'interaction.muted.main.hover',
        activeBg: 'interaction.main.default',
        selectedBg: 'interaction.muted.main.active',
        borderColor: isToday ? 'utility.focus-default' : 'transparent',
      }
    default: {
      return {
        color: 'base.content.dark',
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
    textStyle: 'body-1',
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

const sizes = {
  md: definePartsStyle({
    dayOfMonth: {
      p: {
        base: 0,
        md: 0.75,
      },
      aspectRatio: '1 / 1',
      w: {
        base: '100%',
        md: '2.75rem',
      },
      minW: {
        base: '2.25rem',
        md: '2.75rem',
      },
      maxW: '3rem',
    },
    monthYearSelectorContainer: {
      pt: '0.75rem',
      h: '3.5rem',
    },
    calendarContainer: {
      pb: '1rem',
      px: '0.625rem',
      mb: '-1px',
    },
    dayNamesContainer: {
      w: {
        base: '2.25rem',
        md: '3.25rem',
      },
      h: {
        base: '2.25rem',
        md: '3rem',
      },
    },
    todayLinkContainer: {
      py: '0.75rem',
    },
  }),
}

const baseStyle = definePartsStyle((props) => ({
  container: {
    display: 'inline-block',
  },
  monthYearSelectorContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
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
    borderBottom: '1px solid',
    borderColor: 'base.divider.medium',
  },
  monthGrid: {
    w: '100%',
    justifyItems: 'left',
  },
  dayNamesContainer: {
    textStyle: 'subhead-2',
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
