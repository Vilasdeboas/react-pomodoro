import styles from './styles.module.css';

type DefaultInputProps = {
    labelText?: string;
    id: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({
    labelText,
    id,
    type,
    ...rest
}: DefaultInputProps) {
    return (
        <div className={styles.formRow}>
            {labelText && <label htmlFor={id}>{labelText}</label>}
            <input id={id} type={type} {...rest} />
        </div>
    );
}
