import { legacy_createStore } from 'redux';
import rootReducer from './root-reducer';

const store = legacy_createStore(rootReducer);

export type RootStateType = ReturnType<typeof store.getState>;
export type AppDispatchType = typeof store.dispatch;
export default store;
