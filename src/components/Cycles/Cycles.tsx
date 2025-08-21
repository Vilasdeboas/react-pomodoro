import styles from './styles.module.css';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { getNextCycle } from '../../utils/getNextCycle';
import { getNextCycleType } from '../../utils/getNextCycleType';

export function Cycles() {
    const { state } = useTaskContext();

    const cycleStep = Array.from({ length: state.currentCycle });

    const cycleDescriptionMap = {
        workTime: 'foco',
        shortBreakTime: 'descanso curso',
        longBreakTime: 'descanso longo'
    };

    return (
        <div className={styles.cycles}>
            <span>Ciclos:</span>
            <div className={styles.cycleDots}>
                {cycleStep.map((_, index) => {
                    const nextCycle = getNextCycle(index);
                    const nextCycleType = getNextCycleType(nextCycle);
                    const accessibilityLabel = `Indicador do ciclo de ${cycleDescriptionMap[nextCycleType]}`;
                    const key = `${nextCycleType}_${nextCycle}`;
                    return (
                        <span
                            key={key}
                            className={`${styles.cycleDot} ${styles[nextCycleType]} `}
                            aria-label={accessibilityLabel}
                            title={accessibilityLabel}
                        />
                    );
                })}

                {/*<span className={`${styles.cycleDot} ${styles.workTime} `} />*/}
            </div>
        </div>
    );
}
