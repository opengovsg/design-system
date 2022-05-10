import { ButtonGroup, SimpleGrid, Text } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'

import { BxRightArrowAlt, BxUpload } from '~/icons'

import { Button, ButtonProps } from './Button'
import DocumentationPage from './Button.mdx'

export default {
  title: 'Components/Button',
  component: Button,
  parameters: {
    docs: {
      page: DocumentationPage,
    },
    backgrounds: { default: 'light' },
  },
} as Meta

const ButtonTemplate: Story<ButtonProps> = (args) => <Button {...args} />

const ButtonGroupTemplate: Story<ButtonProps> = (args) => {
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
  colorScheme: 'primary',
  size: 'md',
  textStyle: 'subhead-1',
}

export const FullWidth = ButtonTemplate.bind({})
FullWidth.args = {
  variant: 'solid',
  children: 'Button',
  colorScheme: 'primary',
  isFullWidth: true,
  textStyle: 'subhead-1',
}

export const SolidPrimary = ButtonGroupTemplate.bind({})
SolidPrimary.args = {
  variant: 'solid',
  colorScheme: 'primary',
}

export const SolidDanger = ButtonGroupTemplate.bind({})
SolidDanger.args = {
  variant: 'solid',
  colorScheme: 'danger',
}

export const SolidSuccess = ButtonGroupTemplate.bind({})
SolidSuccess.args = {
  variant: 'solid',
  colorScheme: 'success',
}

export const ReversePrimary = ButtonGroupTemplate.bind({})
ReversePrimary.args = {
  variant: 'reverse',
  colorScheme: 'primary',
}

export const OutlinePrimary = ButtonGroupTemplate.bind({})
OutlinePrimary.args = {
  variant: 'outline',
  colorScheme: 'primary',
}

export const ClearSecondary = ButtonGroupTemplate.bind({})
ClearSecondary.args = {
  variant: 'clear',
  colorScheme: 'secondary',
}

export const LinkPrimary = ButtonGroupTemplate.bind({})
LinkPrimary.args = {
  variant: 'link',
  colorScheme: 'primary',
}
