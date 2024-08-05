import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from './styles/globals'
import theme from './styles/theme'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <App/>
      <GlobalStyles/>
    </React.StrictMode>,
  </ThemeProvider>
)
