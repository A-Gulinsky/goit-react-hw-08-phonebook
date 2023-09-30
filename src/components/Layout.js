import { Suspense } from "react"

// components
import { AppBar } from "./AppBar/AppBar"
import { Widgets } from "./Widgets/Widgets"

// react router dom / toast
import { Outlet } from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Layout = () => {

  return (
    <div>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>

      <Widgets />
      <ToastContainer theme="dark" autoClose={2000} />
    </div>
  )
}