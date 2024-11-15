import { FC, useRef } from 'react'
import {
  RadioGroup as ChakraRadioGroup,
  RadioGroupProps as ChakraRadioGroupProps,
} from '@chakra-ui/react'

import { RadioGroupContext } from './useRadioGroupWithOthers'

/**
 * Container for a group of radio buttons.
 */
export const RadioGroup: FC<ChakraRadioGroupProps> = ({
  onChange,
  children,
  ...props
}) => {
  const othersRadioRef = useRef<HTMLInputElement>(null)
  const othersInputRef = useRef<HTMLInputElement>(null)

  return (
    <RadioGroupContext.Provider
      value={{
        othersRadioRef,
        othersInputRef,
      }}
    >
      <ChakraRadioGroup {...props} onChange={onChange}>
        {children}
      </ChakraRadioGroup>
    </RadioGroupContext.Provider>
  )
}
