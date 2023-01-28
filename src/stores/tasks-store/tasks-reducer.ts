import { AnyAction } from 'redux';
import { TaskType } from './tasks-types';
import { TasksConstants } from './tasks-constants';

const initialValue: TaskType[] = [
  {
    id: 'service-1-1',
    title: 'Заголовок задачи - 1',
    customer: 'Сервис - 1',
    description: 'Описание задачи - 1',
    comment: 'Комментарий к задаче - 1',
    status: 'новая',
  },
  {
    id: 'service-2-1',
    title: 'Заголовок задачи - 1',
    customer: 'Сервис - 2',
    description: 'Описание задачи - 1',
    comment: 'Комментарий к задаче - 1',
    status: 'завершенная',
  },
  {
    id: 'service-3-1',
    title: 'Заголовок задачи - 1',
    customer: 'Сервис - 3',
    description: 'Описание задачи - 1',
    comment: 'Комментарий к задаче - 1',
    status: 'новая',
  },
  {
    id: 'service-1-2',
    title: 'Заголовок задачи - 2',
    customer: 'Сервис - 1',
    description: 'Описание задачи - 2',
    comment: 'Комментарий к задаче - 2',
    status: 'завершенная',
  },
  {
    id: 'service-2-2',
    title: 'Заголовок задачи - 2',
    customer: 'Сервис - 2',
    description: 'Описание задачи - 2',
    comment: 'Комментарий к задаче - 2',
    status: 'новая',
  },
  {
    id: 'service-3-2',
    title: 'Заголовок задачи - 2',
    customer: 'Сервис - 3',
    description: 'Описание задачи - 2',
    comment: 'Комментарий к задаче - 2',
    status: 'новая',
  },
];

const tasksReducer = (state: TaskType[] = initialValue, action: AnyAction) => {
  switch (action.type) {
    case TasksConstants.ChangeTaskMainInfo: {
      return state.map((task) => (task.id === action.payload.task.id ? { ...action.payload.task } : task));
    }
    default: {
      return state;
    }
  }
};

export default tasksReducer;
