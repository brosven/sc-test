import { AnyAction } from 'redux';
import { TaskType } from './tasks-types';
import { TasksConstants } from './tasks-constants';
import { tasksInitialValue } from './tasks-initial-value';

const tasksReducer = (state: TaskType[] = tasksInitialValue, action: AnyAction) => {
  switch (action.type) {
    case TasksConstants.ChangeTaskMainInfo: {
      return state.map((task) =>
        task.id === action.payload.id ? { ...task, mainInfo: action.payload.mainInfo } : task,
      );
    }
    default: {
      return state;
    }
  }
};

export default tasksReducer;
