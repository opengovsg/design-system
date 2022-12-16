import { Accordion } from './Accordion'
import { Attachment, ATTACHMENT_THEME_KEY } from './Attachment'
import { Avatar } from './Avatar'
import { AvatarMenu } from './AvatarMenu'
import { Badge } from './Badge'
import { Banner } from './Banner'
import { Button } from './Button'
import { Calendar } from './Calendar'
import { Checkbox, CHECKBOX_THEME_KEY } from './Checkbox'
import { CloseButton } from './CloseButton'
import { DatePicker } from './DatePicker'
import { DateRangePicker } from './DateRangePicker'
import { Divider } from './Divider'
import { Drawer } from './Drawer'
import { FormControl } from './FormControl'
import { FormError } from './FormError'
import { FormLabel } from './FormLabel'
import { Infobox } from './Infobox'
import { Input } from './Input'
import { Link } from './Link'
import { Menu } from './Menu'
import { Modal } from './Modal'
import { MultiSelect } from './MultiSelect'
import { NumberInput } from './NumberInput'
import { Pagination, PAGINATION_THEME_KEY } from './Pagination'
import { PhoneNumberInput } from './PhoneNumberInput'
import { Progress } from './Progress'
import { Radio } from './Radio'
import { Rating, RATING_THEME_KEY } from './Rating'
import { Searchbar, SEARCHBAR_THEME_KEY } from './Searchbar'
import { SingleCountryPhoneNumberInput } from './SingleCountryPhoneNumberInput'
import { SingleSelect } from './SingleSelect'
import { Switch } from './Switch'
import { Tabs } from './Tabs'
import { Tag } from './Tag'
import { Textarea } from './Textarea'
import { Tile } from './Tile'
import { Toast } from './Toast'
import { Toggle, TOGGLE_THEME_KEY } from './Toggle'
import { Tooltip } from './Tooltip'
import { YesNo, YESNO_THEME_KEY } from './YesNo'

export const components = {
  Accordion,
  Avatar,
  AvatarMenu,
  Badge,
  Banner,
  Button,
  Calendar,
  CloseButton,
  DatePicker,
  DateRangePicker,
  Divider,
  Drawer,
  Form: FormControl,
  FormError,
  FormLabel,
  Infobox,
  Input,
  Link,
  Menu,
  Modal,
  MultiSelect,
  NumberInput,
  PhoneNumberInput,
  Progress,
  Radio,
  SingleCountryPhoneNumberInput,
  SingleSelect,
  Switch,
  Tabs,
  Tag,
  Textarea,
  Tile,
  Toast,
  Tooltip,
  [ATTACHMENT_THEME_KEY]: Attachment,
  [PAGINATION_THEME_KEY]: Pagination,
  [CHECKBOX_THEME_KEY]: Checkbox,
  [SEARCHBAR_THEME_KEY]: Searchbar,
  [RATING_THEME_KEY]: Rating,
  [YESNO_THEME_KEY]: YesNo,
  [TOGGLE_THEME_KEY]: Toggle,
}
