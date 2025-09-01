import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import styles from './styles.module.css';
import { useRef } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { TaskActionTypes } from '../../contexts/TaskContext/taskActions';
import { Tips } from '../Tips';
import { toast } from 'react-toastify';
import { showMessage } from '../../adapters/showMessage';

export function MainForm() {
    //const [taskName, setTaskName] = useState('');
    const { state, dispatch } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null);

    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(nextCycle);

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        showMessage.dismiss();

        if (!taskNameInput.current) {
            return;
        }

        const taskName = taskNameInput.current.value.trim();

        if (!taskName) {
            showMessage.warn('Digite o nome da tarefa');
            //alert('Digite o nome da tarefa');
            return;
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: taskName,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCycleType],
            type: nextCycleType
        };

        dispatch({ type: TaskActionTypes.START_TASK, payload: newTask });
        showMessage.success('Tarefa iniciada');
    }

    function handleInterruptTask() {
        showMessage.dismiss();
        showMessage.error('Tarefa interrompida!');
        dispatch({ type: TaskActionTypes.INTERRUPT_TASK });
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
                disabled={!!state.activeTask}
            />
            <div className='formRow'>
                <Tips />
            </div>

            {state.currentCycle > 0 && (
                <div className={styles.formRow}>
                    <Cycles />
                </div>
            )}

            <div className={styles.formRow}>
                {!state.activeTask && (
                    <DefaultButton
                        aria-label='Iniciar nova tarefa'
                        title='Iniciar nova tarefa'
                        type='submit'
                        icon={<PlayCircleIcon />}
                        key='start_button'
                    />
                )}
                {!!state.activeTask && (
                    <DefaultButton
                        aria-label='Interromper nova tarefa'
                        title='Interromper nova tarefa'
                        type='button'
                        color='red'
                        icon={<StopCircleIcon />}
                        onClick={handleInterruptTask}
                        key='interrupt_button'
                    />
                )}
            </div>
        </form>
    );
}
