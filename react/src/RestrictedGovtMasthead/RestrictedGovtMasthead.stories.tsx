import { Meta, StoryFn } from '@storybook/react'

import { getMobileViewParameters } from '~/utils/storybook'

import {
  RestrictedGovtMasthead as RestrictedGovtMastheadComponent,
  RestrictedGovtMastheadProps,
} from './RestrictedGovtMasthead'

export default {
  title: 'Components/RestrictedGovtMasthead',
  parameters: {
    layout: 'fullscreen',
  },
  component: RestrictedGovtMastheadComponent,
  decorators: [],
} as Meta

const Template: StoryFn<RestrictedGovtMastheadProps> = (args) => (
  <RestrictedGovtMastheadComponent {...args} />
)

export const MobileDefault = Template.bind({})
MobileDefault.parameters = getMobileViewParameters()

export const MobileExpanded = Template.bind({})
MobileExpanded.parameters = MobileDefault.parameters
MobileExpanded.storyName = 'Mobile/Expanded'
MobileExpanded.args = {
  defaultIsOpen: true,
}

export const DesktopDefault = Template.bind({})

export const DesktopExpanded = Template.bind({})
DesktopExpanded.storyName = 'Desktop/Expanded'
DesktopExpanded.args = {
  defaultIsOpen: true,
}
