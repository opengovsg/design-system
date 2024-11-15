import {
  Avatar,
  AvatarBadge,
  AvatarGroup,
  AvatarGroupProps,
  AvatarProps,
  SimpleGrid,
  Text,
  ThemingProps,
} from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { BxsUser } from '~/icons/BxsUser'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    name: 'ABC',
    size: 'md',
  },
} as Meta<AvatarProps>

const Template: StoryFn<AvatarProps> = (args) => {
  return <Avatar {...args} />
}

const SizesTemplate: StoryFn = () => {
  return (
    <SimpleGrid
      columns={4}
      spacing={8}
      templateColumns="min-content min-content min-content auto"
      alignItems="center"
    >
      <Text>2xs</Text>
      <Avatar name="ABC" size="2xs" />
      <Avatar name="ABC" variant="subtle" size="2xs">
        <AvatarBadge />
      </Avatar>
      <Avatar size="2xs" icon={<BxsUser />}>
        <AvatarBadge />
      </Avatar>
      <Text>xs</Text>
      <Avatar name="ABC" size="xs" />
      <Avatar name="ABC" variant="subtle" size="xs">
        <AvatarBadge />
      </Avatar>
      <Avatar size="xs" icon={<BxsUser />}>
        <AvatarBadge />
      </Avatar>
      <Text>sm</Text>
      <Avatar name="ABC" size="sm" />
      <Avatar name="ABC" variant="subtle" size="sm">
        <AvatarBadge />
      </Avatar>
      <Avatar size="sm" icon={<BxsUser />}>
        <AvatarBadge />
      </Avatar>
      <Text>md</Text>
      <Avatar name="ABC" size="md" />
      <Avatar name="ABC" variant="subtle" size="md">
        <AvatarBadge />
      </Avatar>
      <Avatar size="md" icon={<BxsUser />}>
        <AvatarBadge />
      </Avatar>
      <Text>lg</Text>
      <Avatar name="ABC" size="lg" />
      <Avatar name="ABC" variant="subtle" size="lg">
        <AvatarBadge />
      </Avatar>
      <Avatar size="lg" icon={<BxsUser />}>
        <AvatarBadge />
      </Avatar>
      <Text>xl</Text>
      <Avatar name="ABC" size="xl" />
      <Avatar name="ABC" variant="subtle" size="xl">
        <AvatarBadge />
      </Avatar>
      <Avatar size="xl" icon={<BxsUser />}>
        <AvatarBadge />
      </Avatar>
    </SimpleGrid>
  )
}

const ColoursTemplate: StoryFn = ({
  variant,
}: {
  variant?: ThemingProps<'Avatar'>['variant']
}) => {
  return (
    <SimpleGrid
      columns={4}
      spacing={8}
      templateColumns="min-content min-content min-content auto"
      alignItems="center"
    >
      <Text>main</Text>
      <Avatar name="ABC" colorScheme="main" variant={variant} />
      <Avatar name="ABC" colorScheme="main" variant={variant ?? 'subtle'}>
        <AvatarBadge />
      </Avatar>
      <Avatar colorScheme="main" variant={variant} icon={<BxsUser />}>
        <AvatarBadge />
      </Avatar>
      <Text>sub</Text>
      <Avatar name="ABC" colorScheme="sub" variant={variant} />
      <Avatar name="ABC" colorScheme="sub" variant={variant ?? 'subtle'}>
        <AvatarBadge />
      </Avatar>
      <Avatar colorScheme="sub" variant={variant} icon={<BxsUser />}>
        <AvatarBadge />
      </Avatar>
      <Text>green</Text>
      <Avatar name="ABC" colorScheme="green" variant={variant} />
      <Avatar name="ABC" colorScheme="green" variant={variant ?? 'subtle'}>
        <AvatarBadge />
      </Avatar>
      <Avatar colorScheme="green" variant={variant} icon={<BxsUser />}>
        <AvatarBadge />
      </Avatar>
      <Text>red</Text>
      <Avatar name="ABC" colorScheme="red" variant={variant} />
      <Avatar name="ABC" colorScheme="red" variant={variant ?? 'subtle'}>
        <AvatarBadge />
      </Avatar>
      <Avatar colorScheme="red" variant={variant} icon={<BxsUser />}>
        <AvatarBadge />
      </Avatar>
      <Text>yellow</Text>
      <Avatar name="ABC" colorScheme="yellow" variant={variant} />
      <Avatar name="ABC" colorScheme="yellow" variant={variant ?? 'subtle'}>
        <AvatarBadge />
      </Avatar>
      <Avatar colorScheme="yellow" variant={variant} icon={<BxsUser />}>
        <AvatarBadge />
      </Avatar>
    </SimpleGrid>
  )
}

export const DefaultVariantSolid = Template.bind({})

export const VariantSolidColours = ColoursTemplate.bind({})
VariantSolidColours.args = {
  variant: 'solid',
}

export const VariantSubtleColours = ColoursTemplate.bind({})
VariantSubtleColours.args = {
  variant: 'subtle',
}

export const VariantSubtle = Template.bind({})
VariantSubtle.args = {
  variant: 'subtle',
}

export const WithNotification = Template.bind({})
WithNotification.args = {
  children: <AvatarBadge />,
}

export const WithBorder = Template.bind({})
WithBorder.args = {
  boxShadow: `0 0 0 4px var(--chakra-colors-blue-300)`,
}

export const Sizes = SizesTemplate.bind({})

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
