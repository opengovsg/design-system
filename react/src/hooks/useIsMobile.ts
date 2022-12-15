import { useMediaMatch } from 'rooks'

import { breakpoints } from '~/theme/foundations/breakpoints'

export const useIsMobile = (): boolean => {
  const isLargerThanMd = useMediaMatch(`(min-width: ${breakpoints.md})`)

  return !isLargerThanMd
}
