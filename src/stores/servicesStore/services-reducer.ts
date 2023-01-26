import { AnyAction } from 'redux';
import { ServiceType } from './services-types';
import { ServicesConstants } from './services-constants';

const initialValue: ServiceType[] = [
  {
    id: 'service-1',
    name: 'Сервис - 1',
    description: '',
    type: 'Публичный',
  },
  {
    id: 'service-2',
    name: 'Сервис - 2',
    description: '',
    type: 'С особыми правами',
  },
  {
    id: 'service-3',
    name: 'Сервис - 3',
    description: '',
    type: 'С особыми правами',
  },
];

const servicesReducer = (state: ServiceType[] = initialValue, action: AnyAction) => {
  switch (action.type) {
    case ServicesConstants.ChangeDescription: {
      return state.map((service) =>
        service.id === action.payload.id ? { ...service, description: action.payload.description } : service,
      );
    }
    default: {
      return state;
    }
  }
};

export default servicesReducer;
