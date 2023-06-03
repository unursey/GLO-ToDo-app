import { HeaderBlock, HeaderNavContainer, HeaderNavLink } from "./Header.styled";

export const Header = () => {
  const getActiveClass = ({ isActive }: { isActive: boolean }): string => {
    return isActive ? 'active' : '';
  }

  return (
    <HeaderBlock>
      <HeaderNavContainer>
        <HeaderNavLink className={getActiveClass} to='/'>ToDo</HeaderNavLink>
        <HeaderNavLink className={getActiveClass} to='/list'>List</HeaderNavLink>
      </HeaderNavContainer>
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



