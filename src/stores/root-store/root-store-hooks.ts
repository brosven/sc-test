import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { DispatchFunc, RootStateType } from './root-store-types';

export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector;
