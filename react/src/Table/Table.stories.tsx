import {
  Table,
  TableCaption,
  TableContainer,
  TableProps,
  Tbody,
  Td,
  Tfoot,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { Meta, StoryFn } from '@storybook/react'

import { Th } from './Th'

export default {
  title: 'Components/Table',
  component: Table,
  decorators: [],
  tags: ['autodocs'],
} as Meta<TableProps>

const Template: StoryFn<TableProps> = (args) => {
  return (
    <TableContainer>
      <Table {...args}>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  )
}
export const Default = Template.bind({})
