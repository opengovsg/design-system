/**
 * Desktop variant for the Pagination component.
 */

import { useCallback, useMemo } from 'react'
import {
  Button,
  chakra,
  IconButton,
  useMultiStyleConfig,
} from '@chakra-ui/react'

import { BxChevronLeft, BxChevronRight } from '~/icons'

import { PaginationProps } from './Pagination'
import { usePaginationRange } from './usePaginationRange'

// Separate constant to denote a separator in the pagination component.
const SEPARATOR = '\u2026'

interface FullPageButtonProps {
  selectedPage: PaginationProps['currentPage']
  page: number | typeof SEPARATOR
  onClick: PaginationProps['onPageChange']
  isDisabled: PaginationProps['isDisabled']
}

const FullPageButton = ({
  selectedPage,
  page,
  onClick,
  isDisabled,
}: FullPageButtonProps) => {
  const isSelected = useMemo(() => page === selectedPage, [page, selectedPage])

  const styles = useMultiStyleConfig('Pagination')

  const handleClick = useCallback(() => {
    if (page === SEPARATOR) return
    onClick(page)
  }, [onClick, page])

  if (page === SEPARATOR) {
    return (
      <chakra.li aria-disabled={isDisabled} sx={styles.separator}>
        {page}
      </chakra.li>
    )
  }

  return (
    <chakra.li>
      <Button
        variant="unstyled"
        aria-current={isSelected ? 'page' : 'false'}
        sx={styles.button}
        onClick={handleClick}
        isDisabled={isDisabled}
      >
        {page}
      </Button>
    </chakra.li>
  )
}

export const PaginationFull = ({
  siblingCount = 1,
  pageSize,
  onPageChange,
  totalCount,
  currentPage,
  isDisabled,
}: PaginationProps): JSX.Element => {
  const paginationRange = usePaginationRange<typeof SEPARATOR>({
    totalCount,
    pageSize,
    currentPage,
    siblingCount,
    separator: SEPARATOR,
  })

  const styles = useMultiStyleConfig('Pagination', { variant: 'full' })

  const totalPageCount = Math.ceil(totalCount / pageSize)
  const isDisableNextPage = isDisabled || currentPage >= totalPageCount
  const isDisablePrevPage = isDisabled || currentPage <= 1

  const handlePageBack = useCallback(() => {
    if (isDisablePrevPage) return
    onPageChange(currentPage - 1)
  }, [currentPage, isDisablePrevPage, onPageChange])

  const handlePageNext = useCallback(() => {
    if (isDisableNextPage) return
    onPageChange(currentPage + 1)
  }, [currentPage, isDisableNextPage, onPageChange])

  return (
    <chakra.nav aria-label="Pagination">
      <chakra.ul
        display="flex"
        flexFlow="row nowrap"
        listStyleType="none"
        alignItems="center"
        gap="2px"
      >
        <chakra.li>
          <IconButton
            variant="unstyled"
            sx={styles.stepper}
            aria-label="Previous page"
            isDisabled={isDisablePrevPage}
            onClick={handlePageBack}
            icon={<BxChevronLeft />}
          />
        </chakra.li>
        {paginationRange.map((p, i) => (
          <FullPageButton
            key={i}
            page={p}
            isDisabled={isDisabled}
            selectedPage={currentPage}
            onClick={onPageChange}
          />
        ))}
        <chakra.li>
          <IconButton
            variant="unstyled"
            sx={styles.stepper}
            aria-label="Next page"
            isDisabled={isDisableNextPage}
            onClick={handlePageNext}
            icon={<BxChevronRight />}
          />
        </chakra.li>
      </chakra.ul>
    </chakra.nav>
  )
}
