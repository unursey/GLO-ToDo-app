import styled from 'styled-components'

export const ListItemLink = styled.a<{ todo: boolean }>`
  text-decoration: none;

  width: 100%;
  min-height: 50px;
  font-size: 14px;
  font-weight: 500;
  line-height: 22px;
  display: flex;
  background: #fff;
  border-radius: 5px;
  position: relative;
  box-shadow: 0 1px 2px rgba(44, 62, 80, 0.10);
  margin: 0 0 10px 0;
  padding: 14px;
  word-break: break-word;

  &:last-child {
    margin: 0;
  }

  ${props => props.todo &&`
    color: green;
  `}

  ${props => !props.todo && `
    color: red;
  `}
`