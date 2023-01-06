import { SimpleGrid } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { Infobox, InfoboxProps } from './Infobox'

export default {
  title: 'Components/Infobox',
  component: Infobox,
  tags: ['autodocs'],
} as Meta

const InfoboxTemplate: StoryFn<InfoboxProps> = (args) => <Infobox {...args} />

export const Default = InfoboxTemplate.bind({})
Default.args = {
  children: 'You can insert a normal string here.',
  useMarkdown: false,
}

export const WithMarkdown = InfoboxTemplate.bind({})
WithMarkdown.args = {
  children: `**Markdown** is also accepted.`,
  useMarkdown: true,
}

export const Info = InfoboxTemplate.bind({})
Info.args = {
  variant: 'info',
  children: `View our [complete list](http://localhost:6006) of accepted file types. Please also read our [FAQ on email reliability](http://localhost:6006) relating to unaccepted file types.`,
  useMarkdown: true,
}

export const Warning = InfoboxTemplate.bind({})
Warning.args = {
  variant: 'warning',
  children:
    'The highlighted fields in this form have been pre-filled according to the link that you clicked. Please check that these values are what you intend to submit, and edit if necessary.',
  useMarkdown: false,
}

export const Error = InfoboxTemplate.bind({})
Error.args = {
  variant: 'error',
  children: `Only 30 MyInfo fields are allowed in Email mode (30/30). [Learn more](http://localhost:6006)`,
  useMarkdown: true,
}

export const CustomIcon = InfoboxTemplate.bind({})
CustomIcon.args = {
  variant: 'info',
  children: 'You can also provide your own icon.',
  icon: '👋',
}

export const Sizes = () => (
  <SimpleGrid columns={2} gap="1rem">
    <Infobox variant="info" size="sm" height="fit-content">
      Small info
    </Infobox>
    <Infobox variant="info" size="md" height="fit-content">
      Medium info
    </Infobox>
    <Infobox variant="warning" size="sm" height="fit-content">
      Small warning
    </Infobox>
    <Infobox variant="warning" size="md" height="fit-content">
      Medium warning
    </Infobox>
    <Infobox variant="error" size="sm" height="fit-content">
      Small error
    </Infobox>
    <Infobox variant="error" size="md" height="fit-content">
      Medium error
    </Infobox>
  </SimpleGrid>
)
