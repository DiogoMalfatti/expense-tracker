import styled from 'styled-components'
import { Item } from '../../types/Item'
import { formatDate } from '../../helpers/dateFilter'
import { categories } from '../../data/categories'

type Props = {
  item: Item
}

export const TableItem = ({ item }: Props) => {
  return (
    <TableLine>
      <TableColumn>{formatDate(item.date)}</TableColumn>
      <TableColumn>
        <TableCategory color={categories[item.category].color}>
          {categories[item.category].title}
        </TableCategory>
      </TableColumn>
      <TableColumn>{item.title}</TableColumn>
      <TableColumn>
        <TableValue color={categories[item.category].expense ? 'red' : 'green'}>
          R$ {item.value}
        </TableValue>
      </TableColumn>
    </TableLine>
  )
}

const TableLine = styled.tr`
`

const TableColumn = styled.td`
  padding: 10px 0;
`

const TableCategory = styled.div<{ color: string }>`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 5px;
  color: #fff;
  background: ${props => props.color};
`

const TableValue = styled.div<{ color: string }>`
  color: ${props => props.color};
`