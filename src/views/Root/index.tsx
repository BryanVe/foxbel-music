import { Content, Player, Sidebar } from './components'
import { Container } from './styledComponents'

const RootView = () => {
  return (
    <>
      <Container>
        <Sidebar />
        <Content />
      </Container>
      <Player />
    </>
  )
}

export default RootView
