import { RootLayoutContext } from '@/context'
import { FC, PropsWithChildren, useContext } from 'react'
import Navbar from '../Navbar'
import { Wrapper, Main } from './styledComponents'

const Content: FC<PropsWithChildren> = (props) => {
  const { children } = props
  const { currentTrack } = useContext(RootLayoutContext)

  return (
    <Wrapper playing={Boolean(currentTrack)}>
      <Navbar />
      <Main>{children}</Main>
    </Wrapper>
  )
}

export default Content
