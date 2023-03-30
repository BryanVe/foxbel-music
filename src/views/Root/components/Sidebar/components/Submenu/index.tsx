import { FC } from 'react'
import { Container, Item, Title } from './styledComponents'

type SubmenuProps = {
  title: string
}

const Submenu: FC<SubmenuProps> = (props) => {
  const { title } = props

  return (
    <Container>
      <Title>{title}</Title>
      <Item>Recientes</Item>
      <Item>Artistas</Item>
      <Item>Álbums</Item>
      <Item>Canciones</Item>
      <Item>Estaciones</Item>
    </Container>
  )
}

export default Submenu
