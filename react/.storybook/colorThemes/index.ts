import { theme as blueTheme } from './blue/theme'
import { theme as coolgreyTheme } from './coolgrey/theme'
import { theme as coralTheme } from './coral/theme'
import { theme as greenTheme } from './green/theme'
import { theme as orangebrownTheme } from './orangebrown/theme'
import { theme as pinkTheme } from './pink/theme'
import { theme as tealblueTheme } from './tealblue/theme'
import { theme as violetTheme } from './violet/theme'
import { theme as FormTheme } from './Form/theme'
import { theme as AskGovTheme } from './AskGov/theme'
import { theme as RedeemTheme } from './Redeem/theme'
import { theme as Care360Theme } from './Care360/theme'
import { theme as IsomerTheme } from './Isomer/theme'
import { theme as PostmanTheme } from './Postman/theme'
import { theme as ScamShieldTheme } from './ScamShield/theme'
import { theme as VaultTheme } from './Vault/theme'

export const THEME_MAP: Record<string, typeof blueTheme> = {
  blue: blueTheme,
  coolgrey: coolgreyTheme,
  coral: coralTheme,
  green: greenTheme,
  orangebrown: orangebrownTheme,
  pink: pinkTheme,
  tealblue: tealblueTheme,
  violet: violetTheme,
  Form: FormTheme,
  AskGov: AskGovTheme,
  Redeem: RedeemTheme,
  Care360: Care360Theme,
  Isomer: IsomerTheme,
  Postman: PostmanTheme,
  ScamShield: ScamShieldTheme,
  Vault: VaultTheme,
}
