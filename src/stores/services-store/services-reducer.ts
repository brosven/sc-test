import { AnyAction } from 'redux';
import { ServiceType } from './services-types';
import { ServicesConstants } from './services-constants';
import { servicesInitialValue } from './services-initial-value';

const servicesReducer = (state: ServiceType[] = servicesInitialValue, action: AnyAction) => {
  switch (action.type) {
    case ServicesConstants.ChangeServiceMainInfo: {
      return state.map((service) =>
        service.id === action.payload.id ? { ...service, mainInfo: action.payload.mainInfo } : service,
      );
    }
    case ServicesConstants.ChangeServiceOwner: {
      return state.map((service) =>
        service.id === action.payload.id ? { ...service, owner: action.payload.owner } : service,
      );
    }
    case ServicesConstants.ChangeServiceLastUpdate: {
      return state.map((service) =>
        service.id === action.payload.id
          ? { ...service, mainInfo: { ...service.mainInfo, lastUpdate: action.payload.lastUpdate } }
          : service,
      );
    }
    default: {
      return state;
    }
  }
};

export default servicesReducer;
