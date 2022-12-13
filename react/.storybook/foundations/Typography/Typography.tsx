import { FC, useCallback } from 'react'
import {
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Stack,
  Text,
  useTheme,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import { get } from 'lodash'

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
          <Text>{themeName}</Text>
          {Object.entries(textStyles).map(([key, value]) => (
            <Box display="inline-flex" key={key}>
              <Text color="secondary.400">{key}:&nbsp;</Text>
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
      <Heading
        mb="2rem"
        fontSize="4rem"
        letterSpacing="-0.022em"
        color="secondary.700"
      >
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
        <Text textStyle="display-heavy">Inter</Text>
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
      <Text
        as="h2"
        textStyle="display-heavy"
        color="brand.primary.500"
        mb="2.5rem"
      >
        Styles
      </Text>
      <Stack spacing="1.5rem">
        <Wrap justify="space-between">
          <WrapItem>
            <Box
              w="43rem"
              textStyle="responsive-display.heavy-1280"
              color="secondary.700"
            >
              <Text>Display Heavy Desktop</Text>
              <Text>Build forms in minutes.</Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('responsive-display.heavy-1280')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box
              w="43rem"
              textStyle="responsive-display.heavy-480"
              color="secondary.700"
            >
              <Text>Display Heavy Tablet</Text>
              <Text>Build forms in minutes.</Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('responsive-display.heavy-480')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box
              w="43rem"
              textStyle="responsive-display.heavy"
              color="secondary.700"
            >
              <Text>Display Heavy Mobile</Text>
              <Text>Build forms in minutes.</Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('responsive-display.heavy')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box
              w="43rem"
              textStyle="responsive-display.light-1280"
              color="secondary.700"
            >
              <Text>Display Light Desktop</Text>
              <Text>Build government forms in minutes.</Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('responsive-display.light-1280')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box
              w="43rem"
              textStyle="responsive-display.light-480"
              color="secondary.700"
            >
              <Text>Display Light Tablet</Text>
              <Text>Build government forms in minutes.</Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('responsive-display.light-480')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box
              w="43rem"
              textStyle="responsive-display.light"
              color="secondary.700"
            >
              <Text>Display Light Mobile</Text>
              <Text>Build government forms in minutes.</Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('responsive-display.light')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box
              w="43rem"
              textStyle="responsive-heading.heavy-1280"
              color="secondary.700"
            >
              <Text>Heading Heavy Desktop</Text>
              <Text>Build forms in minutes.</Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('responsive-heading.heavy-1280')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box
              w="43rem"
              textStyle="responsive-heading.heavy-480"
              color="secondary.700"
            >
              <Text>Heading Heavy Tablet</Text>
              <Text>Build forms in minutes.</Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('responsive-heading.heavy-480')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box
              w="43rem"
              textStyle="responsive-heading.heavy"
              color="secondary.700"
            >
              <Text>Heading Heavy Mobile</Text>
              <Text>Build forms in minutes.</Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('responsive-heading.heavy')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box
              w="43rem"
              textStyle="responsive-heading.light-1280"
              color="secondary.700"
            >
              <Text>Heading Light Desktop</Text>
              <Text>Build government forms in minutes.</Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('responsive-heading.light-1280')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box
              w="43rem"
              textStyle="responsive-heading.light-480"
              color="secondary.700"
            >
              <Text>Heading Light Tablet</Text>
              <Text>Build government forms in minutes.</Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('responsive-heading.light-480')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box
              w="43rem"
              textStyle="responsive-heading.light"
              color="secondary.700"
            >
              <Text>Heading Light Mobile</Text>
              <Text>Build government forms in minutes.</Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('responsive-heading.light')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box w="43rem" textStyle="h1" color="secondary.700">
              <Text>Heading 1</Text>
              <Text>Build forms in minutes.</Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('h1')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box w="43rem" textStyle="h2" color="secondary.700">
              <Text>Heading 2</Text>
              <Text>
                Build government forms in minutes. Sign up with your government
                email, and build your form.
              </Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('h2')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box w="43rem" textStyle="h3" color="secondary.700">
              <Text>Heading 3</Text>
              <Text>
                Build government forms in minutes. Sign up with your government
                email, and build your form.
              </Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('h3')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box w="43rem" textStyle="h4" color="secondary.700">
              <Text>Heading 4</Text>
              <Text>
                Build government forms in minutes. Sign up with your government
                email, and build your form in minutes. It's free and no approval
                is required.
              </Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('h4')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box w="43rem" textStyle="h5" color="secondary.700">
              <Text>Heading 5</Text>
              <Text>
                Build government forms in minutes. Sign up with your government
                email, and build your form in minutes. It's free and no approval
                is required.
              </Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('h5')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box w="43rem" textStyle="h6" color="secondary.700">
              <Text>Heading 6</Text>
              <Text>
                Build government forms in minutes. Sign up with your government
                email, and build your form in minutes. It's free and no approval
                is required. Together let's make the Singapore government
                paperless.
              </Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('h6')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box w="43rem" textStyle="subhead-1" color="secondary.700">
              <Text>Subhead 1</Text>
              <Text maxW="33rem">
                Sign up with your government email, and build your form in
                minutes. It's free and no approval is required. Together let's
                make the Singapore government paperless.
              </Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('subhead-1')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box w="43rem" textStyle="subhead-2" color="secondary.700">
              <Text>Subhead 2</Text>
              <Text maxW="33rem">
                Sign up with your government email, and build your form in
                minutes. It's free and no approval is required. Together let's
                make the Singapore government paperless.
              </Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('subhead-2')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box w="43rem" textStyle="subhead-3" color="secondary.700">
              <Text>Subhead 3</Text>
              <Text maxW="33rem">
                Sign up with your government email, and build your form in
                minutes. It's free and no approval is required. Together let's
                make the Singapore government paperless.
              </Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('subhead-3')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box w="43rem" textStyle="body-1" color="secondary.700">
              <Text>Body 1</Text>
              <Text maxW="33rem">
                Sign up with your government email, and build your form in
                minutes. It's free and no approval is required. Together let's
                make the Singapore government paperless.
              </Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('body-1')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box w="43rem" textStyle="body-2" color="secondary.700">
              <Text>Body 2</Text>
              <Text maxW="33rem">
                Sign up with your government email, and build your form in
                minutes. It's free and no approval is required. Together let's
                make the Singapore government paperless.
              </Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('body-2')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box w="43rem" textStyle="body-3" color="secondary.700">
              <Text>Body 3</Text>
              <Text maxW="33rem">
                Sign up with your government email, and build your form in
                minutes. It's free and no approval is required. Together let's
                make the Singapore government paperless.
              </Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('body-3')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box w="43rem" textStyle="caption-1" color="secondary.700">
              <Text>Caption 1</Text>
              <Text maxW="33rem">
                Sign up with your government email, and build your form in
                minutes. It's free and no approval is required. Together let's
                make the Singapore government paperless.
              </Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('caption-1')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box w="43rem" textStyle="caption-2" color="secondary.700">
              <Text>Caption 2</Text>
              <Text maxW="33rem">
                Sign up with your government email, and build your form in
                minutes. It's free and no approval is required. Together let's
                make the Singapore government paperless.
              </Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('caption-2')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box w="43rem" textStyle="code-1" color="secondary.700">
              <Text>Code 1</Text>
              <Text maxW="33rem">
                Sign up with your government email, and build your form in
                minutes. It's free and no approval is required. Together let's
                make the Singapore government paperless.
              </Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('code-1')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box w="43rem" textStyle="code-2" color="secondary.700">
              <Text>Code 2</Text>
              <Text maxW="33rem">
                Sign up with your government email, and build your form in
                minutes. It's free and no approval is required. Together let's
                make the Singapore government paperless.
              </Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('code-2')}</WrapItem>
        </Wrap>
        <Wrap justify="space-between">
          <WrapItem>
            <Box w="43rem" textStyle="legal" color="secondary.700">
              <Text>Legal</Text>
              <Text maxW="33rem">
                Sign up with your government email, and build your form in
                minutes. It's free and no approval is required. Together let's
                make the Singapore government paperless.
              </Text>
            </Box>
          </WrapItem>
          <WrapItem>{prettyPrint('legal')}</WrapItem>
        </Wrap>
      </Stack>
    </Container>
  )
}
