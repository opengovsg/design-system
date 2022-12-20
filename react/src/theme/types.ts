import type {
  MultiStyleConfig,
  PartsStyleFunction,
  PartsStyleObject,
} from '@chakra-ui/theme-tools'
import type { Dict } from '@chakra-ui/utils'

type Anatomy = { __type: string; get keys(): string[] }

export interface ComponentMultiStyleConfig<T extends Anatomy = Anatomy>
  extends Omit<MultiStyleConfig<T>, 'baseStyle'> {
  baseStyle?: PartsStyleObject<T> | PartsStyleFunction<T>
  parts: T['keys']
  defaultProps?: MultiStyleConfig<T>['defaultProps'] & Dict
}
