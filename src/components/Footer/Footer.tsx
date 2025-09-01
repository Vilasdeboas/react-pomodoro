import styles from './styles.module.css';
import { RouterLink } from '../RouterLink';

export function Footer() {
    //const classes = `${styles.heading} ${styles.cyan}`;
    //const { children } = props;
    return (
        <footer className={styles.footer}>
            <RouterLink href='/about-pomodoro'>
                Entenda como funciona a técnica pomodoro
            </RouterLink>
            <RouterLink href='/'>
                Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com
                💚
            </RouterLink>
        </footer>
    );
}
