import { Stack } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'

import { viewports } from '~/utils/storybook'

import { Rating, RatingProps } from './Rating'

export default {
  title: 'Components/Field/Rating',
  component: Rating,
  decorators: [],
} as Meta

const Template: Story<RatingProps> = (args) => <Rating {...args} />

const ResponsiveGroup: Story<RatingProps> = (args) => (
  <Stack spacing="2rem">
    <Rating
      {...args}
      name={`${args.name}-1`}
      defaultValue={3}
      numberOfRatings={10}
      variant="heart"
    />
    <Rating
      {...args}
      name={`${args.name}-2`}
      numberOfRatings={4}
      defaultValue={1}
      variant="star"
    />
    <Rating
      {...args}
      name={`${args.name}-3`}
      variant="number"
      defaultValue={3}
      numberOfRatings={8}
    />
  </Stack>
)

export const Default = Template.bind({})
Default.args = {
  numberOfRatings: 10,
  variant: 'number',
  name: 'Test rating input',
}

export const WithHelperText = Template.bind({})
WithHelperText.args = {
  numberOfRatings: 10,
  variant: 'number',
  name: 'Test rating input',
  helperText: '1: Strongly agree, 10: Strongly disagree',
}

export const VariantNumber = Template.bind({})
VariantNumber.args = {
  name: 'Test rating input',
  numberOfRatings: 5,
  variant: 'number',
  defaultValue: 3,
}
VariantNumber.storyName = 'Variant/Number'

export const VariantStar = Template.bind({})
VariantStar.args = {
  name: 'Test rating input',
  numberOfRatings: 5,
  variant: 'star',
  defaultValue: 2,
}
VariantStar.storyName = 'Variant/Star'

export const VariantHeart = Template.bind({})
VariantHeart.args = {
  name: 'Test rating input',
  numberOfRatings: 5,
  variant: 'heart',
  defaultValue: 5,
}
VariantHeart.storyName = 'Variant/Heart'

export const Mobile = ResponsiveGroup.bind({})
Mobile.args = {
  name: 'Test rating input',
  helperText: '1: Strongly agree, 10: Strongly disagree',
}
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
  controls: {
    include: ['name', 'colorScheme', 'wrapComponentsPerRow', 'helperText'],
  },
  chromatic: { viewports: [viewports.xs] },
}

export const Tablet = ResponsiveGroup.bind({})
Tablet.args = {
  name: 'Test rating input',
  helperText: '1: Strongly agree, 10: Strongly disagree',
}
Tablet.parameters = {
  viewport: {
    defaultViewport: 'tablet',
  },
  controls: {
    include: ['name', 'colorScheme', 'wrapComponentsPerRow', 'helperText'],
  },
  chromatic: { viewports: [viewports.md] },
}
