import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.tsx'
import { ThemeProvider } from 'styled-components'
import theme from './styles/theme.ts'
import GlobalStyles from './styles/globals.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <GlobalStyles/>
      <Home />
    </React.StrictMode>,
  </ThemeProvider>
)
