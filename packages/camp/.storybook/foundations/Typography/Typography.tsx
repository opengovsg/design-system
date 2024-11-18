import { FC, useCallback } from 'react'
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useTheme,
} from '@chakra-ui/react'
import get from 'lodash/get'

export const Typography: FC = () => {
  const theme = useTheme()

  const prettyPrint = useCallback(
    (themeName: string) => {
      const textStyles: Record<string, string> = {
        ...get(theme.textStyles, themeName, {}),
      }
      delete textStyles['fontStyle']
      return (
        <Box display="grid" textStyle="body-2">
          <Text textStyle="subhead-1" mb="0.25rem">
            {themeName}
          </Text>
          {Object.entries(textStyles).map(([key, value]) => (
            <Box display="inline-flex" key={key}>
              <Text color="brand.primary.600">{key}:&nbsp;</Text>
              <Text>{value}</Text>
            </Box>
          ))}
        </Box>
      )
    },
    [theme.textStyles],
  )

  return (
    <Container maxW="container.xl">
      <Heading as="h1" mb="1.5rem" size="4xl" color="brand.primary.600">
        Typography
      </Heading>
      <Flex
        borderRadius="10px"
        bg="brand.primary.500"
        py="3.5rem"
        px="5rem"
        justify="space-between"
        color="white"
        align="center"
      >
        <Text
          textStyle={[
            'responsive-heading.heavy',
            'responsive-heading.heavy-480',
            'responsive-heading.heavy-1280',
          ]}
        >
          Inter
        </Text>
        <Box
          fontSize="2rem"
          lineHeight="2.5rem"
          fontWeight="300"
          letterSpacing="-0.017em"
          sx={{
            fontFeatureSettings: "'tnum' on, 'cv05' on",
          }}
        >
          <Text>ABCDEFGHIJKLMNOPQRSTUVWXYZ</Text>
          <Text>abcdefghijklmnopqrstuvwxyz</Text>
          <Text>1234567890?!()[]&#123;&#125;&*^%$#@~&lt;&gt;</Text>
        </Box>
      </Flex>
      <Divider my="2rem" />
      <Heading fontSize="3xl" as="h2" color="brand.primary.700" mb="2.5rem">
        Styles
      </Heading>
      <SimpleGrid
        columns={2}
        templateColumns="minmax(auto, 70%) 1fr"
        columnGap="5rem"
        rowGap="2rem"
      >
        <Box
          textStyle="responsive-display.heavy-1280"
          color="base.content.default"
        >
          <Text>Display Heavy Desktop</Text>
          <Text>Build forms in minutes.</Text>
        </Box>
        <Box>{prettyPrint('responsive-display.heavy-1280')}</Box>
        <Box
          textStyle="responsive-display.heavy-480"
          color="base.content.default"
        >
          <Text>Display Heavy Tablet</Text>
          <Text>Build forms in minutes.</Text>
        </Box>
        <Box>{prettyPrint('responsive-display.heavy-480')}</Box>
        <Box textStyle="responsive-display.heavy" color="base.content.default">
          <Text>Display Heavy Mobile</Text>
          <Text>Build forms in minutes.</Text>
        </Box>
        <Box>{prettyPrint('responsive-display.heavy')}</Box>
        <Box
          textStyle="responsive-display.light-1280"
          color="base.content.default"
        >
          <Text>Display Light Desktop</Text>
          <Text>Build government forms in minutes.</Text>
        </Box>
        <Box>{prettyPrint('responsive-display.light-1280')}</Box>
        <Box
          textStyle="responsive-display.light-480"
          color="base.content.default"
        >
          <Text>Display Light Tablet</Text>
          <Text>Build government forms in minutes.</Text>
        </Box>
        <Box>{prettyPrint('responsive-display.light-480')}</Box>

        <Box textStyle="responsive-display.light" color="base.content.default">
          <Text>Display Light Mobile</Text>
          <Text>Build government forms in minutes.</Text>
        </Box>
        <Box>{prettyPrint('responsive-display.light')}</Box>

        <Box
          textStyle="responsive-heading.heavy-1280"
          color="base.content.default"
        >
          <Text>Heading Heavy Desktop</Text>
          <Text>Build forms in minutes.</Text>
        </Box>
        <Box>{prettyPrint('responsive-heading.heavy-1280')}</Box>

        <Box
          textStyle="responsive-heading.heavy-480"
          color="base.content.default"
        >
          <Text>Heading Heavy Tablet</Text>
          <Text>Build forms in minutes.</Text>
        </Box>
        <Box>{prettyPrint('responsive-heading.heavy-480')}</Box>

        <Box textStyle="responsive-heading.heavy" color="base.content.default">
          <Text>Heading Heavy Mobile</Text>
          <Text>Build forms in minutes.</Text>
        </Box>
        <Box>{prettyPrint('responsive-heading.heavy')}</Box>

        <Box
          textStyle="responsive-heading.light-1280"
          color="base.content.default"
        >
          <Text>Heading Light Desktop</Text>
          <Text>Build government forms in minutes.</Text>
        </Box>
        <Box>{prettyPrint('responsive-heading.light-1280')}</Box>

        <Box
          textStyle="responsive-heading.light-480"
          color="base.content.default"
        >
          <Text>Heading Light Tablet</Text>
          <Text>Build government forms in minutes.</Text>
        </Box>
        <Box>{prettyPrint('responsive-heading.light-480')}</Box>

        <Box textStyle="responsive-heading.light" color="base.content.default">
          <Text>Heading Light Mobile</Text>
          <Text>Build government forms in minutes.</Text>
        </Box>
        <Box>{prettyPrint('responsive-heading.light')}</Box>

        <Box textStyle="h1" color="base.content.default">
          <Text>Heading 1</Text>
          <Text>Build forms in minutes.</Text>
        </Box>
        <Box>{prettyPrint('h1')}</Box>

        <Box textStyle="h2" color="base.content.default">
          <Text>Heading 2</Text>
          <Text>
            Build government forms in minutes. Sign up with your government
            email, and build your form.
          </Text>
        </Box>
        <Box>{prettyPrint('h2')}</Box>

        <Box textStyle="h3" color="base.content.default">
          <Text>Heading 3</Text>
          <Text>
            Build government forms in minutes. Sign up with your government
            email, and build your form.
          </Text>
        </Box>
        <Box>{prettyPrint('h3')}</Box>

        <Box textStyle="h4" color="base.content.default">
          <Text>Heading 4</Text>
          <Text>
            Build government forms in minutes. Sign up with your government
            email, and build your form in minutes. It's free and no approval is
            required.
          </Text>
        </Box>
        <Box>{prettyPrint('h4')}</Box>

        <Box textStyle="h5" color="base.content.default">
          <Text>Heading 5</Text>
          <Text>
            Build government forms in minutes. Sign up with your government
            email, and build your form in minutes. It's free and no approval is
            required.
          </Text>
        </Box>
        <Box>{prettyPrint('h5')}</Box>

        <Box textStyle="h6" color="base.content.default">
          <Text>Heading 6</Text>
          <Text>
            Build government forms in minutes. Sign up with your government
            email, and build your form in minutes. It's free and no approval is
            required. Together let's make the Singapore government paperless.
          </Text>
        </Box>
        <Box>{prettyPrint('h6')}</Box>

        <Box textStyle="subhead-1" color="base.content.default">
          <Text>Subhead 1</Text>
          <Text maxW="33rem">
            Sign up with your government email, and build your form in minutes.
            It's free and no approval is required. Together let's make the
            Singapore government paperless.
          </Text>
        </Box>
        <Box>{prettyPrint('subhead-1')}</Box>

        <Box textStyle="subhead-2" color="base.content.default">
          <Text>Subhead 2</Text>
          <Text maxW="33rem">
            Sign up with your government email, and build your form in minutes.
            It's free and no approval is required. Together let's make the
            Singapore government paperless.
          </Text>
        </Box>
        <Box>{prettyPrint('subhead-2')}</Box>

        <Box textStyle="subhead-3" color="base.content.default">
          <Text>Subhead 3</Text>
          <Text maxW="33rem">
            Sign up with your government email, and build your form in minutes.
            It's free and no approval is required. Together let's make the
            Singapore government paperless.
          </Text>
        </Box>
        <Box>{prettyPrint('subhead-3')}</Box>

        <Box textStyle="body-1" color="base.content.default">
          <Text>Body 1</Text>
          <Text maxW="33rem">
            Sign up with your government email, and build your form in minutes.
            It's free and no approval is required. Together let's make the
            Singapore government paperless.
          </Text>
        </Box>
        <Box>{prettyPrint('body-1')}</Box>

        <Box textStyle="body-2" color="base.content.default">
          <Text>Body 2</Text>
          <Text maxW="33rem">
            Sign up with your government email, and build your form in minutes.
            It's free and no approval is required. Together let's make the
            Singapore government paperless.
          </Text>
        </Box>
        <Box>{prettyPrint('body-2')}</Box>

        <Box textStyle="body-3" color="base.content.default">
          <Text>Body 3</Text>
          <Text maxW="33rem">
            Sign up with your government email, and build your form in minutes.
            It's free and no approval is required. Together let's make the
            Singapore government paperless.
          </Text>
        </Box>
        <Box>{prettyPrint('body-3')}</Box>

        <Box textStyle="caption-1" color="base.content.default">
          <Text>Caption 1</Text>
          <Text maxW="33rem">
            Sign up with your government email, and build your form in minutes.
            It's free and no approval is required. Together let's make the
            Singapore government paperless.
          </Text>
        </Box>
        <Box>{prettyPrint('caption-1')}</Box>

        <Box textStyle="caption-2" color="base.content.default">
          <Text>Caption 2</Text>
          <Text maxW="33rem">
            Sign up with your government email, and build your form in minutes.
            It's free and no approval is required. Together let's make the
            Singapore government paperless.
          </Text>
        </Box>
        <Box>{prettyPrint('caption-2')}</Box>

        <Box textStyle="code-1" color="base.content.default">
          <Text>Code 1</Text>
          <Text maxW="33rem">
            Sign up with your government email, and build your form in minutes.
            It's free and no approval is required. Together let's make the
            Singapore government paperless.
          </Text>
        </Box>
        <Box>{prettyPrint('code-1')}</Box>

        <Box textStyle="code-2" color="base.content.default">
          <Text>Code 2</Text>
          <Text maxW="33rem">
            Sign up with your government email, and build your form in minutes.
            It's free and no approval is required. Together let's make the
            Singapore government paperless.
          </Text>
        </Box>
        <Box>{prettyPrint('code-2')}</Box>

        <Box textStyle="legal" color="base.content.default">
          <Text>Legal</Text>
          <Text maxW="33rem">
            Sign up with your government email, and build your form in minutes.
            It's free and no approval is required. Together let's make the
            Singapore government paperless.
          </Text>
        </Box>
        <Box>{prettyPrint('legal')}</Box>
      </SimpleGrid>
    </Container>
  )
}
