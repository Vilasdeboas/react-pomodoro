import type { TaskModel } from '../../models/TaskModel';

export enum TaskActionTypes {
    START_TASK = 'START_TASK',
    INTERRUPT_TASK = 'INTERRUPT_TASK',
    RESET = 'RESET',
    COUNTDOWN = 'COUNTDOWN',
    COMPLETE_TASK = 'COMPLETE_TASK'
}

export type TaskActionsWithPayload =
    | {
          type: TaskActionTypes.START_TASK;
          payload: TaskModel;
      }
    | {
          type: TaskActionTypes.COUNTDOWN;
          payload: { secondsRemaining: number };
      };

export type TaskActionsWithoutPayload =
    | {
          type: TaskActionTypes.INTERRUPT_TASK;
      }
    | {
          type: TaskActionTypes.RESET;
      }
    | {
          type: TaskActionTypes.COMPLETE_TASK;
      };

export type TaskActionModel =
    | TaskActionsWithPayload
    | TaskActionsWithoutPayload;
