import { RootLayoutContext } from '@/context'
import { useContext } from 'react'
import { Brand } from '@/components'
import { Menu } from './components'
import { Backdrop, Wrapper } from './styledComponents'

const Sidebar = () => {
  const { sidebarOpened, closeSidebar, currentTrack } =
    useContext(RootLayoutContext)

  return (
    <>
      <Backdrop opened={sidebarOpened} onClick={closeSidebar} />
      <Wrapper playing={Boolean(currentTrack)} opened={sidebarOpened}>
        <Brand />
        <Menu />
      </Wrapper>
    </>
  )
}

export default Sidebar
