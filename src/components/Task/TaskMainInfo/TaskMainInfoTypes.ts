import { ServiceMainInfoType } from '../../../stores/services-store/services-types';

export interface TaskCustomerType extends HTMLSelectElement {
  value: ServiceMainInfoType['name'];
}
