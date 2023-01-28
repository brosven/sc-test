import { TasksConstants } from './tasks-constants';
import { TaskType } from './tasks-types';

export const ChangeTaskMainInfo = (task: TaskType) => ({
  type: TasksConstants.ChangeTaskMainInfo,
  payload: {
    task,
  },
});
