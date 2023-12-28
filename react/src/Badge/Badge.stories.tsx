import { SimpleGrid, Text } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { BxsBank, BxsCircle, BxsHeart } from '~/icons'

import { Badge, BadgeLeftIcon, BadgeProps, BadgeRightIcon } from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  decorators: [],
} as Meta

const Template: StoryFn<BadgeProps> = (args) => <Badge {...args} />

export const Solid = Template.bind({})
Solid.args = {
  colorScheme: 'success',
  children: 'Badge name',
  variant: 'solid',
}

export const SolidWithIcon = Template.bind({})
SolidWithIcon.args = {
  children: (
    <>
      <BadgeLeftIcon as={BxsBank} />
      Badge name
      <BadgeRightIcon as={BxsHeart} />
    </>
  ),
  variant: 'solid',
}

export const Subtle = Template.bind({})
Subtle.args = {
  children: 'Badge name',
  variant: 'subtle',
}

export const SubtleWithIcon = Template.bind({})
SubtleWithIcon.args = {
  children: (
    <>
      <BadgeLeftIcon as={BxsBank} />
      Badge name
      <BadgeRightIcon as={BxsHeart} />
    </>
  ),
  variant: 'subtle',
  colorScheme: 'warning',
}

export const Clear = Template.bind({})
Clear.args = {
  children: 'Badge name',
  variant: 'clear',
}

export const ClearWithIcon = Template.bind({})
ClearWithIcon.args = {
  children: (
    <>
      <BadgeLeftIcon marginEnd="0.5rem" fontSize="0.5rem" as={BxsCircle} />
      Badge name
    </>
  ),
  variant: 'clear',
  colorScheme: 'warning',
}

const TemplateGroup: StoryFn<BadgeProps> = (args) => (
  <SimpleGrid
    columns={2}
    spacing={8}
    templateColumns="max-content max-content"
    alignItems="center"
  >
    <Text>main</Text>
    <Badge {...args} colorScheme="main" />
    <Text>sub</Text>
    <Badge {...args} colorScheme="sub" />
    <Text>info</Text>
    <Badge {...args} colorScheme="info" />
    <Text>warning</Text>
    <Badge {...args} colorScheme="warning" />
    <Text>success</Text>
    <Badge {...args} colorScheme="success" />
    <Text>critical</Text>
    <Badge {...args} colorScheme="critical" />
    <Text>grey</Text>
    <Badge {...args} colorScheme="grey" />
  </SimpleGrid>
)

export const SubtleColours = TemplateGroup.bind({})
SubtleColours.args = {
  children: 'Subtle',
  variant: 'subtle',
}

export const SolidColours = TemplateGroup.bind({})
SolidColours.args = {
  children: 'Solid',
  variant: 'solid',
}

export const ClearColours = TemplateGroup.bind({})
ClearColours.args = {
  children: (
    <>
      <BadgeLeftIcon marginEnd="0.5rem" fontSize="0.5rem" as={BxsCircle} />
      Clear
    </>
  ),
  variant: 'clear',
}
