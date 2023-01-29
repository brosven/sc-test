import { TasksConstants } from './tasks-constants';
import { TaskMainInfoType } from './tasks-types';

export const ChangeTaskMainInfo = (id: string, mainInfo: TaskMainInfoType) => ({
  type: TasksConstants.ChangeTaskMainInfo,
  payload: {
    id,
    mainInfo,
  },
});
