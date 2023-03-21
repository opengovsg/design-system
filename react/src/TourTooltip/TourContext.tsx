import { createContext, useContext } from 'react'
import { Step } from 'react-joyride'

type TourContextProps = {
  paginationCallback: (indicatorIdx: number) => void
  steps: Array<Step>
  setSteps: (steps: Step[]) => void
}

export const TourContext = createContext<TourContextProps | undefined>(
  undefined,
)

export const useTourContext = () => {
  const context = useContext(TourContext)

  if (context === undefined) {
    throw new Error(
      `useFeatureTourContext must be used within a FeatureTourContextProvider`,
    )
  }

  return context
}
