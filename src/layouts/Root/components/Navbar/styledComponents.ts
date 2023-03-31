import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 32px 40px;
  justify-content: space-between;
  z-index: 1000;
  position: sticky;
  top: 0;
  background-color: #fff;

  @media (max-width: 1312px) {
    flex-direction: column-reverse;
    gap: 16px;
  }
`

export const UserAccountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.img`
  width: 52px;
  cursor: pointer;

  @media (min-width: 1312px) {
    display: none;
  }
`
