import { Meta, Story } from '@storybook/react'

import { viewports } from '~/utils/storybook'

import { YesNo, YesNoProps } from './YesNo'

export default {
  title: 'Components/YesNo',
  component: YesNo,
  decorators: [],
} as Meta

const Template: Story<YesNoProps> = (args) => <YesNo {...args} />
export const Default = Template.bind({})
Default.args = {
  name: 'testInput',
}

export const Selected = Template.bind({})
Selected.args = {
  name: 'testInput',
  defaultValue: 'yes',
}
Selected.parameters = {
  controls: {
    include: ['name', 'isDisabled'],
  },
}

export const Disabled = Template.bind({})
Disabled.args = {
  name: 'testInput',
  defaultValue: 'no',
  isDisabled: true,
}
Disabled.parameters = {
  controls: {
    include: ['name', 'isDisabled'],
  },
}

export const Mobile = Template.bind({})
Mobile.args = {
  name: 'testMobileInput',
}
Mobile.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
  chromatic: { viewports: [viewports.xs] },
}

export const Tablet = Template.bind({})
Tablet.args = {
  name: 'testTabletInput',
}
Tablet.parameters = {
  viewport: {
    defaultViewport: 'tablet',
  },
  chromatic: { viewports: [viewports.md] },
}
