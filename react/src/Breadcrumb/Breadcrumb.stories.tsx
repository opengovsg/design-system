import {
  BreadcrumbItem,
  BreadcrumbLink,
  Divider,
  Stack,
} from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { Breadcrumb, BreadcrumbProps } from './Breadcrumb'

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
} as Meta

const BreadcrumbTemplate: StoryFn<BreadcrumbProps> = (args) => (
  <Breadcrumb {...args}>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink href="#">Docs</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem isCurrentPage>
      <BreadcrumbLink href="#">{`Breadcrumb ${
        args.size ?? ''
      }`}</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
)

export const Default = BreadcrumbTemplate.bind({})

export const HoverFocusStates = () => {
  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink data-hover href="#">
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink data-focus-visible href="#">
          Docs
        </BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export const SlashSeparator = BreadcrumbTemplate.bind({})
SlashSeparator.args = {
  separator: '/',
}

export const Sizes = () => {
  return (
    <Stack>
      <BreadcrumbTemplate size="xs" />
      <BreadcrumbTemplate size="sm" />
      <BreadcrumbTemplate size="md" />
      <Divider />
      <BreadcrumbTemplate separator="/" size="xs" />
      <BreadcrumbTemplate separator="/" size="sm" />
      <BreadcrumbTemplate separator="/" size="md" />
    </Stack>
  )
}
