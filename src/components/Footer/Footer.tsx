import styles from './styles.module.css';

export function Footer() {
    //const classes = `${styles.heading} ${styles.cyan}`;
    //const { children } = props;
    return (
        <footer className={styles.footer}>
            <a href='#'>Entenda como funciona a técnica pomodoro</a>
            <a href='#'>
                Chronos Pomodoro &copy; {new Date().getFullYear()} - Feito com
                💚
            </a>
        </footer>
    );
}
