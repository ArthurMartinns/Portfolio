import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTheme } from '../../context/ThemeContext';
import * as S from './button-theme-mode.styles'
import { useState } from 'react';

export function ButtonThemeMode() {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggle = () => {
        setIsDarkMode(!isDarkMode)
    }

    const { toggleTheme } = useTheme();

    const togglefuncs = () => {
        toggleTheme()
        toggle()
    }

    return (
        <S.ButtonThemeMode onClick={togglefuncs}>
            {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
        </S.ButtonThemeMode>

    )
} 