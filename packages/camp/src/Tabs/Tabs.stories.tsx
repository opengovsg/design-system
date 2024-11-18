import { TabList, TabPanel, TabPanels } from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { useDraggable } from '~/hooks/useDraggable'
import { getMobileViewParameters } from '~/utils/storybook'

import { Tab } from './Tab'
import { Tabs, TabsProps } from './Tabs'

export default {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} as Meta<TabsProps>

const TabTemplate: StoryFn<TabsProps> = (args) => {
  const { ref, onMouseDown } = useDraggable()

  return (
    <Tabs {...args}>
      <TabList ref={ref} onMouseDown={onMouseDown}>
        <Tab>Create</Tab>
        <Tab>Settings</Tab>
        <Tab>Results</Tab>
        <Tab>Overflow</Tab>
      </TabList>
      <TabPanels _dark={{ color: 'white' }}>
        <TabPanel>Content of Create tab</TabPanel>
        <TabPanel>Content of Settings tab</TabPanel>
        <TabPanel>Content of Results tab</TabPanel>
        <TabPanel>Content of Overflow tab</TabPanel>
      </TabPanels>
    </Tabs>
  )
}

export const LightLineTab = TabTemplate.bind({})

export const DarkLineTab = TabTemplate.bind({})
DarkLineTab.args = {
  bg: 'black',
  variant: 'line',
  colorMode: 'dark',
}
DarkLineTab.parameters = {
  backgrounds: { default: 'dark' },
}

export const MobileLightLineTab = TabTemplate.bind({})
MobileLightLineTab.parameters = getMobileViewParameters()

export const MobileDarkLineTab = TabTemplate.bind({})
MobileDarkLineTab.args = DarkLineTab.args
MobileDarkLineTab.parameters = {
  ...DarkLineTab.parameters,
  ...getMobileViewParameters(),
}

export const VerticalLineOrientation = TabTemplate.bind({})
VerticalLineOrientation.args = {
  orientation: 'vertical',
}

export const DarkVerticalLineOrientation = TabTemplate.bind({})
DarkVerticalLineOrientation.args = {
  ...VerticalLineOrientation.args,
  bg: 'black',
  colorMode: 'dark',
}
DarkVerticalLineOrientation.parameters = DarkLineTab.parameters
