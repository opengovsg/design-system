import { ButtonGroup, SimpleGrid, Text } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { BxRightArrowAlt, BxUpload } from '~/icons'

import { Button, ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    backgrounds: { default: 'light' },
  },
} as Meta

const ButtonTemplate: StoryFn<ButtonProps> = (args) => <Button {...args} />

const ButtonGroupTemplate: StoryFn<ButtonProps> = (args) => {
  return (
    <SimpleGrid
      columns={2}
      spacing={8}
      templateColumns="min-content auto"
      alignItems="center"
    >
      <Text>Default</Text>
      <ButtonGroup>
        <Button {...args}>Button</Button>
        <Button leftIcon={<BxUpload fontSize="1.5rem" />} {...args}>
          Leading
        </Button>
        <Button rightIcon={<BxRightArrowAlt fontSize="1.5rem" />} {...args}>
          Trailing
        </Button>
      </ButtonGroup>
      <Text>Hover</Text>
      <ButtonGroup>
        <Button data-hover {...args}>
          Button
        </Button>
        <Button data-hover leftIcon={<BxUpload fontSize="1.5rem" />} {...args}>
          Leading
        </Button>
        <Button
          data-hover
          rightIcon={<BxRightArrowAlt fontSize="1.5rem" />}
          {...args}
        >
          Trailing
        </Button>
      </ButtonGroup>
      <Text>Active</Text>
      <ButtonGroup>
        <Button isActive {...args}>
          Button
        </Button>
        <Button isActive leftIcon={<BxUpload fontSize="1.5rem" />} {...args}>
          Leading
        </Button>
        <Button
          isActive
          rightIcon={<BxRightArrowAlt fontSize="1.5rem" />}
          {...args}
        >
          Trailing
        </Button>
      </ButtonGroup>
      <Text>Disabled</Text>
      <ButtonGroup>
        <Button isDisabled {...args}>
          Button
        </Button>
        <Button isDisabled leftIcon={<BxUpload fontSize="1.5rem" />} {...args}>
          Leading
        </Button>
        <Button
          isDisabled
          rightIcon={<BxRightArrowAlt fontSize="1.5rem" />}
          {...args}
        >
          Trailing
        </Button>
      </ButtonGroup>
      <Text>Loading</Text>
      <ButtonGroup>
        <Button isLoading {...args}>
          Button
        </Button>
        <Button
          isLoading
          leftIcon={<BxUpload fontSize="1.5rem" />}
          loadingText="Leading"
          {...args}
        ></Button>
        <Button
          isLoading
          rightIcon={<BxRightArrowAlt fontSize="1.5rem" />}
          loadingText="Trailing"
          spinnerPlacement="end"
          {...args}
        ></Button>
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

export const FullWidth = ButtonTemplate.bind({})
FullWidth.args = {
  variant: 'solid',
  children: 'Button',
  isFullWidth: true,
  textStyle: 'subhead-1',
}

export const SolidDefault = ButtonGroupTemplate.bind({})

export const SolidCritical = ButtonGroupTemplate.bind({})
SolidCritical.args = {
  variant: 'solid',
  colorScheme: 'critical',
}

export const SolidSuccess = ButtonGroupTemplate.bind({})
SolidSuccess.args = {
  variant: 'solid',
  colorScheme: 'success',
}

export const OutlineDefault = ButtonGroupTemplate.bind({})
OutlineDefault.args = {
  variant: 'outline',
}

export const OutlineCritical = ButtonGroupTemplate.bind({})
OutlineCritical.args = {
  variant: 'outline',
  colorScheme: 'critical',
}

export const OutlineNeutral = ButtonGroupTemplate.bind({})
OutlineNeutral.args = {
  variant: 'outline',
  colorScheme: 'neutral',
}

export const OutlineInverse = ButtonGroupTemplate.bind({})
OutlineInverse.args = {
  variant: 'outline',
  colorScheme: 'inverse',
}
OutlineInverse.parameters = {
  backgrounds: { default: 'dark' },
}

export const ClearDefault = ButtonGroupTemplate.bind({})
ClearDefault.args = {
  variant: 'clear',
}

export const ClearNeutral = ButtonGroupTemplate.bind({})
ClearNeutral.args = {
  variant: 'clear',
  colorScheme: 'neutral',
}

export const ClearInverse = ButtonGroupTemplate.bind({})
ClearInverse.args = {
  variant: 'clear',
  colorScheme: 'inverse',
}
ClearInverse.parameters = {
  backgrounds: { default: 'dark' },
}

export const ReverseDefault = ButtonGroupTemplate.bind({})
ReverseDefault.args = {
  variant: 'reverse',
}

export const LinkPrimary = ButtonGroupTemplate.bind({})
LinkPrimary.args = {
  variant: 'link',
  colorScheme: 'brand.primary',
}

export const Sizes = () => (
  <SimpleGrid columns={4} gap="1rem" textAlign="center">
    <Text>Solid</Text>
    <Text>Outline</Text>
    <Text>Clear</Text>
    <Text>Reverse</Text>
    <Button size="xs" variant="solid">
      extra small
    </Button>
    <Button size="xs" variant="outline">
      extra small
    </Button>
    <Button size="xs" variant="clear" colorScheme="neutral">
      extra small
    </Button>
    <Button size="xs" variant="reverse">
      extra small
    </Button>
    <Button size="sm" variant="solid">
      small
    </Button>
    <Button size="sm" variant="outline">
      small
    </Button>
    <Button size="sm" variant="clear" colorScheme="neutral">
      small
    </Button>
    <Button size="sm" variant="reverse">
      small
    </Button>
    <Button size="md" variant="solid">
      medium
    </Button>
    <Button size="md" variant="outline">
      medium
    </Button>
    <Button size="md" variant="clear" colorScheme="neutral">
      medium
    </Button>
    <Button size="md" variant="reverse">
      medium
    </Button>
    <Button size="lg" variant="solid">
      large
    </Button>
    <Button size="lg" variant="outline">
      large
    </Button>
    <Button size="lg" variant="clear" colorScheme="neutral">
      large
    </Button>
    <Button size="lg" variant="reverse">
      large
    </Button>
  </SimpleGrid>
)
