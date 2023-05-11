import { Meta, StoryFn } from '@storybook/react'
import { ColourTable, ColourTableProps } from './ColourTable'

const meta: Meta<ColourTableProps> = {
  title: 'Foundation/Colours',
  component: ColourTable,
  decorators: [],
}
export default meta

const createPalette = (palette: string, shades: string[] = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
  ]) => {
  return shades.map((shade) => ({
    palette,
    shade,
  }))
}

const Template: StoryFn<ColourTableProps> = (args) => <ColourTable {...args} />

export const BrandPrimary = Template.bind({})
BrandPrimary.args = {
  label: 'Brand primary colours',
  colours: createPalette('brand.primary'),
}
BrandPrimary.storyName = 'Brand/Primary'

export const BrandSecondary = Template.bind({})
BrandSecondary.args = {
  label: 'Brand secondary colours',
  colours: createPalette('brand.secondary'),
}
BrandSecondary.storyName = 'Brand/Secondary'

export const Blue = Template.bind({})
Blue.args = {
  label: 'Blue colours',
  colours: createPalette('blue'),
}

export const Red = Template.bind({})
Red.args = {
  label: 'Red colours',
  colours: createPalette('red'),
}

export const Green = Template.bind({})
Green.args = {
  label: 'Green colours',
  colours: createPalette('green'),
}

export const Yellow = Template.bind({})
Yellow.args = {
  label: 'Yellow colours',
  colours: createPalette('yellow'),
}

export const Slate = Template.bind({})
Slate.args = {
  label: 'Slate colours',
  colours: createPalette('slate'),
}

export const Grey = Template.bind({})
Grey.args = {
  label: 'Grey colours',
  colours: createPalette('grey'),
}

export const Skin = Template.bind({})
Skin.args = {
  label: 'Skin colours',
  colours: createPalette('skin', ['1base',
    '1shadow', '2base', '2shadow',
    '3base', '3shadow', '4base', '4shadow',
    '5base', '5shadow', '6base', '6shadow',
  ]),
}
  