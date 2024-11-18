/**
 * Mobile variant for the Pagination component.
 */

import { FC, useCallback } from 'react'
import { Box, IconButton, Text, useMultiStyleConfig } from '@chakra-ui/react'

import { BxChevronLeft, BxChevronRight } from '~/icons'

import { PaginationProps } from './Pagination'

type PaginationMobileProps = Omit<PaginationProps, 'siblingCount'>

export const PaginationMinimal: FC<PaginationMobileProps> = ({
  pageSize,
  onPageChange,
  totalCount,
  currentPage,
  isDisabled,
}) => {
  const styles = useMultiStyleConfig('Pagination', { variant: 'minimal' })

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
    <Box __css={styles.container}>
      <IconButton
        variant="unstyled"
        sx={styles.stepper}
        aria-label="Previous page"
        isDisabled={isDisablePrevPage}
        onClick={handlePageBack}
        icon={<BxChevronLeft />}
      />
      <Text sx={styles.text} aria-disabled={isDisabled}>
        Page {currentPage} of {totalPageCount}
      </Text>
      <IconButton
        variant="unstyled"
        sx={styles.stepper}
        aria-label="Next page"
        isDisabled={isDisableNextPage}
        onClick={handlePageNext}
        icon={<BxChevronRight />}
      />
    </Box>
  )
}
