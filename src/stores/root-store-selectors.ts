import { RootStateType } from './root-store';

export const selectServices = (store: RootStateType) => store.services;
export const selectTasks = (store: RootStateType) => store.tasks;
