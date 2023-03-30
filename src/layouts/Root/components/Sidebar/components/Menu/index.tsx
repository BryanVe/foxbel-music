import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Submenu from '../Submenu'

const menu: Submenu[] = [
  {
    title: 'Mi Librería',
    items: [
      {
        label: 'Recientes',
        path: '/',
      },
      {
        label: 'Artistas',
        path: '/artists',
      },
      {
        label: 'Álbums',
        path: '/albums',
      },
      {
        label: 'Canciones',
        path: '/songs',
      },
      {
        label: 'Estaciones',
        path: '/stations',
      },
    ],
  },
  {
    title: 'Playlist',
    items: [
      {
        label: 'Metal',
        path: '/metal',
      },
      {
        label: 'Para bailar',
        path: '/to-dance',
      },
      {
        label: 'Rock 90s',
        path: '/rock-90',
      },
      {
        label: 'Baladas',
        path: '/balads',
      },
    ],
  },
]

const Menu = () => {
  const [selectedItem, setSelectedItem] = useState('/')
  const navigate = useNavigate()

  const selectItem = (path: string) => {
    setSelectedItem(path)
    navigate(path)
  }

  return (
    <>
      {menu.map((submenu) => (
        <Submenu
          key={submenu.title}
          title={submenu.title}
          items={submenu.items}
          selectItem={selectItem}
          selectedItem={selectedItem}
        />
      ))}
    </>
  )
}

export default Menu
