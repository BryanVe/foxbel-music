import { RootLayoutContextProvider } from '@/context/RootLayoutContext'
import { Navigate, Outlet } from 'react-router-dom'
import { Content, Player, Sidebar } from './components'
import { Wrapper } from './styledComponents'

const RootLayout = () => {
  const accessToken = localStorage.getItem('DEEZER_ACCESS_TOKEN')

  if (!accessToken) return <Navigate replace to='/redirect' />

  return (
    <RootLayoutContextProvider>
      <Wrapper>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </Wrapper>
      <Player />
    </RootLayoutContextProvider>
  )
}

export default RootLayout
