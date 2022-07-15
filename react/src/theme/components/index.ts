import { Attachment } from './Attachment'
import { Avatar } from './Avatar'
import { Badge } from './Badge'
import { Banner } from './Banner'
import { Button } from './Button'
import { Checkbox, CHECKBOX_THEME_KEY } from './Checkbox'
import { CloseButton } from './CloseButton'
import { DateInput } from './DateInput'
import { Divider } from './Divider'
import { Drawer } from './Drawer'
import { Form } from './Form'
import { FormError } from './FormError'
import { FormLabel } from './FormLabel'
import { InlineMessage } from './InlineMessage'
import { Input } from './Input'
import { Link } from './Link'
import { Menu } from './Menu'
import { Modal } from './Modal'
import { NumberInput } from './NumberInput'
import { Pagination, PAGINATION_THEME_KEY } from './Pagination'
import { PhoneNumberInput } from './PhoneNumberInput'
import { Radio, RADIO_THEME_KEY } from './Radio'
import { Rating } from './Rating'
import { Searchbar, SEARCHBAR_THEME_KEY } from './Searchbar'
import { SingleCountryPhoneNumberInput } from './SingleCountryPhoneNumberInput'
import { Tabs } from './Tabs'
import { Tag } from './Tag'
import { Textarea } from './Textarea'
import { Tile } from './Tile'
import { Toast } from './Toast'
import { Toggle, TOGGLE_THEME_KEY } from './Toggle'
import { Tooltip } from './Tooltip'
import { YesNo } from './YesNo'

export const components = {
  Avatar,
  Badge,
  Banner,
  Button,
  CloseButton,
  DateInput,
  Drawer,
  Form,
  FormError,
  FormLabel,
  Divider,
  Input,
  Link,
  InlineMessage,
  Modal,
  Menu,
  NumberInput,
  PhoneNumberInput,
  SingleCountryPhoneNumberInput,
  Textarea,
  Tabs,
  Tag,
  [PAGINATION_THEME_KEY]: Pagination,
  Attachment,
  [CHECKBOX_THEME_KEY]: Checkbox,
  [RADIO_THEME_KEY]: Radio,
  [SEARCHBAR_THEME_KEY]: Searchbar,
  Tooltip,
  Rating,
  YesNo,
  [TOGGLE_THEME_KEY]: Toggle,
  Tile,
  Toast,
}
