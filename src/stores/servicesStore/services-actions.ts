import { ServicesConstants } from './services-constants';
import { ServiceMainInfoType } from './services-types';

export const changeServiceDescription = (id: string, mainInfo: ServiceMainInfoType) => ({
  type: ServicesConstants.ChangeServiceMainInfo,
  payload: {
    id,
    mainInfo,
  },
});
