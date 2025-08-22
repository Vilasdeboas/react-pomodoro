import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';
import styles from './styles.module.css';
import { useRef, useState } from 'react';
import type { TaskModel } from '../../models/TaskModel';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';
import { formatSecondsToMinutes } from '../../utils/formatSecondsToMinutes';

export function MainForm() {
    //const [taskName, setTaskName] = useState('');
    const { state, setState } = useTaskContext();
    const taskNameInput = useRef<HTMLInputElement>(null);

    const nextCycle = getNextCycle(state.currentCycle);
    const nextCycleType = getNextCycleType(state.currentCycle);

    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (!taskNameInput.current) {
            return;
        }

        const taskName = taskNameInput.current.value.trim();

        if (!taskName) {
            alert('Digite o nome da tarefa');
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

        const secondsRemaining = newTask.duration * 60;

        setState(prevState => {
            return {
                ...prevState,
                activeTask: newTask,
                currentCycle: nextCycle,
                secondsRemaining,
                formattedSecondsRemaining:
                    formatSecondsToMinutes(secondsRemaining),
                tasks: [...prevState.tasks, newTask]
            };
        });
    }

    function interruptTask() {
        setState(prevState => {
            return {
                ...prevState,
                activeTask: null,
                secondsRemaining: 0,
                formattedSecondsRemaining: '00:00'
            };
        });
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
                <p>Próximo intervalo é de X min</p>
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
                        onClick={interruptTask}
                        key='interrupt_button'
                    />
                )}
            </div>
        </form>
    );
}
