import { ServiceMainInfoType, ServiceType } from '../../stores/servicesStore/services-types';

export type ServiceDescriptionPropType = {
  service: ServiceType;
};

export interface ServiceSelectElement extends HTMLSelectElement {
  value: ServiceMainInfoType['type'];
}
