import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import styles from './styles.module.css';
import { useRef, useState } from 'react';

export function MainForm() {
    const [taskName, setTaskName] = useState('');
    const taskNameInput = useRef<HTMLInputElement>(null);

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
    }

    return (
        <form
            onSubmit={handleCreateNewTask}
            className={styles.mainForm}
            action=''
        >
            <DefaultInput
                id='taskInput'
                type='text'
                labelText='Task'
                placeholder='Digite algo'
                //onChange={e => setTaskName(e.target.value)}
                //value={taskName}
                ref={taskNameInput}
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
