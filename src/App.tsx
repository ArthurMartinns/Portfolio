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
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Skills" element={<Skills />} />
                    <Route path="/Projects" element={<Projects />} />
                    <Route path="/Contact" element={<Contact />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App