import { ServiceMainInfoType } from '../../../stores/services-store/services-types';

export interface ServiceSelectElementType extends HTMLSelectElement {
  value: ServiceMainInfoType['type'];
}
