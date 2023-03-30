import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'sidebar navbar'
    'sidebar main';
`
