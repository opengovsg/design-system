import { useState } from 'react'
import { Box, Flex, Stack, Text } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { Button } from '~/Button'

import { Searchbar, SearchbarProps } from './Searchbar'
import { useSearchbar } from './useSearchbar'

export default {
  title: 'Templates/Searchbar',
  component: Searchbar,
  tags: ['autodocs'],
  decorators: [],
  args: {
    defaultIsExpanded: false,
    onSearch: (query) => console.log(query),
  },
} as Meta<SearchbarProps>

const Template: StoryFn<SearchbarProps> = (args) => <Searchbar {...args} />

export const Default = Template.bind({})

export const ExpandableClosed = Template.bind({})
ExpandableClosed.args = {
  defaultIsExpanded: false,
}
ExpandableClosed.storyName = 'Expandable/Closed'

export const ExpandableOpen = Template.bind({})
ExpandableOpen.args = {
  defaultIsExpanded: true,
  defaultValue: 'Search field filled',
}
ExpandableOpen.storyName = 'Expandable/Open'

export const Controlled: StoryFn<SearchbarProps> = (args) => {
  const [state, setState] = useState<string>('')
  return (
    <Stack direction="column" align="flex-start">
      <Text>External State: {state}</Text>
      <Searchbar
        {...args}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </Stack>
  )
}
Controlled.args = {
  defaultIsExpanded: true,
}

export const Sizes: StoryFn<SearchbarProps> = (args) => {
  return (
    <Stack direction="column" align="flex-start">
      <Searchbar {...args} size="xs" />
      <Searchbar {...args} size="sm" />
      <Searchbar {...args} size="md" />
    </Stack>
  )
}
Sizes.args = {
  defaultIsExpanded: true,
}

export const Playground: StoryFn<SearchbarProps> = ({
  isExpanded: isInitiallyExpanded,
  ...args
}) => {
  const { isExpanded, inputRef, handleExpansion, handleCollapse } =
    useSearchbar({ isInitiallyExpanded })

  return (
    <Box
      bg="brand.primary.50"
      p="2.625rem"
      color="base.content.strong"
      transitionProperty="position"
    >
      <Text textStyle="h2">Form examples</Text>
      <Flex justify="space-between">
        <Text textStyle="body-1">Explore forms and use as a template</Text>
        <Flex align="center" maxW="25rem" justify="flex-end">
          <Searchbar
            ref={inputRef}
            onExpansion={handleExpansion}
            isExpanded={isExpanded}
            {...args}
          />
          {isExpanded && (
            <Button
              variant="clear"
              ml="1rem"
              colorScheme="neutral"
              onClick={handleCollapse}
            >
              Reset
            </Button>
          )}
        </Flex>
      </Flex>
    </Box>
  )
}

Playground.args = {
  onSearch: (query) => alert(`${query} is being searched`),
  isExpanded: false,
}
