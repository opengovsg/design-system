import { useEffect, useMemo, useState } from 'react'
import ReactInputMask from 'react-input-mask'
import {
  Flex,
  forwardRef,
  Stack,
  Text,
  useMergeRefs,
  VisuallyHidden,
} from '@chakra-ui/react'

import { Input } from '~/Input'

import { useDateRangePicker } from '../DateRangePickerContext'

// eslint-disable-next-line @typescript-eslint/ban-types
export const DateRangePickerInput = forwardRef<{}, 'input'>((_props, ref) => {
  const {
    startInputRef,
    styles,
    startInputDisplay,
    handleStartDateChange,
    placeholder,
    fcProps,
    handleInputBlur,
    handleInputClick,
    allowManualInput,
    labelSeparator,
    endInputDisplay,
    endInputRef,
    handleEndDateChange,
    internalValue: [startDate, endDate],
  } = useDateRangePicker()

  const mergedStartInputRef = useMergeRefs(startInputRef, ref)

  const selectedDatesAriaLiveText = useMemo(() => {
    if (!startDate && !endDate) {
      return 'No date selected'
    }
    if (startDate && !endDate) {
      return `Selected date: ${startDate.toLocaleDateString()}`
    }

    return `Selected date range: ${startDate?.toLocaleDateString()} to ${endDate?.toLocaleDateString()}`
  }, [endDate, startDate])

  // Allow for SSR with react-input-mask package.
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <Flex
      overflowX="auto"
      sx={{
        // Hide scrollbars so dual inputs feel like a real normal input.
        msOverflowStyle: 'none',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
          display: 'none',
        },
      }}
    >
      <VisuallyHidden aria-live="assertive">
        {selectedDatesAriaLiveText}
      </VisuallyHidden>
      <Stack direction="row" align="center">
        {hasMounted ? (
          <Input
            variant="unstyled"
            aria-label="Start date of range"
            inputMode="numeric" // Nudge Android mobile keyboard to be numeric
            pattern="\d*" // Nudge numeric keyboard on iOS Safari.
            sx={styles.field}
            width="6rem"
            as={ReactInputMask}
            mask="99/99/9999"
            value={startInputDisplay}
            onChange={handleStartDateChange}
            placeholder={placeholder}
            maskPlaceholder={placeholder}
            ref={mergedStartInputRef}
            {...fcProps}
            onBlur={handleInputBlur}
            onClick={handleInputClick}
            isReadOnly={fcProps.isReadOnly || !allowManualInput}
          />
        ) : (
          <Input
            variant="unstyled"
            inputMode="numeric"
            pattern="\d*"
            placeholder={placeholder}
            sx={styles.field}
            width="6rem"
          />
        )}
        <Text color="base.content.default">{labelSeparator}</Text>
        {hasMounted ? (
          <Input
            variant="unstyled"
            aria-label="Start date of range"
            inputMode="numeric" // Nudge Android mobile keyboard to be numeric
            pattern="\d*" // Nudge numeric keyboard on iOS Safari.
            sx={styles.field}
            width="6rem"
            as={ReactInputMask}
            mask="99/99/9999"
            value={endInputDisplay}
            onChange={handleEndDateChange}
            placeholder={placeholder}
            maskPlaceholder={placeholder}
            onClick={handleInputClick}
            ref={endInputRef}
            {...fcProps}
            onBlur={handleInputBlur}
            isReadOnly={fcProps.isReadOnly || !allowManualInput}
          />
        ) : (
          <Input
            variant="unstyled"
            inputMode="numeric"
            pattern="\d*"
            placeholder={placeholder}
            sx={styles.field}
            width="6rem"
          />
        )}
      </Stack>
    </Flex>
  )
})

DateRangePickerInput.displayName = 'DateRangePickerInput'
