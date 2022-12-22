import { ThemingProps, useBreakpointValue } from '@chakra-ui/react'

import type { WithSsr } from '~/types/WithSsr'

import { PaginationFull } from './PaginationFull'
import { PaginationMinimal } from './PaginationMinimal'

export interface PaginationProps extends WithSsr {
  /**
   * Number of pages to display to left and right of current page.
   * Defaults to `1`.
   */
  siblingCount?: number

  /**
   * Total number of elements to paginate.
   */
  totalCount: number

  /**
   * Size of each page. Determines the number of rendered page counts.
   */
  pageSize: number

  /**
   * Callback function invoked with the updated page when the page is changed.
   */
  onPageChange: (page: number) => void

  /**
   * Represents the current active page. Note that a `1-based index` is used.
   */
  currentPage: number

  /**
   * Whether pagination buttons are disabled.
   */
  isDisabled?: boolean

  /**
   * Variant of pagination to use. Defaults to `full`.
   */
  variant?: ThemingProps<'Pagination'>['variant']
}

export const Pagination = ({
  variant: variantProp = 'full',
  ssr,
  ...props
}: PaginationProps): JSX.Element => {
  const variant = useBreakpointValue(
    typeof variantProp === 'string' ? { base: variantProp } : variantProp,
    { ssr },
  )

  return variant === 'minimal' ? (
    <Pagination.Minimal {...props} />
  ) : (
    <Pagination.Full {...props} />
  )
}

Pagination.Full = PaginationFull
Pagination.Minimal = PaginationMinimal
