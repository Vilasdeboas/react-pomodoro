import {
    HistoryIcon,
    HouseIcon,
    MoonIcon,
    SettingsIcon,
    SunIcon
} from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';

type AvailableThemes = 'dark' | 'light';

export function Menu() {
    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme =
            (localStorage.getItem('theme') as AvailableThemes) || 'dark';

        return storageTheme;
    });

    const nextThemeIcon = {
        dark: (
            <>
                <SunIcon />
            </>
        ),
        light: (
            <>
                <MoonIcon />
            </>
        )
    };

    function handleThemeChange(
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) {
        event.preventDefault();
        setTheme(prevState => {
            const nextState = prevState == 'dark' ? 'light' : 'dark';
            return nextState;
        });
        //return false;
    }

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        return () => {
            console.log('Menu Updated');
        };
    }, [theme]);

    return (
        <nav className={styles.menu}>
            <a
                className={styles.menuLink}
                href='#'
                aria-label='Ir para a Home'
                title='Ir para a Home'
            >
                <HouseIcon />
            </a>
            <a
                className={styles.menuLink}
                href='#'
                aria-label='Ver o Histórico'
                title='Ver o Histórico'
            >
                <HistoryIcon />
            </a>
            <a
                className={styles.menuLink}
                href='#'
                aria-label='Configurações'
                title='Configurações'
            >
                <SettingsIcon />
            </a>
            <a
                onClick={handleThemeChange}
                className={styles.menuLink}
                href='#'
                aria-label='Mudar Tema'
                title='Mudar Tema'
            >
                {nextThemeIcon[theme]}
            </a>
        </nav>
    );
}
