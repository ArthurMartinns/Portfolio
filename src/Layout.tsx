import { Outlet } from "react-router-dom"
import HeaderView from "./components/Header/header.view"

function Layout() {
    return (
        <>
        <HeaderView/>
        <Outlet/>
        </>
    )
}

export default Layout