import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 32px;
  gap: 32px;
`

export const Slider = styled.input`
  & {
    -webkit-appearance: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100px;
    height: 6px;
    background: #fff;
    border-radius: 100px;
  }

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background: #fff;
    margin-top: -6px;
  }
`
