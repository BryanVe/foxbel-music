import styled from 'styled-components'

export const Wrapper = styled.aside`
  grid-area: sidebar;
  background-color: var(--secondary-color);
  padding: 50px 40px;
  padding-bottom: 150px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 900px) {
    display: none;
  }
`
