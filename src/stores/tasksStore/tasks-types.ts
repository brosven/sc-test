import { ServiceType } from '../servicesStore/services-types';

export type TaskType = {
  id: string;
  title: string;
  customer: ServiceType['mainInfo']['name'];
  description: string;
  comment: string;
  status: 'new' | 'closed';
};
