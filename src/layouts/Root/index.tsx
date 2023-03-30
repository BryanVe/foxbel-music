import { RootLayoutContextProvider } from '@/context/RootLayoutContext'
import { FC, PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { Content, Player, Sidebar } from './components'
import { Wrapper } from './styledComponents'

const RootLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props
  const deezerCode = localStorage.getItem('DEEZER_CODE')

  return !deezerCode ? (
    <Navigate replace to='/redirect' />
  ) : (
    <RootLayoutContextProvider>
      <Wrapper>
        <Sidebar />
        <Content>{children}</Content>
      </Wrapper>
      <Player />
    </RootLayoutContextProvider>
  )
}

export default RootLayout
