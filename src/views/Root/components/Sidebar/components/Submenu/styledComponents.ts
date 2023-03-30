import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
`

export const Item = styled.span`
  font-size: 16;
  color: #ffffff;

  &:hover {
    color: #e86060;
  }

  &:active {
    color: #e86060;
    font-weight: 700;
  }

  &:focus {
    color: #e86060;
    font-weight: 700;
  }
`
