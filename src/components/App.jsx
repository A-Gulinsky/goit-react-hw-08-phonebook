import { lazy, useEffect } from "react";

// react router dom
import { Route,Routes } from "react-router-dom";
import { Layout } from "./Layout";

// redux,hooks,API
import { useDispatch } from "react-redux";
import { useAuth } from "hooks/useAuth";
import { refresh } from "redux/auth/operations";

// custom routes
import { RestrictedRoute } from "./RestrictedRoute";
import { PrivateRoute } from "./PrivateRoute";
// emotion
import { Container } from "./App/App.styled";

const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const LoginPage = lazy(() => import('../pages/LoginPage'))
const RegisterPage = lazy(() => import('../pages/RegisterPage'))
const ContactsPage = lazy(() => import('../pages/ContactsPage/ContactsPage'))

export const App = () => {

  const dispatch = useDispatch()
  const { isRefreshing } = useAuth()

  useEffect(() => {
    dispatch(refresh())
  }, [dispatch])

  return isRefreshing ? (<b>REFRESHING...</b>) : (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<HomePage />} />
          <Route path='/login' element={<RestrictedRoute component={LoginPage} redirectTo="/contacts" />} />
          <Route path='/register' element={<RestrictedRoute component={RegisterPage} redirectTo="/contacts" />} />
          <Route path='/contacts' element={<PrivateRoute component={ContactsPage} redirectTo="/login" />} />

        </Route>
      </Routes>
    </Container>
  );
};
