import { combineReducers } from 'redux';
import services from '../services-store/services-reducer';
import tasks from '../tasks-store/tasks-reducer';

const rootReducer = combineReducers({ services, tasks });

export default rootReducer;
