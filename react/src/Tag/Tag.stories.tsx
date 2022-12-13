import { SimpleGrid, TagProps, Text } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'

import { BxsInfoCircle } from '~/icons'

import { Tag, TagCloseButton, TagLeftIcon, TagRightIcon } from './Tag'

export default {
  title: 'Components/Tag',
  component: Tag,
  decorators: [],
} as Meta

const Template: Story<TagProps> = (args) => <Tag {...args} />

export const Subtle = Template.bind({})
Subtle.args = {
  children: 'Subtle tag',
  variant: 'subtle',
}
export const Solid = Template.bind({})
Solid.args = {
  children: 'Solid tag',
  variant: 'solid',
  colorScheme: 'brand.secondary',
}

export const WithCloseButton = Template.bind({})
WithCloseButton.args = {
  children: (
    <>
      Solid tag
      <TagCloseButton />
    </>
  ),
  variant: 'subtle',
  colorScheme: 'brand.secondary',
}

export const WithLeftRightIcon = Template.bind({})
WithLeftRightIcon.args = {
  children: (
    <>
      <TagLeftIcon as={BxsInfoCircle} />
      Solid tag
      <TagRightIcon as={BxsInfoCircle} />
    </>
  ),
  variant: 'solid',
  colorScheme: 'brand.secondary',
}

const TemplateGroup: Story<TagProps> = (args) => (
  <SimpleGrid
    columns={3}
    spacing={8}
    templateColumns="max-content max-content max-content"
    alignItems="center"
  >
    <Text>primary</Text>
    <Tag {...args} colorScheme="brand.primary" />
    <Tag {...args} aria-disabled colorScheme="brand.primary" />
    <Text>secondary</Text>
    <Tag {...args} colorScheme="brand.secondary" />
    <Tag {...args} aria-disabled colorScheme="brand.secondary" />
    <Text>warning</Text>
    <Tag {...args} colorScheme="warning" />
    <Tag {...args} aria-disabled colorScheme="warning" />
    <Text>success</Text>
    <Tag {...args} colorScheme="success" />
    <Tag {...args} aria-disabled colorScheme="success" />
    <Text>neutral</Text>
    <Tag {...args} colorScheme="neutral" />
    <Tag {...args} aria-disabled colorScheme="neutral" />
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
