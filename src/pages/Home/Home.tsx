import HeaderView from "../../components/Header/header.view"
import { Outlet } from "react-router-dom"

function Home() {

  return (
    <>
      <HeaderView/>
      <Outlet/>
    </>
  )
}

export default Home
