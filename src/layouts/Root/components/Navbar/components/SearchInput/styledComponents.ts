import styled from 'styled-components'

export const Wrapper = styled.div`
  flex-grow: 1;
  max-width: 524px;
  margin-right: 16px;
  border: 1px solid #828282;
  border-radius: 100px;
  padding: 0 16px;
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  outline: none;
  border: none;
  padding: 8px 0;
  flex-grow: 1;
  font-size: 18px;
  margin-right: 8px;

  &::placeholder {
    color: #bdbdbd;
  }
`
