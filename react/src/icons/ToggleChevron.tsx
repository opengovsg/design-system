import { Icon, type IconProps, type SystemStyleObject } from '@chakra-ui/react'

import { BxsChevronUp } from './BxsChevronUp'

export interface ToggleChevronProps extends IconProps {
  reduceMotion?: boolean
  isOpen?: boolean
  styles: SystemStyleObject
}

/**
 * ToggleChevron that gives a visual cue of the open/close state of the item.
 * It rotates `180deg` based on the open/close state.
 */

export const ToggleChevron = ({
  isOpen,
  reduceMotion,
  styles,
  ...props
}: ToggleChevronProps) => {
  const iconStyles: SystemStyleObject = {
    transform: isOpen ? 'rotate(-180deg)' : undefined,
    transition: reduceMotion ? undefined : 'transform 0.2s',
    transformOrigin: 'center',
    ...styles,
  }

  return (
    <Icon
      viewBox="0 0 24 24"
      aria-hidden
      __css={iconStyles}
      as={BxsChevronUp}
      {...props}
    />
  )
}
