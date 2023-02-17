import { Fragment, useMemo, useState } from 'react'
import { DarkMode } from '@chakra-ui/react'
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

interface TemplateProps extends ProgressIndicatorProps {
  colorMode: 'light' | 'dark'
}

const Template: StoryFn<TemplateProps> = ({
  colorMode,
  numIndicators,
  currActiveIdx,
}) => {
  const [activeIdx, setActiveIdx] = useState(currActiveIdx)
  const ColorModeWrapper = useMemo(() => {
    if (colorMode === 'dark') {
      return DarkMode
    }
    return Fragment
  }, [colorMode])

  return (
    <ColorModeWrapper>
      <ProgressIndicator
        numIndicators={numIndicators}
        currActiveIdx={activeIdx}
        onClick={(selected) => setActiveIdx(selected)}
      />
    </ColorModeWrapper>
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

export const DefaultDark = Template.bind({})
DefaultDark.args = { colorMode: 'dark', ...DEFAULT_ARGS }
DefaultDark.parameters = {
  backgrounds: { default: 'dark' },
}
