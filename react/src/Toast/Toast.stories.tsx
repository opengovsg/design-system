import { SimpleGrid, Text } from '@chakra-ui/react'
import { Meta, Story } from '@storybook/react'

import { Button } from '~/Button'

import { Toast, ToastProps } from './Toast'
import { useToast, UseToastProps } from './useToast'

const ToastStateProps: Record<string, ToastProps> = {
  Warning: {
    status: 'warning',
    title: '',
    description: 'This is a toast for warning states',
    isClosable: true,
    onClose: () => {},
  },
  Success: {
    status: 'success',
    title: '',
    description: 'This is a toast for success states',
    isClosable: true,
    onClose: () => {},
  },
  Error: {
    status: 'danger',
    title: '',
    description: 'This is a toast for error states',
    isClosable: true,
    onClose: () => {},
  },
}

export default {
  title: 'Components/Toast',
  component: Toast,
  parameters: { backgrounds: { default: 'light' } },
  decorators: [
    // NOTE: The toast component requires this to display properly with theming.
    (Story) => (
      <>
        <Story />
      </>
    ),
  ],
} as Meta

const ToastTemplate: Story<ToastProps> = (args) => <Toast {...args} />

const ButtonWithToastTemplate: Story<UseToastProps> = (args) => {
  const toast = useToast()
  return (
    <Button
      onClick={() =>
        toast({
          onCloseComplete: () => console.log('hi'),
          ...args,
        })
      }
    >
      Toast!
    </Button>
  )
}

export const WithMarkdown = ToastTemplate.bind({})
WithMarkdown.args = {
  ...ToastStateProps.Success,
  title: `Markdown can be used in the _title_`,
  description: `Markdown can be used in the _description_ too`,
  useMarkdown: true,
}

export const Success = ToastTemplate.bind({})
Success.args = ToastStateProps.Success

export const Error = ToastTemplate.bind({})
Error.args = ToastStateProps.Error

export const Warning = ToastTemplate.bind({})
Warning.args = ToastStateProps.Warning

export const ButtonWithToast = ButtonWithToastTemplate.bind({})
ButtonWithToast.args = {
  title: '',
  description: 'Some description',
  duration: 6000,
  isClosable: true,
  status: 'warning',
  position: 'top',
}

export const CombinedToasts: Story<ToastProps> = () => (
  <SimpleGrid
    columns={3}
    spacing={8}
    templateColumns="min-content auto"
    alignItems="center"
  >
    <Text>Success</Text>
    <Toast {...ToastStateProps.Success} />
    <Text>Warning</Text>
    <Toast {...ToastStateProps.Warning} />
    <Text>Error</Text>
    <Toast {...ToastStateProps.Error} />
  </SimpleGrid>
)
