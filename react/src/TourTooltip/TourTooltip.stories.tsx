import { Box, Icon, Placement, TooltipProps, VStack } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { BxsHelpCircle } from '~/icons/BxsHelpCircle'
import { getMobileViewParameters } from '~/utils/storybook'

import { FeatureTour } from './Tour'
import { TourItem, TourTooltipPlacement } from './TourItem'
import { TourTooltip } from './TourTooltip'

export default {
  title: 'Components/TourTooltip',
  component: TourTooltip,
  tags: ['autodocs'],
  decorators: [],
} as Meta

type StepProps = {
  title: string
  content: string
  placement: TourTooltipPlacement
}

const TooltipStack = (args: { labels: StepProps[] }): JSX.Element => {
  return (
    <VStack align="left" spacing={4}>
      {args.labels.map(({ title, content, placement }, idx) => (
        <TourItem
          idx={idx}
          key={idx}
          title={title}
          content={content}
          placement={placement}
        />
      ))}
    </VStack>
  )
}

const Template: StoryFn<{ labels: StepProps[] }> = (args) => {
  return (
    <FeatureTour onClose={() => console.log('closed')}>
      <TooltipStack
        labels={[
          {
            title: 'Tooltip on the right',
            content: 'some random content',
            placement: 'right',
          },
          {
            title: "Left (requires longer text so it doesn't flip right)",
            content: 'some random content',
            placement: 'left',
          },
          {
            title: 'Tooltip on top',
            content: 'some random content',
            placement: 'top',
          },
          {
            title: 'Tooltip at bottom',
            content: 'some random content',
            placement: 'bottom',
          },
        ]}
      />
    </FeatureTour>
  )
}
export const TooltipOnHover = Template.bind({})
