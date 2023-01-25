import { ButtonGroup, SimpleGrid, Text } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { BxGitMerge } from '~/icons'

import { IconButton, IconButtonProps } from './IconButton'

export default {
  title: 'Components/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: { backgrounds: { default: 'light' } },
} as Meta

const ButtonTemplate: StoryFn<IconButtonProps> = (args) => (
  <IconButton {...args} icon={<BxGitMerge />} />
)

const ButtonGroupTemplate: StoryFn<IconButtonProps> = (args) => {
  return (
    <SimpleGrid
      columns={2}
      spacing={8}
      templateColumns="min-content auto"
      alignItems="center"
    >
      <Text>Default</Text>
      <ButtonGroup alignItems="center">
        <IconButton {...args} icon={<BxGitMerge />} size="lg" />
        <IconButton {...args} icon={<BxGitMerge />} size="md" />
      </ButtonGroup>
      <Text>Hover</Text>
      <ButtonGroup alignItems="center">
        <IconButton data-hover {...args} icon={<BxGitMerge />} size="lg" />
        <IconButton data-hover {...args} icon={<BxGitMerge />} size="md" />
      </ButtonGroup>
      <Text>Active</Text>
      <ButtonGroup alignItems="center">
        <IconButton {...args} icon={<BxGitMerge />} isActive size="lg" />
        <IconButton {...args} icon={<BxGitMerge />} isActive size="md" />
      </ButtonGroup>
      <Text>Disabled</Text>
      <ButtonGroup alignItems="center">
        <IconButton {...args} icon={<BxGitMerge />} isDisabled size="lg" />
        <IconButton {...args} icon={<BxGitMerge />} isDisabled size="md" />
      </ButtonGroup>
      <Text>Loading</Text>
      <ButtonGroup alignItems="center">
        <IconButton {...args} icon={<BxGitMerge />} isLoading size="lg" />
        <IconButton {...args} icon={<BxGitMerge />} isLoading size="md" />
      </ButtonGroup>
    </SimpleGrid>
  )
}

export const Default = ButtonTemplate.bind({})
Default.args = {
  variant: 'solid',
  children: 'Button',
  size: 'md',
  textStyle: 'subhead-1',
}

export const SolidDefault = ButtonGroupTemplate.bind({})

export const SolidCritical = ButtonGroupTemplate.bind({})
SolidCritical.args = {
  'aria-label': 'Test Storybook Icon Button',
  variant: 'solid',
  colorScheme: 'critical',
}

export const SolidSuccess = ButtonGroupTemplate.bind({})
SolidSuccess.args = {
  'aria-label': 'Test Storybook Icon Button',
  variant: 'solid',
  colorScheme: 'success',
}

export const OutlineDefault = ButtonGroupTemplate.bind({})
OutlineDefault.args = {
  'aria-label': 'Test Storybook Icon Button',
  variant: 'outline',
}

export const OutlineCritical = ButtonGroupTemplate.bind({})
OutlineCritical.args = {
  'aria-label': 'Test Storybook Icon Button',
  variant: 'outline',
  colorScheme: 'critical',
}

export const OutlineNeutral = ButtonGroupTemplate.bind({})
OutlineNeutral.args = {
  'aria-label': 'Test Storybook Icon Button',
  variant: 'outline',
  colorScheme: 'neutral',
}

export const OutlineInverse = ButtonGroupTemplate.bind({})
OutlineInverse.args = {
  'aria-label': 'Test Storybook Icon Button',
  variant: 'outline',
  colorScheme: 'inverse',
}
OutlineInverse.parameters = {
  backgrounds: { default: 'dark' },
}

export const ClearDefault = ButtonGroupTemplate.bind({})
ClearDefault.args = {
  'aria-label': 'Test Storybook Icon Button',
  variant: 'clear',
}

export const ClearNeutral = ButtonGroupTemplate.bind({})
ClearNeutral.args = {
  'aria-label': 'Test Storybook Icon Button',
  variant: 'clear',
  colorScheme: 'neutral',
}

export const ClearInverse = ButtonGroupTemplate.bind({})
ClearInverse.args = {
  'aria-label': 'Test Storybook Icon Button',
  variant: 'clear',
  colorScheme: 'inverse',
}
ClearInverse.parameters = {
  backgrounds: { default: 'dark' },
}

export const ReverseDefault = ButtonGroupTemplate.bind({})
ReverseDefault.args = {
  'aria-label': 'Test Storybook Icon Button',
  variant: 'reverse',
}
