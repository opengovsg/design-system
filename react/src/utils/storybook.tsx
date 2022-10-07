import { Box } from '@chakra-ui/react'
import { DecoratorFn } from '@storybook/react'
import dayjs from 'dayjs'
import mockdate from 'mockdate'

import { theme } from '~/theme'

import { init as initDayjs } from './dayjs'

// Init dayjs
initDayjs()

/**
 * Helper function to convert theme breakpoint into viewport width in px for
 * Chromatic viewpoint snapshots.
 * @param breakpoint the theme breakpoint to convert
 * @returns the number pixel width of the given breakpoint.
 */
const breakpointToViewportWidth = (
  breakpoint: keyof typeof theme.breakpoints,
) => {
  const rem = 16
  return parseInt(theme.breakpoints[breakpoint]) * rem
}

/**
 * Viewports mapping viewport key to their width in (pixel) number.
 * Used for Chromatic viewpoint snapshots which requires the numbers in pixels.
 */
export const viewports = {
  xs: breakpointToViewportWidth('xs'),
  sm: breakpointToViewportWidth('sm'),
  md: breakpointToViewportWidth('md'),
  lg: breakpointToViewportWidth('lg'),
  xl: breakpointToViewportWidth('xl'),
}

export const getMobileViewParameters = () => {
  return {
    viewport: {
      defaultViewport: 'mobile1',
    },
    chromatic: { viewports: [viewports.xs] },
  }
}

export const getTabletViewParameters = () => {
  return {
    viewport: {
      defaultViewport: 'tablet',
    },
    chromatic: { viewports: [viewports.md] },
  }
}

export const mockDateDecorator: DecoratorFn = (storyFn, { parameters }) => {
  mockdate.reset()

  if (parameters.mockdate) {
    mockdate.set(parameters.mockdate)

    const mockedDate = dayjs(parameters.mockdate).format('DD-MM-YYYY HH:mma')

    return (
      <Box>
        <Box
          pos="fixed"
          top={0}
          right={0}
          bg="white"
          p="0.25rem"
          fontSize="0.75rem"
          lineHeight={1}
          zIndex="docked"
        >
          Mocking date: {mockedDate}
        </Box>
        {storyFn()}
      </Box>
    )
  }
  return storyFn()
}
