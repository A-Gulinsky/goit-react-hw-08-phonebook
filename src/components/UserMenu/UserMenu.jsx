// hooks
import { useAuth } from "hooks/useAuth"

// redux
import { useDispatch } from "react-redux"
import { logout } from "redux/auth/operations"

// emotion
import { B, Button, Ul } from "./UserMenu.styled"

const UserMenu = () => {

  const {user} = useAuth()
  const dispatch = useDispatch()

  const handleLogout = () => dispatch(logout())

  return (
    <Ul>
      <li>
        <B>Welcome {user.name}</B>
      </li>
      <li>
        <Button type="button" onClick={handleLogout}>EXIT</Button>
      </li>
    </Ul>
  )
}

export default UserMenu