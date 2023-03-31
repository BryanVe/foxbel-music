import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  padding: 0 40px;
  justify-content: space-between;
  padding-top: 30px;

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
