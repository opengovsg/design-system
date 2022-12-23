import { useCallback } from 'react'
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Table,
  TableCaption,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useTheme,
} from '@chakra-ui/react'

export const Utilities = (): JSX.Element => {
  const theme = useTheme()

  const prettyPrint = useCallback((key: string, value: string) => {
    return (
      <>
        <Text color="base.content.light">{key}:&nbsp;</Text>
        <Text>{value}</Text>
      </>
    )
  }, [])

  return (
    <Container maxW="container.xl">
      <Stack direction="column" spacing="3rem">
        <Box>
          <Heading as="h1" mb="1.5rem" size="4xl" color="brand.primary.600">
            Utilities
          </Heading>
          <Text as="h2" textStyle="h2" color="brand.primary.500" mb="2.5rem">
            Shadows
          </Text>
          <Box></Box>
          <SimpleGrid
            columns={[1, 2]}
            templateColumns={['auto', 'auto 1fr']}
            spacingX={['0.5rem', '2.5rem']}
            spacingY="1rem"
          >
            <Text
              color="base.content.default"
              textStyle="subhead-3"
              mr="10rem"
              alignSelf="center"
              whiteSpace="nowrap"
            >
              shadows.sm
            </Text>
            <Flex
              h="3.5rem"
              w="100%"
              shadow="sm"
              align="center"
              justify="center"
            >
              {prettyPrint('sm', theme.shadows['sm'])}
            </Flex>
            <Text
              color="base.content.default"
              textStyle="subhead-3"
              alignSelf="center"
              mr="10rem"
              whiteSpace="nowrap"
            >
              shadows.md
            </Text>
            <Flex
              h="3.5rem"
              w="100%"
              shadow="md"
              align="center"
              justify="center"
            >
              {prettyPrint('md', theme.shadows['md'])}
            </Flex>
          </SimpleGrid>
        </Box>
        <Box>
          <Text as="h2" textStyle="h2" color="brand.primary.500" mb="1.5rem">
            Spacing
          </Text>
          <Table variant="simple">
            <TableCaption>Spacing</TableCaption>
            <Thead>
              <Tr>
                <Th w="15rem">Variable</Th>
                <Th w="5rem">Spacing</Th>
                <Th>Visual</Th>
              </Tr>
            </Thead>
            <Tbody>
              {Object.entries(theme.space).map(([key, value]) => {
                const spacing = String(value)
                return (
                  <Tr key={key}>
                    <Td>spacing.{key}</Td>
                    <Td>{spacing}</Td>
                    <Td>
                      <Box bg="blue.50" width={spacing} height={spacing} />
                    </Td>
                  </Tr>
                )
              })}
            </Tbody>
          </Table>
        </Box>
      </Stack>
    </Container>
  )
}
