import { FC, PropsWithChildren } from 'react'
import { Content, Player, Sidebar } from './components'
import { Wrapper } from './styledComponents'

const RootLayout: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <>
      <Wrapper>
        <Sidebar />
        <Content>{children}</Content>
      </Wrapper>
      <Player />
    </>
  )
}

export default RootLayout
