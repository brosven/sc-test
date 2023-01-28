import { ServicesConstants } from './services-constants';
import { ServiceMainInfoType, ServiceOwnerType } from './services-types';

export const changeServiceDescription = (id: string, mainInfo: ServiceMainInfoType) => ({
  type: ServicesConstants.ChangeServiceMainInfo,
  payload: {
    id,
    mainInfo,
  },
});

export const changeServiceOwner = (id: string, owner: ServiceOwnerType) => ({
  type: ServicesConstants.ChangeServiceOwner,
  payload: {
    id,
    owner,
  },
});

export const changeServiceLastUpdate = (id: string, lastUpdate: string) => ({
  type: ServicesConstants.ChangeServiceLastUpdate,
  payload: {
    id,
    lastUpdate,
  },
});
