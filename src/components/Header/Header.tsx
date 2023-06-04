import { useDispatch } from "react-redux";
import { toggleThemeAction } from "../../feature/themeList";
import { HeaderBlock, HeaderContainer, HeaderNavContainer, HeaderNavLink, HeaderControl, HeaderField, HeaderLabel, HeaderSpan } from "./Header.styled";

export const Header = () => {
  const dispatch = useDispatch()

  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? 'active' : '';
  }

  return (
    <HeaderBlock>
      <HeaderContainer>
        <HeaderNavContainer>
          <HeaderNavLink className={getActiveClass} to='/'>ToDo</HeaderNavLink>
          <HeaderNavLink className={getActiveClass} to='/list'>List</HeaderNavLink>
        </HeaderNavContainer>
        <HeaderControl>      
          <HeaderField
            id="themeSwitch"
            type="checkbox"
          />
          <HeaderLabel
            onClick={() => dispatch(toggleThemeAction())}
            htmlFor="themeSwitch"> 
            <HeaderSpan />
          </HeaderLabel>
        </HeaderControl>

      </HeaderContainer>
    </HeaderBlock>
  )
}




// export const Header = () => {
//   const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
//     return isActive ? `${classes.active} ${classes.link}` : classes.link
//   }
//   return (
//     <header className={classes.header}>
//       <div className={classes.container}>
//         <NavLink className={getActiveClass} to='/'>ToDo</NavLink>
//         <NavLink className={getActiveClass} to='/list'>List</NavLink>
//       </div>
//     </header>
//   )
// }



