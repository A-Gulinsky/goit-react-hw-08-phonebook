// components
import AuthNav from "components/AuthNav"
import Navigation from "components/Navigation"
import UserMenu from "components/UserMenu"

// hooks / emotion
import { useAuth } from "hooks"
import { AppBarContainer } from "./AppBar.styled"

export const AppBar = () => {

  const { isLoggedIn } = useAuth()

  return (
    <AppBarContainer>
      <Navigation />

      { isLoggedIn ? <UserMenu /> : <AuthNav /> }
    </AppBarContainer>
  )
}