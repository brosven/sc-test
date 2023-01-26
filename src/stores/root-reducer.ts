import { combineReducers } from 'redux';
import services from './servicesStore/services-reducer';
import tasks from './tasksStore/tasks-reducer';

const rootReducer = combineReducers({ services, tasks });

export default rootReducer;
