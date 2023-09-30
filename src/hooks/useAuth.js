import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectRefreshing, selectUser } from "redux/auth/selectors";

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser)
  const isRefreshing = useSelector(selectRefreshing)

  return {
    isLoggedIn,
    isRefreshing,
    user
  };
};