import { Box, Icon, Placement, VStack } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { BxsHelpCircle } from '~/icons/BxsHelpCircle'
import { getMobileViewParameters } from '~/utils/storybook'

import { TouchableTooltip, TouchableTooltipProps } from './Tooltip'

export default {
  title: 'Components/TouchableTooltip',
  component: TouchableTooltip,
  tags: ['autodocs'],
  decorators: [],
} as Meta

const TouchableTooltipStack = (
  args: TouchableTooltipProps & {
    labels: { value: string; placement: Placement }[]
  },
): JSX.Element => {
  return (
    // bottom margin just so that story snapshot does not get cut off at bottom
    <VStack align="left" spacing="4rem" mb="4rem">
      {args.labels.map(({ value, placement }, idx) => (
        <Box key={idx}>
          {value}
          <TouchableTooltip
            {...args}
            label="Tooltip content goes here"
            placement={placement}
          >
            <Icon as={BxsHelpCircle} aria-hidden ml="0.5rem" />
          </TouchableTooltip>
        </Box>
      ))}
    </VStack>
  )
}

const Template: StoryFn<TouchableTooltipProps> = (args) => {
  return (
    <TouchableTooltipStack
      {...args}
      labels={[
        { value: 'Tooltip on the right', placement: 'right' },
        {
          value: "Left (requires longer text so it doesn't flip right)",
          placement: 'left',
        },
        { value: 'Tooltip on top', placement: 'top' },
        { value: 'Tooltip at bottom', placement: 'bottom' },
      ]}
    />
  )
}
export const OnHover = Template.bind({})

export const OpenTooltip = Template.bind({})
OpenTooltip.args = {
  isOpen: true,
}

const MobileTemplate: StoryFn<TouchableTooltipProps> = (args) => {
  return (
    <TouchableTooltipStack
      {...args}
      labels={[
        { value: 'Right', placement: 'right' },
        { value: 'Left (requires longer text)', placement: 'left' },
        { value: 'Top', placement: 'top' },
        { value: 'Bottom', placement: 'bottom' },
        {
          value: 'Placed right but flips left automatically due to space',
          placement: 'right',
        },
        {
          value:
            'Placed left but flips right automatically due to space blah blah blah',
          placement: 'left',
        },
      ]}
    />
  )
}

export const Mobile = MobileTemplate.bind({})
Mobile.parameters = getMobileViewParameters()
