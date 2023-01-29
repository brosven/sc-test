import { ServiceType } from '../services-store/services-types';

export type TaskMainInfoType = {
  title: string;
  customer: ServiceType['mainInfo']['name'];
  description: string;
  comment: string;
  status: 'новая' | 'завершенная';
};

export type TaskType = {
  id: string;
  mainInfo: TaskMainInfoType;
};
