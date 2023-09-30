// hooks
import { useAuth } from "hooks"

// emotion
import { Ul,NavLinkStyled } from "./Navigation.styled"

const Navigation = () => {
  
  const { isLoggedIn } = useAuth()

  return (
    <Ul>
      <li>
        <NavLinkStyled to="/">
          Home
        </NavLinkStyled>
      </li>
      {isLoggedIn &&
        <li>
          <NavLinkStyled to="/contacts">
            Contacts
          </NavLinkStyled>
        </li>
      }
    </Ul>
  )
}

export default Navigation