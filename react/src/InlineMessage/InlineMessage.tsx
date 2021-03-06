import ReactMarkdown from 'react-markdown'
import { Flex, FlexProps, Icon, useMultiStyleConfig } from '@chakra-ui/react'

import { useMdComponents } from '~/hooks/useMdComponents'
import { BxsErrorCircle, BxsInfoCircle } from '~/icons'
import { InlineMessageVariant } from '~/theme/components/InlineMessage'

export interface InlineMessageProps extends FlexProps {
  variant?: InlineMessageVariant
  children: string
  useMarkdown?: boolean
}

export const InlineMessage = ({
  variant = 'info',
  children,
  useMarkdown = false,
  ...flexProps
}: InlineMessageProps): JSX.Element => {
  const styles = useMultiStyleConfig('InlineMessage', { variant })

  const mdComponents = useMdComponents({ styles })

  return (
    <Flex sx={styles.messagebox} {...flexProps}>
      <Icon
        as={variant !== 'error' ? BxsInfoCircle : BxsErrorCircle}
        __css={styles.icon}
      />
      {useMarkdown ? (
        <ReactMarkdown components={mdComponents}>{children}</ReactMarkdown>
      ) : (
        children
      )}
    </Flex>
  )
}
