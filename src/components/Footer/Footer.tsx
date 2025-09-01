import { Link } from 'react-router';
import styles from './styles.module.css';

export function Footer() {
    //const classes = `${styles.heading} ${styles.cyan}`;
    //const { children } = props;
    return (
        <footer className={styles.footer}>
            <Link to='/about-pomodoro'>
                Entenda como funciona a técnica pomodoro
            </Link>
            <Link to='/'>
                Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com
                💚
            </Link>
        </footer>
    );
}
