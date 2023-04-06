import { theme as AskGovTheme } from './AskGov/theme'
import { theme as BbBearTheme } from './BbBear/theme'
import { theme as Care360Theme } from './Care360/theme'
import { theme as defaultTheme } from './default/theme'
import { theme as forestTheme } from './forest/theme'
import { theme as FormTheme } from './Form/theme'
import { theme as hichewTheme } from './hichew/theme'
import { theme as IsomerTheme } from './Isomer/theme'
import { theme as jujubeTheme } from './jujube/theme'
import { theme as PostmanTheme } from './Postman/theme'
import { theme as pslTheme } from './psl/theme'
import { theme as RedeemTheme } from './Redeem/theme'
import { theme as ScamShieldTheme } from './ScamShield/theme'
import { theme as VaultTheme } from './Vault/theme'
import { theme as whaleTheme } from './whale/theme'
import { theme as byosTheme } from './byos/theme'
import { theme as calSgTheme } from './CalSG/theme'
import { theme as distributeTheme } from './Distribute/theme'
import { theme as folkTheme } from './folk/theme'
import { theme as pairTheme } from './Pair/theme'
import { theme as paySg } from './PaySG/theme'

export const THEME_MAP: Record<string, typeof defaultTheme> = {
  default: defaultTheme,
  AskGov: AskGovTheme,
  byos: byosTheme,
  CalSG: calSgTheme,
  Care360: Care360Theme,
  Distribute: distributeTheme,
  folk: folkTheme,
  Form: FormTheme,
  Isomer: IsomerTheme,
  Pair: pairTheme,
  PaySG: paySg,
  Redeem: RedeemTheme,
  Postman: PostmanTheme,
  ScamShield: ScamShieldTheme,
  Vault: VaultTheme,
  forest: forestTheme,
  BbBear: BbBearTheme,
  whale: whaleTheme,
  hichew: hichewTheme,
  jujube: jujubeTheme,
  psl: pslTheme,
}
