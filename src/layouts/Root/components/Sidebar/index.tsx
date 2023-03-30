import { RootLayoutContext } from '@/context'
import { useContext } from 'react'
import { Brand, Menu } from './components'
import { Backdrop, Wrapper } from './styledComponents'

const Sidebar = () => {
  const { sidebarOpened, closeSidebar } = useContext(RootLayoutContext)

  return (
    <>
      <Backdrop opened={sidebarOpened} onClick={closeSidebar} />
      <Wrapper opened={sidebarOpened}>
        <Brand />
        <Menu />
      </Wrapper>
    </>
  )
}

export default Sidebar
