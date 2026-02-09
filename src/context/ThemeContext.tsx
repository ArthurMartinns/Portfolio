/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { getInitialTheme, Theme } from './theme.utils';

interface ThemeContextProps {
    themeMode: Theme;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
    themeMode: 'light',
    toggleTheme: () => { },
});

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProviderContext: React.FC<ThemeProviderProps> = ({ children }) => {
    const [themeMode, setTheme] = useState<Theme>(() => getInitialTheme());

    useEffect(() => {
        if (typeof window === 'undefined') return
        window.localStorage.setItem('theme-mode', themeMode)
    }, [themeMode])

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    return useContext(ThemeContext);
};