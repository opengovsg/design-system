import { theme as blueTheme } from './blue/theme'
import { theme as coolgreyTheme } from './coolgrey/theme'
import { theme as coralTheme } from './coral/theme'
import { theme as greenTheme } from './green/theme'
import { theme as orangebrownTheme } from './orangebrown/theme'
import { theme as pinkTheme } from './pink/theme'
import { theme as tealblueTheme } from './tealblue/theme'
import { theme as violetTheme } from './violet/theme'

export const THEME_MAP: Record<string, typeof blueTheme> = {
  blue: blueTheme,
  coolgrey: coolgreyTheme,
  coral: coralTheme,
  green: greenTheme,
  orangebrown: orangebrownTheme,
  pink: pinkTheme,
  tealblue: tealblueTheme,
  violet: violetTheme,
}
