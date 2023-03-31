import styled from 'styled-components'

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 32px;
  margin-top: 16px;
`

export const Subtitle = styled.h2`
  font-size: 22px;
  color: #e86060;
  font-weight: 700;
`
