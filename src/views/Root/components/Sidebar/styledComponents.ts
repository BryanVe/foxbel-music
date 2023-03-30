import styled from 'styled-components'

export const Container = styled.aside`
  background-color: #662323;
  padding: 50px 40px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 900px) {
    display: none;
  }
`
