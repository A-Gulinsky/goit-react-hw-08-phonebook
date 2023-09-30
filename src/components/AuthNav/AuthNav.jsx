// emotion
import { NavLinkStyled, Ul } from "./AuthNav.styled"

 const AuthNav = () => {

  return (
    <Ul>
      <li>
        <NavLinkStyled to="/login">
          Login
        </NavLinkStyled>
      </li>
      <li>
        <NavLinkStyled to="/register">
          Sign Up
        </NavLinkStyled>
      </li>
    </Ul>
  )
}

export default AuthNav