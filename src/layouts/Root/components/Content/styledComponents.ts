import styled from 'styled-components'

type WrapperProps = {
  playing: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  flex-grow: 1;
  grid-area: main;
  overflow-y: auto;
  ${(props) => props.playing && 'margin-bottom: 100px;'}
`

export const Main = styled.main`
  padding: 40px;
`
