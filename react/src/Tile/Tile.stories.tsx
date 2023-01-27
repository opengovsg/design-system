import { useState } from 'react'
import { ListItem, Stack, UnorderedList } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'
import { values } from 'lodash'

import { Badge } from '~/Badge'
import { BxLockAlt, BxMailSend } from '~/icons'

import { Tile, TileProps } from './Tile'

export default {
  title: 'Components/Tiles',
  component: Tile,
  tags: ['autodocs'],
  decorators: [],
} as Meta

const StorybookListChildrenExample = ({
  listTitle,
  listItems = [],
}: {
  listTitle: string
  listItems: string[]
}) => (
  <>
    <Tile.Text textStyle="subhead-2">{listTitle}</Tile.Text>
    <UnorderedList>
      {listItems.map((text, i) => (
        <ListItem textStyle="body-2" textAlign="left" key={i}>
          <Tile.Text>{text}</Tile.Text>
        </ListItem>
      ))}
    </UnorderedList>
  </>
)

interface TileTemplateProps extends TileProps {
  /**
   * This is a story-only prop, and NOT a prop of the component itself.
   * Use the `Tile.Title` subcomponent to render the title.
   */
  title: string

  /**
   * This is a story-only prop, and NOT a prop of the component itself.
   * Use the `Tile.Subtitle` subcomponent to render the title.
   */
  subtitle: string
  /**
   * This is a story-only prop, and NOT a prop of the component itself.
   */
  listTitle: string
  /**
   * This is a story-only prop, and NOT a prop of the component itself.
   */
  listItems: Record<string, string>
}

const Template: StoryFn<TileTemplateProps> = ({
  title,
  subtitle,
  listTitle,
  listItems,
  ...args
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const hasDescription = listTitle || listItems
  return (
    <Tile
      {...args}
      onClick={() => setIsClicked(!isClicked)}
      isSelected={isClicked}
    >
      <Tile.Title>{title}</Tile.Title>
      <Tile.Subtitle>{subtitle}</Tile.Subtitle>
      {hasDescription && (
        <StorybookListChildrenExample
          listTitle={listTitle}
          listItems={values(listItems)}
        />
      )}
    </Tile>
  )
}

export const Complex = Template.bind({})
Complex.args = {
  variant: 'complex',
  title: 'Complex',
  subtitle: 'Receive responses in forms',
  badge: <Badge colorScheme="success">recommended</Badge>,
  icon: BxLockAlt,
  listTitle: 'description',
  listItems: {
    1: 'item 1',
    2: 'item 2',
  },
}

export const Simple = Template.bind({})
Simple.args = {
  variant: 'simple',
  title: 'Simple',
  subtitle: 'Receive responses in forms',
  icon: BxMailSend,
}

export const Playground: StoryFn = () => {
  const [selected, setSelected] = useState('')

  return (
    <Stack
      width={{ md: '100%' }}
      direction={{ base: 'column', md: 'row' }}
      spacing="1rem"
    >
      <StorageTile
        onClick={() => setSelected('storage')}
        isSelected={selected === 'storage'}
      />
      <EmailTile
        onClick={() => setSelected('email')}
        isSelected={selected === 'email'}
      />
    </Stack>
  )
}

interface StoryTileProps {
  onClick: () => void
  isSelected?: boolean
}

const EmailTile = ({ onClick, isSelected }: StoryTileProps) => (
  <Tile
    variant="complex"
    icon={BxMailSend}
    isSelected={isSelected}
    onClick={onClick}
    flex={1}
  >
    <Tile.Title>Email Mode</Tile.Title>
    <Tile.Subtitle>Receive responses in your inbox</Tile.Subtitle>
    <StorybookListChildrenExample
      listTitle="Who is it for:"
      listItems={['Emailed copy of response', 'MyInfo fields']}
    />
  </Tile>
)

const StorageTile = ({ onClick, isSelected }: StoryTileProps) => (
  <Tile
    variant="complex"
    icon={BxLockAlt}
    badge={<Badge colorScheme="success">recommended</Badge>}
    isSelected={isSelected}
    onClick={onClick}
    flex={1}
  >
    <Tile.Title>Storage Mode</Tile.Title>
    <Tile.Subtitle>Receive responses in Form</Tile.Subtitle>
    <StorybookListChildrenExample
      listTitle="Who is it for:"
      listItems={['High-volume forms', 'End to end encryption needs']}
    />
  </Tile>
)
