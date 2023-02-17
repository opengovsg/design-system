import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'

import {
  getMobileViewParameters,
  getTabletViewParameters,
} from '~/utils/storybook'

import { ProgressIndicator, ProgressIndicatorProps } from './ProgressIndicator'

const DEFAULT_ARGS = {
  numIndicators: 2,
  currActiveIdx: 0,
}

export default {
  title: 'Components/ProgressIndicator',
  component: ProgressIndicator,
  tags: ['autodocs'],
} as Meta<ProgressIndicatorProps>

const Template: StoryFn<ProgressIndicatorProps> = ({
  numIndicators,
  currActiveIdx,
}) => {
  const [activeIdx, setActiveIdx] = useState(currActiveIdx)
  return (
    <ProgressIndicator
      numIndicators={numIndicators}
      currActiveIdx={activeIdx}
      onClick={(selected) => setActiveIdx(selected)}
    />
  )
}
export const Default = Template.bind({})
Default.args = DEFAULT_ARGS
export const Mobile = Template.bind({})
Mobile.args = DEFAULT_ARGS
Mobile.parameters = getMobileViewParameters()

export const Tablet = Template.bind({})
Tablet.args = DEFAULT_ARGS
Tablet.parameters = getTabletViewParameters()
