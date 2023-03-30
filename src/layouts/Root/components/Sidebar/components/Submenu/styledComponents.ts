import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.span`
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
`

type ItemProps = {
  selected: boolean
}

export const Item = styled.span<ItemProps>`
  font-size: 16;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    color: var(--main-color);
  }

  &:active {
    color: var(--main-color);
    font-weight: 700;
  }

  &:focus {
    color: var(--main-color);
    font-weight: 700;
  }

  ${(props) =>
    props.selected &&
    `
    color: var(--main-color);
    font-weight: 700;

    &::before {
      content: ' ';
      position: absolute;
      left: 0;
      background-color: var(--main-color);
      width: 5px;
      height: 20px;
    }
  `}
`
