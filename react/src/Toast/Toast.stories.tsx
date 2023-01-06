/* eslint-disable @typescript-eslint/no-empty-function */
import {
  ButtonGroup,
  SimpleGrid,
  Text,
  UseToastOptions,
} from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { Button } from '~/Button'

import { Toast, ToastProps } from './Toast'
import { useToast } from './useToast'

const ToastStateProps: Record<string, ToastProps> = {
  Warning: {
    status: 'warning',
    title: '',
    description: 'This is a toast for warning states',
    isClosable: true,
  },
  Success: {
    status: 'success',
    title: '',
    description: 'This is a toast for success states',
    isClosable: true,
  },
  Error: {
    status: 'error',
    title: '',
    description: 'This is a toast for error states',
    isClosable: true,
  },
  Info: {
    status: 'info',
    title: 'Also has a title',
    description: 'This is a toast for info states',
    isClosable: true,
  },
  Loading: {
    status: 'loading',
    title: '',
    description: 'This is a toast for loading states',
    isClosable: true,
  },
}

export default {
  title: 'Components/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: { backgrounds: { default: 'light' } },
} as Meta

const ToastTemplate: StoryFn<ToastProps> = (args) => <Toast {...args} />

const ButtonWithToastTemplate: StoryFn<UseToastOptions> = (args) => {
  const toast = useToast(args)

  return (
    <ButtonGroup>
      <Button onClick={() => toast()}>Toast!</Button>
      <Button onClick={() => toast.closeAll()}>Close all</Button>
    </ButtonGroup>
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

export const Info = ToastTemplate.bind({})
Info.args = ToastStateProps.Info

export const Loading = ToastTemplate.bind({})
Loading.args = ToastStateProps.Loading

export const NotCloseable = ToastTemplate.bind({})
NotCloseable.args = {
  status: 'info',
  description: 'This toast is not closeable',
  isClosable: false,
}

export const CombinedToasts: StoryFn<ToastProps> = () => (
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
    <Text>Info</Text>
    <Toast {...ToastStateProps.Info} />
    <Text>Loading</Text>
    <Toast {...ToastStateProps.Loading} />
  </SimpleGrid>
)

export const ButtonWithToast = ButtonWithToastTemplate.bind({})
ButtonWithToast.args = {
  title: '',
  description: 'Some description',
  duration: null,
  isClosable: true,
  status: 'warning',
  position: 'top',
}
