import styles from './styles.module.css';

type DefaultInputProps = {
    label: string;
    id: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ label, id, type }: DefaultInputProps) {
    return (
        <div className={styles.formRow}>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} />
        </div>
    );
}
