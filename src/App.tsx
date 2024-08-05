import { BrowserRouter, Route, Routes } from "react-router-dom"
import About from "./pages/About/about"
import Skills from "./pages/Skills/skills"
import Projects from "./pages/Projects/projects"
import Contact from "./pages/Contact/contact"
import Layout from "./Layout"
import Home from "./pages/Home/Home"


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path="/About" element={<About/>}></Route>
                    <Route path="/Skills" element={<Skills/>}></Route>
                    <Route path="/Projects" element={<Projects/>}></Route>
                    <Route path="/Contact" element={<Contact/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App