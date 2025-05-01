import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { useTheme } from '../../context/ThemeContext';
import * as S from './button-theme-mode.styles';

export function ButtonThemeMode() {
    const { themeMode, toggleTheme } = useTheme();

    return (
        <S.ButtonThemeMode onClick={toggleTheme}>
            {themeMode === 'light' ? <MdDarkMode /> : <MdLightMode />}
        </S.ButtonThemeMode>
    );
}
