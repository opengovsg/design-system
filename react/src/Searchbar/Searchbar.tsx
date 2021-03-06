import { KeyboardEvent, useCallback, useRef } from 'react'
import {
  Box,
  forwardRef,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  useMergeRefs,
  useMultiStyleConfig,
} from '@chakra-ui/react'

import { IconButton } from '~/IconButton'
import { BxSearch } from '~/icons'
import { SEARCHBAR_THEME_KEY } from '~/theme/components/Searchbar'

export interface SearchbarProps extends InputProps {
  /**
   * Function to be invoked when user presses enter (to search).
   * @param searchValue value of the search input
   */
  onSearch: (searchValue: string) => void

  /**
   * Whether the searchbar is expanded or not.
   * @note This should be `true` if the `onSearchIconClick` function prop is not
   * provided, or the searchbar will not be usable.
   */
  isExpanded: boolean

  /**
   * Optional. Function to be invoked when the search icon is clicked.
   * If provided, the search icon will be clickable.
   */
  onSearchIconClick?: () => void
}

export const Searchbar = forwardRef<SearchbarProps, 'input'>(
  ({ onSearch, isExpanded, onSearchIconClick, ...props }, ref) => {
    const innerRef = useRef<HTMLInputElement>(null)
    const styles = useMultiStyleConfig(SEARCHBAR_THEME_KEY, {
      isExpanded,
      ...props,
    })

    const inputRef = useMergeRefs(innerRef, ref)

    const handleSearch = useCallback(
      (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && innerRef.current) {
          onSearch(innerRef.current.value)
        }
      },
      [onSearch],
    )

    return (
      <InputGroup flex={isExpanded ? 1 : 0}>
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
            colorScheme="secondary"
            onClick={onSearchIconClick}
            sx={styles.icon}
          />
        )}
        <Input
          aria-label="Press enter to search"
          ref={inputRef}
          sx={styles.field}
          onKeyDown={handleSearch}
          {...props}
        />
      </InputGroup>
    )
  },
)
