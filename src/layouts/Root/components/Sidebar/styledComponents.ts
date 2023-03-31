import styled from 'styled-components'

type WrapperProps = {
  opened: boolean
}

export const Wrapper = styled.aside<WrapperProps>`
  grid-area: sidebar;
  background-color: var(--secondary-color);
  padding: 50px 40px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  box-sizing: border-box;

  @media (max-width: 1312px) {
    transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    position: absolute;
    height: 100%;
    z-index: 2000;
    padding-bottom: 50px;
    left: ${(props) => (props.opened ? '0' : '-100%')};
  }
`

type BackdropProps = {
  opened: boolean
}

export const Backdrop = styled.div<BackdropProps>`
  @media (max-width: 1312px) {
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 1000;
    background-color: rgba(0, 0, 0, 0.5);
    display: ${props => props.opened ? 'initial' : 'none'};
  }
`
