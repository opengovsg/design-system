import { SimpleGrid, TagProps, Text } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { BxsInfoCircle } from '~/icons'

import { Tag, TagCloseButton, TagLeftIcon, TagRightIcon } from './Tag'

export default {
  title: 'Components/Tag',
  component: Tag,
  decorators: [],
} as Meta<TagProps>

const Template: StoryFn<TagProps> = (args) => <Tag {...args} />

export const Subtle = Template.bind({})
Subtle.args = {
  children: 'Subtle tag',
  variant: 'subtle',
}
export const Solid = Template.bind({})
Solid.args = {
  children: 'Solid tag',
  variant: 'solid',
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
  colorScheme: 'main',
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
  colorScheme: 'warning',
}

export const Rounded = Template.bind({})
Rounded.args = {
  borderRadius: 'full',
  children: (
    <>
      borderRadius: full
      <TagCloseButton />
    </>
  ),
}

export const Stretched = Template.bind({})
Stretched.args = {
  w: '100%',
  variant: 'solid',
  colorScheme: 'success',
  children: (
    <>
      width: 100%
      <TagCloseButton />
    </>
  ),
}

const TemplateGroup: StoryFn<TagProps> = (args) => (
  <SimpleGrid
    columns={5}
    spacing={8}
    templateColumns="repeat(5, max-content)"
    alignItems="center"
  >
    <Text>main</Text>
    <Tag {...args} size="sm" colorScheme="main" />
    <Tag {...args} size="sm" aria-disabled colorScheme="main" />
    <Tag {...args} colorScheme="main" />
    <Tag {...args} aria-disabled colorScheme="main" />
    <Text>warning</Text>
    <Tag {...args} size="sm" colorScheme="warning" />
    <Tag {...args} size="sm" aria-disabled colorScheme="warning" />
    <Tag {...args} colorScheme="warning" />
    <Tag {...args} aria-disabled colorScheme="warning" />
    <Text>success</Text>
    <Tag {...args} size="sm" colorScheme="success" />
    <Tag {...args} size="sm" aria-disabled colorScheme="success" />
    <Tag {...args} colorScheme="success" />
    <Tag {...args} aria-disabled colorScheme="success" />
    <Text>critical</Text>
    <Tag {...args} size="sm" colorScheme="critical" />
    <Tag {...args} size="sm" aria-disabled colorScheme="critical" />
    <Tag {...args} colorScheme="critical" />
    <Tag {...args} aria-disabled colorScheme="critical" />
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
