import styles from './styles.module.css';

type HeadingProps = {
    children: React.ReactNode;
};

export function Heading({ children }: HeadingProps) {
    //const classes = `${styles.heading} ${styles.cyan}`;
    //const { children } = props;
    return <h1 className={styles.heading}>{children}</h1>;
}
