import { useMemo } from 'react'
import { Box, BoxProps, useMultiStyleConfig } from '@chakra-ui/react'

import { MotionBox } from '../motion'

const ActiveIndicator = (): JSX.Element => {
  const styles = useMultiStyleConfig('ProgressIndicator')
  return <Box __css={styles.activeIndicator} />
}

interface CircleIndicatorProps extends BoxProps {
  onClick: () => void
  isActiveIndicator: boolean
}

const CircleIndicator = ({
  onClick,
  isActiveIndicator,
  ...props
}: CircleIndicatorProps): JSX.Element => {
  const styles = useMultiStyleConfig('ProgressIndicator', { isActiveIndicator })
  return (
    <Box
      __css={styles.circleIndicator}
      onClick={onClick}
      _hover={{ backgroundColor: 'secondary.300' }}
      _focus={
        isActiveIndicator
          ? undefined
          : {
              backgroundColor: 'secondary.300',
              boxShadow: `0 0 0 1px var(--chakra-colors-secondary-400)`,
            }
      }
      as="button"
      {...props}
    />
  )
}

export interface ProgressIndicatorProps {
  /**
   * The number of indicators to display
   */
  numIndicators: number
  /**
   * The current active indicator, this will be longer
   */
  currActiveIdx: number
  /**
   * Action to take when the indicator is clicked
   * @param indicatorIdx The indicator that was clicked
   */
  onClick: (indicatorIdx: number) => void
}

export const ProgressIndicator = ({
  numIndicators,
  currActiveIdx,
  onClick,
}: ProgressIndicatorProps): JSX.Element => {
  const styles = useMultiStyleConfig('ProgressIndicator')

  const indicators = useMemo(
    () => Array(numIndicators).fill(1),
    [numIndicators],
  )

  const animationProps = useMemo(() => {
    return { x: `${currActiveIdx + 0.125}rem` }
  }, [currActiveIdx])

  return (
    <Box __css={styles.container}>
      {indicators.map((_, idx) => (
        <CircleIndicator
          key={idx}
          isActiveIndicator={idx === currActiveIdx}
          onClick={() => onClick(idx)}
          aria-label={`Page ${idx + 1} of ${numIndicators}`}
        />
      ))}

      <MotionBox
        // Absolute positioning is required for the active progress indicator to slide over inactive ones
        pos="absolute"
        animate={animationProps}
        transition={{ stiffness: 100 }}
      >
        <ActiveIndicator />
      </MotionBox>
    </Box>
  )
}
