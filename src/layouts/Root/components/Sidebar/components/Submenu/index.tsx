import { FC } from 'react'
import { Wrapper, Item, Title } from './styledComponents'

type SubmenuProps = {
  title: string
  items: SubmenuItem[]
  selectItem: (path: string) => void
  selectedItem: string
}

const Submenu: FC<SubmenuProps> = (props) => {
  const { title, items, selectItem, selectedItem } = props

  return (
    <Wrapper>
      <Title>{title}</Title>
      {items.map((item) => (
        <Item
          key={item.path}
          onClick={() => selectItem(item.path)}
          selected={item.path === selectedItem}
        >
          {item.label}
        </Item>
      ))}
    </Wrapper>
  )
}

export default Submenu
