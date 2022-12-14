import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupProps,
  AvatarProps,
  SimpleGrid,
  Text,
} from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { BxsUser } from '~/icons/BxsUser'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  args: {
    name: 'ABC',
    size: 'md',
    colorScheme: 'main',
  },
} as Meta<AvatarProps>

const Template: StoryFn<AvatarProps> = (args) => {
  return <Avatar {...args} />
}

const VariantsTemplate: StoryFn = () => {
  return (
    <SimpleGrid
      columns={4}
      spacing={8}
      templateColumns="min-content min-content min-content auto"
      alignItems="center"
    >
      <Text>2xs</Text>
      <Avatar name="ABC" size="2xs" />
      <Avatar name="ABC" colorScheme="main-light" size="2xs">
        <AvatarBadge />
      </Avatar>
      <Avatar size="2xs" icon={<BxsUser />}>
        <AvatarBadge />
      </Avatar>
      <Text>xs</Text>
      <Avatar name="ABC" size="xs" />
      <Avatar name="ABC" colorScheme="main-light" size="xs">
        <AvatarBadge />
      </Avatar>
      <Avatar size="xs" icon={<BxsUser />}>
        <AvatarBadge />
      </Avatar>
      <Text>sm</Text>
      <Avatar name="ABC" size="sm" />
      <Avatar name="ABC" colorScheme="main-light" size="sm">
        <AvatarBadge />
      </Avatar>
      <Avatar size="sm" icon={<BxsUser />}>
        <AvatarBadge />
      </Avatar>
      <Text>md</Text>
      <Avatar name="ABC" size="md" />
      <Avatar name="ABC" colorScheme="main-light" size="md">
        <AvatarBadge />
      </Avatar>
      <Avatar size="md" icon={<BxsUser />}>
        <AvatarBadge />
      </Avatar>
      <Text>lg</Text>
      <Avatar name="ABC" size="lg" />
      <Avatar name="ABC" colorScheme="main-light" size="lg">
        <AvatarBadge />
      </Avatar>
      <Avatar size="lg" icon={<BxsUser />}>
        <AvatarBadge />
      </Avatar>
      <Text>xl</Text>
      <Avatar name="ABC" size="xl" />
      <Avatar name="ABC" colorScheme="main-light" size="xl">
        <AvatarBadge />
      </Avatar>
      <Avatar size="xl" icon={<BxsUser />}>
        <AvatarBadge />
      </Avatar>
    </SimpleGrid>
  )
}

export const Default = Template.bind({})

export const Light = Template.bind({})
Light.args = {
  colorScheme: 'main-light',
}

export const WithNotification = Template.bind({})
WithNotification.args = {
  children: <AvatarBadge />,
}

export const WithBorder = Template.bind({})
WithBorder.args = {
  boxShadow: `0 0 0 4px var(--chakra-colors-blue-300)`,
}

export const Variants = VariantsTemplate.bind({})

export const AvatarGrouping: StoryFn<AvatarGroupProps> = (props) => {
  return (
    <AvatarGroup max={3} size="md" {...props}>
      <Avatar name="Kar Rui" />
      <Avatar name="Pearly" />
      <Avatar name="Khaleedah" />
      <Avatar name="Others" />
    </AvatarGroup>
  )
}
