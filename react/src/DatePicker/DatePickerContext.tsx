import React, {
  ChangeEventHandler,
  createContext,
  FocusEventHandler,
  MouseEventHandler,
  PropsWithChildren,
  RefObject,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from 'react'
import {
  FormControlProps,
  SystemStyleObject,
  ThemingProps,
  useControllableState,
  useDisclosure,
  UseDisclosureReturn,
  useFormControlProps,
  useMultiStyleConfig,
} from '@chakra-ui/react'
import { format, isValid, parse } from 'date-fns'

import { type CalendarProps } from '~/Calendar'
import { useIsMobile } from '~/hooks'

import { DatePickerProps } from './DatePicker'
import { pickCalendarProps } from './utils'

interface DatePickerContextReturn {
  isMobile: boolean
  styles: Record<string, SystemStyleObject>
  handleInputChange: ChangeEventHandler<HTMLInputElement>
  handleInputClick: MouseEventHandler<HTMLInputElement>
  handleDateChange: (date: Date | null) => void
  calendarButtonAria: string
  inputRef: RefObject<HTMLInputElement>
  initialFocusRef: RefObject<HTMLInputElement>
  handleInputBlur: FocusEventHandler<HTMLInputElement>
  fcProps: FormControlProps
  internalInputValue: string
  internalValue: Date | null
  closeCalendarOnChange: boolean
  placeholder: string
  allowManualInput: boolean
  colorScheme?: ThemingProps<'DatePicker'>['colorScheme']
  size?: ThemingProps<'DatePicker'>['size']
  disclosureProps: UseDisclosureReturn
  renderInputElement?: () => React.ReactNode
  inputElement?: React.ReactNode
  innerRef?: React.Ref<HTMLElement>
  calendarProps: Pick<
    CalendarProps,
    | 'isCalendarFixedHeight'
    | 'monthsToDisplay'
    | 'isDateUnavailable'
    | 'defaultFocusedDate'
    | 'showOutsideDays'
    | 'showTodayButton'
    | 'shouldSetDateOnTodayButtonClick'
  >
  inputPattern?: string
}

const DatePickerContext = createContext<DatePickerContextReturn | null>(null)

interface DatePickerProviderProps extends DatePickerProps {
  innerRef?: React.Ref<HTMLElement>
}

export const DatePickerProvider = ({
  children,
  ...props
}: PropsWithChildren<DatePickerProviderProps>) => {
  const value = useProvideDatePicker(props)
  return (
    <DatePickerContext.Provider value={value}>
      {children}
    </DatePickerContext.Provider>
  )
}

export const useDatePicker = () => {
  const context = useContext(DatePickerContext)
  if (!context) {
    throw new Error('useDatePicker must be used within a DatePickerProvider')
  }
  return context
}

const useProvideDatePicker = ({
  value,
  defaultValue,
  onChange,
  inputValue,
  defaultInputValue,
  onInputValueChange,
  displayFormat = 'dd/MM/yyyy',
  dateFormat = 'dd/MM/yyyy',
  isDisabled: isDisabledProp,
  isReadOnly: isReadOnlyProp,
  isRequired: isRequiredProp,
  isInvalid: isInvalidProp,
  isPrefilled,
  locale,
  allowManualInput = true,
  allowInvalidDates = true,
  closeCalendarOnChange = true,
  onBlur,
  onClick,
  colorScheme,
  refocusOnClose = true,
  ssr,
  size,
  experimental_forceIosNumberKeyboard,
  inputElement,
  renderInputElement,
  innerRef,
  ...props
}: DatePickerProviderProps): DatePickerContextReturn => {
  const initialFocusRef = useRef<HTMLInputElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const calendarProps = pickCalendarProps(props)

  const isMobile = useIsMobile({ ssr })

  const inputPattern = useMemo(() => {
    if (experimental_forceIosNumberKeyboard) {
      return '[0-9]*'
    }
  }, [experimental_forceIosNumberKeyboard])

  const disclosureProps = useDisclosure({
    onClose: () => {
      if (!refocusOnClose) return
      // Refocus input after closing calendar.
      setTimeout(() => inputRef.current?.focus(), 0)
    },
  })

  // Date typed values of the input.
  const [internalValue, setInternalValue] = useControllableState({
    defaultValue,
    value,
    onChange,
  })

  const formatInputValue = useCallback(
    (date: Date | null) => {
      if (!date || !isValid(date)) return ''
      return format(date, displayFormat, { locale })
    },
    [displayFormat, locale],
  )

  // What is rendered as a string in the input according to given display format.
  const [internalInputValue, setInternalInputValue] = useControllableState({
    defaultValue: defaultInputValue ?? formatInputValue(internalValue),
    value: inputValue,
    onChange: onInputValueChange,
  })

  // Update input value when internal value changes.
  // This allows for any controlled state to update the rendered string too.
  useEffect(() => {
    setInternalInputValue(formatInputValue(internalValue))
    // Intentionally not including setInternalInputValue so internal input value can actually be changed.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [internalValue, formatInputValue])

  const fcProps = useFormControlProps({
    isInvalid: isInvalidProp,
    isDisabled: isDisabledProp,
    isReadOnly: isReadOnlyProp,
    isRequired: isRequiredProp,
    'aria-describedby': props['aria-describedby'],
    onFocus: props.onFocus,
    id: props.id,
  })

  const handleInputBlur: FocusEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const date = parse(internalInputValue, dateFormat, new Date())
      // Clear if input is invalid on blur if invalid dates are not allowed.
      if (!allowInvalidDates && !isValid(date)) {
        setInternalValue(null)
        setInternalInputValue('')
      }
      onBlur?.(e)
    },
    [
      allowInvalidDates,
      dateFormat,
      internalInputValue,
      onBlur,
      setInternalInputValue,
      setInternalValue,
    ],
  )

  const calendarButtonAria = useMemo(() => {
    let ariaLabel = 'Select from date picker. '
    if (internalValue) {
      if (isValid(internalValue)) {
        ariaLabel += `Selected date is ${internalValue.toDateString()}.`
      } else {
        ariaLabel += 'The current selected date is invalid.'
      }
    }
    return ariaLabel
  }, [internalValue])

  const handleDateChange = useCallback(
    (date: Date | null) => {
      if (allowInvalidDates || isValid(date) || !date) {
        setInternalValue(date)
      }
      if (date) {
        setInternalInputValue(format(date, displayFormat, { locale }))
      } else {
        setInternalInputValue('')
      }
      closeCalendarOnChange && disclosureProps.onClose()
    },
    [
      allowInvalidDates,
      closeCalendarOnChange,
      disclosureProps,
      displayFormat,
      locale,
      setInternalInputValue,
      setInternalValue,
    ],
  )

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const date = parse(event.target.value, dateFormat, new Date())
      setInternalInputValue(event.target.value)
      if (isValid(date)) {
        setInternalValue(date)
      }
    },
    [dateFormat, setInternalInputValue, setInternalValue],
  )

  const handleInputClick: MouseEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      if (!allowManualInput) {
        e.stopPropagation()
        disclosureProps.onOpen()
      }
      onClick?.(e)
    },
    [allowManualInput, disclosureProps, onClick],
  )

  const styles = useMultiStyleConfig('DatePicker', {
    size,
    colorScheme,
    isPrefilled,
  })

  const placeholder = useMemo(
    () => displayFormat.toLowerCase(),
    [displayFormat],
  )

  return {
    isMobile,
    styles,
    handleInputChange,
    handleInputClick,
    handleDateChange,
    calendarButtonAria,
    inputRef,
    initialFocusRef,
    handleInputBlur,
    fcProps,
    internalInputValue,
    internalValue,
    closeCalendarOnChange,
    placeholder,
    allowManualInput,
    colorScheme,
    size,
    disclosureProps,
    calendarProps,
    inputPattern,
    inputElement,
    renderInputElement,
    innerRef,
  }
}
