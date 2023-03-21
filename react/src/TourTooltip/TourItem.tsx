import {
  Children,
  createElement,
  Fragment,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useRef,
} from 'react'
import { Box, Placement, TooltipProps } from '@chakra-ui/react'

import { useTourContext } from './TourContext'

// NOTE: The `Placement` type is a combination of top/left/right/bottom
// and start/end + `auto` and `center` to fit the react joyride placement prop
export type TourTooltipPlacement =
  | Exclude<Placement, 'auto-start' | 'auto-end'>
  | 'center'

export interface TourItemProps {
  content: ReactNode
  title: ReactNode
  idx: number
  placement: TourTooltipPlacement
}

export const TourItem = ({
  content,
  title,
  idx,
  children,
}: PropsWithChildren<TourItemProps>): JSX.Element => {
  const { steps, setSteps } = useTourContext()
  const ref = useRef<HTMLDivElement>(null)
  const wrappedChildren = <Box ref={ref}>{children}</Box>
  // TODO: set at specified idx
  useEffect(
    () => setSteps([...steps, { title, content, target: ref.current || '' }]),
    [],
  )
  return wrappedChildren
}
