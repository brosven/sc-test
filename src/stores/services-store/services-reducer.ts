import { AnyAction } from 'redux';
import { ServiceType } from './services-types';
import { ServicesConstants } from './services-constants';

const initialValue: ServiceType[] = [
  {
    id: 'service-1',
    mainInfo: {
      name: 'Сервис - 1',
      type: 'Публичный',
      description: 'Описание Сервиса - 1',
      lastUpdate: new Date(2022, 12, 24).toLocaleString(),
    },
    owner: {
      name: 'Имя владельца Сервиса - 1',
      lastName: 'Фамилия владельца Сервиса - 1',
    },
  },
  {
    id: 'service-2',
    mainInfo: {
      name: 'Сервис - 2',
      type: 'Со сверх особыми правами',
      description: 'Описание Сервиса - 2',
      lastUpdate: new Date(2022, 9, 2).toLocaleString(),
    },
    owner: {
      name: 'Имя владельца Сервиса - 2',
      lastName: 'Фамилия владельца Сервиса - 2',
    },
  },
  {
    id: 'service-3',
    mainInfo: {
      name: 'Сервис - 3',
      type: 'С особыми правами',
      description: 'Описание Сервиса - 3',
      lastUpdate: new Date(2022, 1, 1).toLocaleString(),
    },
    owner: {
      name: 'Имя владельца Сервиса - 3',
      lastName: 'Фамилия владельца Сервиса - 3',
    },
  },
];

const servicesReducer = (state: ServiceType[] = initialValue, action: AnyAction) => {
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
