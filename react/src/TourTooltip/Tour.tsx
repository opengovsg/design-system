import { PropsWithChildren, useState } from 'react'
import ReactJoyride, {
  ACTIONS,
  CallBackProps,
  EVENTS,
  STATUS,
  Step,
} from 'react-joyride'
import { useToken } from '@chakra-ui/react'

import { TourContext } from './TourContext'
import { TourTooltip } from './TourTooltip'

interface FeatureTourProps {
  onClose: () => void
}

export const FeatureTour = ({
  onClose,
  children,
}: PropsWithChildren<FeatureTourProps>): JSX.Element => {
  const [stepIndex, setStepIndex] = useState<number>(0)
  const arrowColor: string = useToken('colors', 'primary.100')
  const [isPaginationClicked, setIsPaginationClicked] = useState<boolean>(false)
  const [steps, setSteps] = useState<Step[]>([])

  const handleJoyrideCallback = ({
    index,
    status,
    type,
    action,
  }: CallBackProps) => {
    if (!isPaginationClicked) {
      if (type === EVENTS.STEP_AFTER || type === EVENTS.TARGET_NOT_FOUND) {
        setStepIndex(index + 1)
      }
      if (
        status === STATUS.FINISHED ||
        status === STATUS.SKIPPED ||
        action === ACTIONS.CLOSE
      ) {
        onClose()
      }
    } else {
      setIsPaginationClicked(false)
    }
  }

  const handlePaginationCallback = (indicatorIdx: number) => {
    setIsPaginationClicked(true)
    setStepIndex(indicatorIdx)
  }

  return (
    <TourContext.Provider
      value={{
        paginationCallback: handlePaginationCallback,
        steps,
        setSteps,
      }}
    >
      <ReactJoyride
        steps={steps}
        callback={handleJoyrideCallback}
        stepIndex={stepIndex}
        continuous
        run
        hideBackButton
        floaterProps={{
          placement: 'right-start',
          styles: {
            arrow: {
              length: 8,
              spread: 16,
            },
            floaterWithAnimation: {
              transition: 'opacity 0.3s ease 0s, transform 0s ease 0s',
            },
          },
        }}
        styles={{
          options: {
            arrowColor: arrowColor,
          },
        }}
        spotlightPadding={3}
        tooltipComponent={TourTooltip}
      />
      {children}
    </TourContext.Provider>
  )
}
