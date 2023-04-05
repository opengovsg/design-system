import { KeyboardEvent, useCallback, useRef } from 'react'
import {
  Box,
  forwardRef,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
  useControllableState,
  useMergeRefs,
  useMultiStyleConfig,
} from '@chakra-ui/react'

import { IconButton } from '~/IconButton'
import { BxSearch, BxX } from '~/icons'

export interface SearchbarProps extends InputProps {
  /**
   * Function to be invoked when user presses enter (to search).
   * @param searchValue value of the search input
   */
  onSearch?: (searchValue: string) => void

  /**
   * Whether the searchbar is expanded or not by default.
   * @note If this is not provided, the searchbar will be collapsed by default.
   */
  defaultIsExpanded?: boolean

  /**
   * Whether the searchbar is expanded or not.
   * If provided, expansion state will be a controlled input.
   */
  isExpanded?: boolean

  /**
   * Function to be invoked when the searchbar is expanded or collapsed.
   * If provided, expansion state will be a controlled input.
   * @note This should be provided if the `isExpanded` prop is provided.
   * @note Will be invoked with `true` when the searchbar icon is clicked, and with
   * `false` when the user closes the searchbar.
   */
  onExpansion?: (isExpanded: boolean) => void

  /**
   * Whether to show the clear button.
   * @note If this is provided, the clear button will only be shown if the searchbar is expanded.
   */
  showClearButton?: boolean

  /**
   * Whether to collapse the searchbar when the clear button is clicked.
   * @note If this is provided, the searchbar will only collapse if the `showClearButton` prop is also provided.
   */
  collapseOnClear?: boolean

  /**
   * If provided, the searchbar will be focused when the user expands the input.
   * Defaults to `true`.
   */
  focusOnExpand?: boolean
}

export const Searchbar = forwardRef<SearchbarProps, 'input'>(
  (
    {
      onSearch,
      defaultIsExpanded,
      isExpanded: isExpandedProp,
      onExpansion: onExpansionProp,
      showClearButton = true,
      collapseOnClear,
      size,
      focusOnExpand = true,
      ...props
    },
    ref,
  ) => {
    const [isExpanded, onExpansion] = useControllableState({
      defaultValue: defaultIsExpanded,
      value: isExpandedProp,
      onChange: onExpansionProp,
    })

    const innerRef = useRef<HTMLInputElement>(null)
    const styles = useMultiStyleConfig('Searchbar', {
      isExpanded,
      size,
      ...props,
    })

    const inputRef = useMergeRefs(innerRef, ref)

    const handleSearch = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && innerRef.current && onSearch) {
          onSearch(innerRef.current.value)
        }
      },
      [onSearch],
    )

    const handleClearButtonClick = useCallback(() => {
      if (innerRef.current) {
        innerRef.current.value = ''
      }
      if (collapseOnClear) {
        onExpansion(false)
      }
      innerRef.current?.focus()
    }, [collapseOnClear, onExpansion])

    const handleExpansion = useCallback(() => {
      onExpansion(true)
      if (focusOnExpand) {
        // Set timeout to allow the input to expand before focusing
        setTimeout(() => {
          innerRef.current?.focus()
        }, 0)
      }
    }, [focusOnExpand, onExpansion])

    return (
      <InputGroup flex={isExpanded ? 1 : 0} size={size}>
        {isExpanded ? (
          <InputLeftElement pointerEvents="none">
            <Box __css={styles.icon}>
              <Icon as={BxSearch} />
            </Box>
          </InputLeftElement>
        ) : (
          <IconButton
            aria-label="Expand search"
            icon={<BxSearch />}
            variant="clear"
            colorScheme="neutral"
            onClick={handleExpansion}
            sx={styles.icon}
          />
        )}
        <Input
          hidden={!isExpanded}
          aria-label="Press enter to search"
          ref={inputRef}
          sx={styles.field}
          onKeyDown={handleSearch}
          {...props}
        />
        {showClearButton && isExpanded && (
          <InputRightElement>
            <IconButton
              aria-label="Clear search"
              icon={<BxX />}
              size={size}
              variant="clear"
              colorScheme="neutral"
              onClick={handleClearButtonClick}
              sx={styles.icon}
            />
          </InputRightElement>
        )}
      </InputGroup>
    )
  },
)

Searchbar.displayName = 'Searchbar'
