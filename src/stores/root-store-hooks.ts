import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootStateType, AppDispatchType } from './root-store';

type DispatchFunc = () => AppDispatchType;

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
