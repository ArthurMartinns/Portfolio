import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home.tsx'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.ts'
import GlobalStyles from './styles/globals.ts'
import Projects from './pages/Projects/projects.tsx'
import Contact from './pages/Contact/contact.tsx'
import Skills from './pages/Skills/skills.tsx'

import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import About from './pages/About/about.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
    children: [
      {
        path: '/About',
        element: <About/>
      },
      {
        path: '/Skills',
        element: <Skills/>
      },
      {
        path: '/Projects',
        element: <Projects/>
      },
      {
        path: '/Contact',
        element: <Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <GlobalStyles/>
      <RouterProvider router={router}/>
    </React.StrictMode>,
  </ThemeProvider>
)
