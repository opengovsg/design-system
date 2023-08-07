import { BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { Breadcrumb } from './Breadcrumb'

export default {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
} as Meta

const ButtonTemplate: StoryFn = () => (
  <Breadcrumb>
    <BreadcrumbItem>
      <BreadcrumbLink href="#">Home</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem>
      <BreadcrumbLink href="#">Docs</BreadcrumbLink>
    </BreadcrumbItem>

    <BreadcrumbItem isCurrentPage>
      <BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
    </BreadcrumbItem>
  </Breadcrumb>
)

export const Default = ButtonTemplate.bind({})
