export type Theme = 'light' | 'dark'

export const getInitialTheme = (): Theme => {
    if (typeof window === 'undefined') return 'light'

    const storedTheme = window.localStorage.getItem('theme-mode') as Theme | null
    if (storedTheme === 'light' || storedTheme === 'dark') {
        return storedTheme
    }

    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
}


