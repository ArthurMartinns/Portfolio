import { ThemeProvider } from "styled-components"
import Home from "./pages/Home/Home"
import { darkTheme, theme } from "./styles/theme"
import { useTheme } from "./context/ThemeContext";
import GlobalStyles from "./styles/globals";

function App() {
    const { themeMode } = useTheme();

    return (
        <ThemeProvider theme={themeMode === 'light' ? theme : darkTheme}>
            <GlobalStyles />
            <Home />
        </ThemeProvider>
    )
}

export default App