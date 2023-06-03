import styled from 'styled-components'

export const ListItemLink = styled.a<{ todo: boolean }>`
  text-decoration: none;

  ${props => props.todo &&`
    color: green;
  `}

  ${props => !props.todo && `
    color: red;
  `}
`