import { useMediaQuery, UseMediaQueryOptions, useTheme } from '@chakra-ui/react'
import { get } from '@chakra-ui/utils'

import { breakpoints } from '~/theme/foundations/breakpoints'

export const useIsMobile = (opts?: UseMediaQueryOptions): boolean => {
  const theme = useTheme()
  const mdBreakpoint = get(theme, 'breakpoints.md', breakpoints.md)
  const [isLargerThanMd] = useMediaQuery(`(min-width: ${mdBreakpoint})`, opts)

  return !isLargerThanMd
}
