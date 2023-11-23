import { Flex, forwardRef, Popover, PopoverAnchor } from '@chakra-ui/react'

import { useDateRangePicker } from '../DateRangePickerContext'

import { DateRangePickerInput } from './DateRangePickerInput'
import { DateRangePickerOverlay } from './DateRangePickerOverlay'

// eslint-disable-next-line @typescript-eslint/ban-types
export const DateRangePickerWrapper = forwardRef<{}, 'input'>(
  ({ children }, ref) => {
    const {
      styles,
      disclosureProps,
      initialFocusRef,
      closeCalendarOnChange,
      handleFieldContainerClick,
      isMobile,
      fcProps: { isInvalid, isDisabled, isReadOnly },
    } = useDateRangePicker()

    if (isMobile) {
      return (
        <Flex>
          <Flex
            sx={styles.fieldwrapper}
            aria-disabled={isDisabled}
            aria-invalid={isInvalid}
            aria-readonly={isReadOnly}
            onClick={handleFieldContainerClick}
            overflowX="hidden"
          >
            <DateRangePickerInput ref={ref} />
          </Flex>
          {children}
        </Flex>
      )
    }

    return (
      <Flex>
        <Popover
          placement="bottom-start"
          isLazy
          initialFocusRef={initialFocusRef}
          closeOnBlur={closeCalendarOnChange}
          returnFocusOnClose={false}
          {...disclosureProps}
        >
          <PopoverAnchor>
            <Flex
              aria-disabled={isDisabled}
              aria-invalid={isInvalid}
              aria-readonly={isReadOnly}
              sx={styles.fieldwrapper}
              onClick={handleFieldContainerClick}
            >
              <DateRangePickerInput ref={ref} />
            </Flex>
          </PopoverAnchor>
          {children}
        </Popover>
        <DateRangePickerOverlay />
      </Flex>
    )
  },
)

DateRangePickerWrapper.displayName = 'DateRangePickerWrapper'
