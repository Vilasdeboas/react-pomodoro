import { PlayCircleIcon, PlayIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import styles from './styles.module.css';

export function MainForm() {
    return (
        <form className={styles.mainForm} action=''>
            <DefaultInput
                type='text'
                labelText='Task'
                id='taskInput'
                placeholder='Digite algo'
            />
            <div className='formRow'>
                <p>Próximo intervalo é de X min</p>
            </div>

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
