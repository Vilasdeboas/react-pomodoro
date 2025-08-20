import { PlayCircleIcon, PlayIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import styles from './styles.module.css';

export function Form() {
    return (
        <form className={styles.form} action=''>
            <DefaultInput
                type='text'
                labelText='Task'
                id='taskInput'
                placeholder='Digite algo'
            />
            <div className={styles.formRow}>
                <Cycles />
            </div>

            <div className={styles.formRow}>
                <DefaultButton
                    icon={
                        <>
                            <PlayCircleIcon />
                        </>
                    }
                />
            </div>
        </form>
    );
}
