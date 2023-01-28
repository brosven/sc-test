export type ServiceMainInfoType = {
  name: 'Сервис - 1' | 'Сервис - 2' | 'Сервис - 3';
  type: 'Публичный' | 'С особыми правами' | 'Со сверх особыми правами';
  description: string;
  lastUpdate: string;
};

export type ServiceOwnerType = {
  name: string;
  lastName: string;
};

export type ServiceType = {
  id: string;
  mainInfo: ServiceMainInfoType;
  owner: ServiceOwnerType;
};
