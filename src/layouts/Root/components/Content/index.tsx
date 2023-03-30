import { FC, PropsWithChildren } from 'react'
import Navbar from '../Navbar'
import { Wrapper, Main } from './styledComponents'

const Content: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <Wrapper>
      <Navbar />
      <Main>{children}</Main>
    </Wrapper>
  )
}

export default Content
