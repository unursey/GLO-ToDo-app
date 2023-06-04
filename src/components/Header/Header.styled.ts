import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Theme } from '../../models/themes'

export const HeaderBlock = styled.header<{ theme: Theme }>`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 50px;
  transition: background-color .2s;
  background-color: ${({ theme }) => theme.colors.bgPrimary};
  display: flex;
  align-items: center;
`

export const HeaderContainer = styled.div`
  max-width: 97%;
  width: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`

export const HeaderNavContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

`

export const HeaderNavLink = styled(NavLink)`
  text-decoration: none;
  padding: 10px;
  color: #ffffff33;

  &.active {
    color: #fff;
  }
`
// color: ${(props) => (props.isActive ? '#ffffff33' : 'red')};

export const HeaderControl = styled.div`
  position: relative;
  width: 80px;
	height: 30px;
  cursor: pointer;
  align-self: center;
  flex-shrink: 0;
  z-index: 10;
`
export const HeaderField = styled.input<{ theme: Theme }>`
  position: absolute;
  z-index: 1;
  opacity: 0;

  &:hover,
	&:focus {
		+ label {
			background-color: lightSlateGray;
		}	
		+ label span::after {
			background-color: lighten(lightBlue, 10%);
		}
	}

  &:checked ~ label {
		background-color: lightSlateGray;
	
    &::before {
      color: ${({ theme }) => theme.colors.iconSun};
    }
    
    &::after {
      color: ${({ theme }) => theme.colors.iconLune};
    }

    span::after {
      transform: ${({ theme }) => theme.transform};
    }
`

export const HeaderLabel = styled.label<{ theme: Theme }>`
  position: absolute;
  z-index: 1;
	transition: background-color 200ms ease-in-out;
	width: 60px;
	height: 100%;
	border-radius: 50px;
	text-align: center;
	background-color: slateGray;

  &::before,
	&::after {
		font-size: 1rem;
		position: absolute;
		transform: translate3d(0, -50%, 0);
		top: 50%;
	}

  &::before {
    content: '☼';
    right: 100%;
		margin-right: 8px; 
    color: ${({ theme }) => theme.colors.iconSun};
	}

  &::after {
		content: '☾';
		left: 100%;
		margin-left: 8px;
		color: ${({ theme }) => theme.colors.iconLune};
	}
	`

export const HeaderSpan = styled.span<{ theme: Theme }>`
  position: absolute;
  bottom: calc(100% + 13px);
  left: 0;
  width: 100%;

  &::after {
		position: absolute;
		top: calc(100% + 15px);
		left: 5px;
		width: 25px;
		height: 25px;
		content: '';
		border-radius: 50%;
		background-color: lightBlue;
		transition: transform 200ms, background-color 200ms;
    transform: ${({ theme }) => theme.transform};
		box-shadow: -3px 3px 8px rgba(0, 0, 0, 0.4);
	}
`