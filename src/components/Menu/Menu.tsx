import {
    HistoryIcon,
    HouseIcon,
    MoonIcon,
    SettingsIcon,
    SunIcon
} from 'lucide-react';
import styles from './styles.module.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router';

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
            <Link
                className={styles.menuLink}
                to='/'
                aria-label='Ir para a Home'
                title='Ir para a Home'
            >
                <HouseIcon />
            </Link>
            <Link
                className={styles.menuLink}
                to='#'
                aria-label='Ver o Histórico'
                title='Ver o Histórico'
            >
                <HistoryIcon />
            </Link>
            <Link
                className={styles.menuLink}
                to='#'
                aria-label='Configurações'
                title='Configurações'
            >
                <SettingsIcon />
            </Link>
            <Link
                onClick={handleThemeChange}
                className={styles.menuLink}
                to='#'
                aria-label='Mudar Tema'
                title='Mudar Tema'
            >
                {nextThemeIcon[theme]}
            </Link>
        </nav>
    );
}
