import { theme as armouryTheme } from './Armoury/theme'
import { theme as askGovTheme } from './AskGov/theme'
import { theme as betaDarkTheme } from './BETA dark/theme'
import { theme as bbBearTheme } from './BbBear/theme'
import { theme as calSgTheme } from './CalSG/theme'
import { theme as care360Theme } from './Care360/theme'
import { theme as careersTheme } from './Careers/theme'
import { theme as distributeTheme } from './Distribute/theme'
import { theme as erpxTheme } from './ERPX/theme'
import { theme as engageTheme } from './Engage/theme'
import { theme as formTheme } from './Form/theme'
import { theme as govsgTheme } from './Govsg/theme'
import { theme as isomerTheme } from './Isomer/theme'
import { theme as messageTheme } from './Message/theme'
import { theme as pairTheme } from './Pair/theme'
import { theme as paySgTheme } from './PaySG/theme'
import { theme as phonebookTheme } from './Phonebook/theme'
import { theme as pinPointTheme } from './PinPoint/theme'
import { theme as postmanTheme } from './Postman/theme'
import { theme as redeemTheme } from './Redeem/theme'
import { theme as scamShieldTheme } from './ScamShield/theme'
import { theme as tealsTheme } from './TEALS/theme'
import { theme as vaultTheme } from './Vault/theme'
import { theme as activesgTheme } from './activesg/theme'
import { theme as byosTheme } from './byos/theme'
import { theme as defaultTheme } from './default/theme'
import { theme as folkTheme } from './folk/theme'
import { theme as forestTheme } from './forest/theme'
import { theme as fynderTheme } from './fynder/theme'
import { theme as hichewTheme } from './hichew/theme'
import { theme as jujubeTheme } from './jujube/theme'
import { theme as lettersgTheme } from './lettersg/theme'
import { theme as pslTheme } from './psl/theme'
import { theme as sgidSingpassTheme } from './sgid-singpass/theme'
import { theme as whaleTheme } from './whale/theme'

export const THEME_MAP: Record<string, typeof defaultTheme> = {
  armoury: armouryTheme,
  askGov: askGovTheme,
  betaDark: betaDarkTheme,
  bbBear: bbBearTheme,
  calSg: calSgTheme,
  care360: care360Theme,
  careers: careersTheme,
  distribute: distributeTheme,
  erpx: erpxTheme,
  engage: engageTheme,
  form: formTheme,
  govsg: govsgTheme,
  isomer: isomerTheme,
  message: messageTheme,
  pair: pairTheme,
  paySg: paySgTheme,
  phonebook: phonebookTheme,
  pinPoint: pinPointTheme,
  postman: postmanTheme,
  redeem: redeemTheme,
  scamShield: scamShieldTheme,
  teals: tealsTheme,
  vault: vaultTheme,
  activesg: activesgTheme,
  byos: byosTheme,
  default: defaultTheme,
  folk: folkTheme,
  forest: forestTheme,
  fynder: fynderTheme,
  hichew: hichewTheme,
  jujube: jujubeTheme,
  lettersg: lettersgTheme,
  psl: pslTheme,
  sgidSingpass: sgidSingpassTheme,
  whale: whaleTheme,
}
