import { TasksConstants } from './tasks-constants';

export const changeTaskDescription = (id: string, description: string) => ({
  type: TasksConstants.ChangeDescription,
  payload: {
    id,
    description,
  },
});

export const changeTaskComment = (id: string, comment: string) => ({
  type: TasksConstants.ChangeComment,
  payload: {
    id,
    comment,
  },
});
