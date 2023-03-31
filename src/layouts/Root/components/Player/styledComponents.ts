import styled from 'styled-components'

type WrapperProps = {
  playing: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  width: 100%;
  background-color: #eb5757;
  color: #fff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 100px;
  transition: all 400ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  bottom: ${(props) => (!props.playing ? '0' : '-100px')};
`
