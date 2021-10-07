import styled from 'styled-components'
import { Item } from '../../types/Item'

type Props = {
  item: Item
}

export const TableItem = ({ item }: Props) => {
  return (
    <TableLine>
      <TableColumn>...</TableColumn>
      <TableColumn>{item.category}</TableColumn>
      <TableColumn>{item.title}</TableColumn>
      <TableColumn>R$ {item.value}</TableColumn>
    </TableLine>
  )
}

const TableLine = styled.tr`
`

const TableColumn = styled.td`
  padding: 10px 0;
`