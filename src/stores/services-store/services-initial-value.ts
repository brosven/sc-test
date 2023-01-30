import { ServiceType } from './services-types';

export const servicesInitialValue: ServiceType[] = [
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
