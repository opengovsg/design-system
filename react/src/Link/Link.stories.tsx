import Icon from '@chakra-ui/icon'
import { SimpleGrid, Stack, StackDivider, Text } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { BxRightArrowAlt } from '~/icons'

import { Link, LinkProps } from './Link'

export default {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  decorators: [],
  args: {
    size: 'md',
  },
} as Meta<LinkProps>

const Template: StoryFn<LinkProps> = (args) => <Link {...args} />
export const Default = Template.bind({})
Default.args = {
  children: 'Link',
  href: '',
}

export const Disabled = Template.bind({})
Disabled.args = {
  isDisabled: true,
  children: 'Disabled link',
  href: '',
}

export const WithExternalIcon = Template.bind({})
WithExternalIcon.args = {
  children: "This goes to Form's homepage",
  href: 'https://form.gov.sg',
  isExternal: true,
}

export const VariantInline = Template.bind({})
VariantInline.args = {
  variant: 'inline',
  children: 'Inline variant link',
  isExternal: false,
  href: '',
}

export const Sizes = () => {
  return (
    <Stack divider={<StackDivider />}>
      <Link size="sm">xs link</Link>
      <Link size="sm">sm link</Link>
      <Link size="md">md link</Link>
    </Stack>
  )
}

export const VariantStandalone = Template.bind({})
VariantStandalone.args = {
  variant: 'standalone',
  children: (
    <>
      Standalone variant link
      <Icon as={BxRightArrowAlt} fontSize="1.5rem" ml="0.5rem" />
    </>
  ),
  isExternal: false,
  href: '',
}

export const VariantStandaloneSmall = Template.bind({})
VariantStandaloneSmall.args = {
  variant: 'standalone',
  children: (
    <>
      Standalone variant link
      <Icon as={BxRightArrowAlt} fontSize="1.25rem" ml="0.5rem" />
    </>
  ),
  isExternal: false,
  href: '',
  size: 'sm',
}

const TemplateGroup: StoryFn<LinkProps> = (args) => (
  <SimpleGrid
    columns={2}
    spacing={8}
    templateColumns="max-content max-content"
    alignItems="center"
  >
    <Text>default</Text>
    <Link {...args} />
    <Text>neutral</Text>
    <Link {...args} colorScheme="neutral" />
    <Text>red</Text>
    <Link {...args} colorScheme="red" />
    <Text>blue</Text>
    <Link {...args} colorScheme="blue" />
    <Text>green</Text>
    <Link {...args} colorScheme="green" />
    <Text>yellow</Text>
    <Link {...args} colorScheme="yellow" />
    <Text>slate</Text>
    <Link {...args} colorScheme="slate" />
    <Text>grey</Text>
    <Link {...args} colorScheme="grey" />
  </SimpleGrid>
)

export const VariantInlineColorSchemes = TemplateGroup.bind({})
VariantInlineColorSchemes.args = {
  children: 'Link with colours',
  variant: 'inline',
  href: '',
}

export const VariantStandaloneColorSchemes = TemplateGroup.bind({})
VariantStandaloneColorSchemes.args = {
  children: 'Link with colours',
  variant: 'standalone',
  href: '',
}
