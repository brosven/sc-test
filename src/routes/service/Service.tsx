import { useParams } from 'react-router-dom';
import { ServiceType } from '../../stores/services-store/services-types';
import { useAppSelector } from '../../stores/root-store/root-store-hooks';
import { TabsDesk, TabsType } from '../../components/TabsDesk/TabsDesk';
import { ServiceMainInfo } from '../../components/Service/ServiceMainInfo/ServiceMainInfo';
import { ServiceOwner } from '../../components/Service/ServiceOwner/ServiceOwner';
import { selectServices } from '../../stores/root-store/root-store-selectors';

export const Service = () => {
  const { serviceId } = useParams();
  const services: ServiceType[] = useAppSelector(selectServices);
  const currentService = services.find((el) => el.id === serviceId);

  const serviceTabs: TabsType[] = [
    {
      header: 'Основная информация',
      body: <ServiceMainInfo key={currentService?.id + 'mainInfo'} service={currentService as ServiceType} />,
    },
    {
      header: 'Владелец',
      body: <ServiceOwner key={currentService?.id + 'owner'} service={currentService as ServiceType} />,
    },
  ];

  return currentService ? (
    <TabsDesk tabs={serviceTabs} tabListLabel="Информация о сервисе" />
  ) : (
    <h2>Сервис не найден</h2>
  );
};
