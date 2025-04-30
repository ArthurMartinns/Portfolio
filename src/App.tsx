import { ThemeProvider } from "styled-components"
import Home from "./pages/Home/Home"
import { darkTheme, theme } from "./styles/theme"
import { useTheme } from "./context/ThemeContext";

function App() {
    const { themeMode } = useTheme();

    return (
        <>
            <ThemeProvider theme={themeMode == 'light' ? theme : darkTheme}>
                <Home />
            </ThemeProvider>
        </>
    )
}

export default App