import { useParams } from 'react-router-dom';
import { ServiceType } from '../../stores/servicesStore/services-types';
import { useAppSelector } from '../../stores/root-store-hooks';
import { selectServices } from '../../stores/root-store-selectors';
import { TabsDesk, TabsType } from '../../components/TabsDesk/TabsDesk';

export const Service = () => {
  const { serviceId } = useParams();
  const services: ServiceType[] = useAppSelector(selectServices);
  const currentService = services.find((el) => el.id === serviceId);

  const serviceTabs: TabsType[] = [
    {
      header: 'Основная информация',
      body: (
        <>
          <h3>{currentService?.mainInfo.name}</h3>
          <p>{currentService?.mainInfo.type}</p>
          <p>{currentService?.mainInfo.lastUpdate.toDateString()}</p>
          <p>{currentService?.mainInfo.description}</p>
        </>
      ),
    },
    {
      header: 'Владелец',
      body: (
        <>
          <p>{currentService?.owner.name}</p>
          <p>{currentService?.owner.lastName}</p>
        </>
      ),
    },
  ];

  return currentService ? (
    <TabsDesk tabs={serviceTabs} tabListLabel="Информация о сервисе" />
  ) : (
    <h2>Сервис не найден</h2>
  );
};
