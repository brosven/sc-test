import React, { useState } from 'react';
import { NativeSelect, Box } from '@mui/material';
import { ServiceMainInfoType, ServiceType } from '../../../stores/services-store/services-types';
import { changeServiceDescription } from '../../../stores/services-store/services-actions';
import { useAppDispatch } from '../../../stores/root-store/root-store-hooks';
import { ServiceSelectElementType } from './ServiceMainInfoTypes';
import { ConfirmationButtons } from '../../Buttons/ConfirmationButtons/ConfirmationButtons';

export const ServiceMainInfo = ({ service }: { service: ServiceType }) => {
  const initialMainInfoValue = service.mainInfo;
  const [mainInfo, setMainInfo] = useState<ServiceMainInfoType>(initialMainInfoValue);
  const [formChanged, setFormChanged] = useState(false);
  const dispatch = useAppDispatch();

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMainInfo((prev) => ({ ...prev, description: e.target.value }));
    setFormChanged(true);
  };

  const handleTypeChange = (e: React.ChangeEvent<ServiceSelectElementType>) => {
    const selectedValue = e.target.value;
    setMainInfo((prev) => ({ ...prev, type: selectedValue }));
    setFormChanged(true);
  };

  const handleCancel = () => {
    setFormChanged(false);
    setMainInfo(initialMainInfoValue);
  };

  const handleSubmit = () => {
    setMainInfo((prev) => ({ ...prev, lastUpdate: new Date().toLocaleString() }));
    dispatch(changeServiceDescription(service.id, mainInfo));
    setFormChanged(false);
  };

  return (
    <>
      <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <h3>{mainInfo.name}</h3>
        <span>Тип: </span>
        <NativeSelect value={mainInfo.type} onChange={handleTypeChange}>
          <option value="Публичный">Публичный</option>
          <option value="С особыми правами">С особыми правами</option>
          <option value="Со сверх особыми правами">Со сверх особыми правами</option>
        </NativeSelect>
        <p>
          <span>Последнее обновление: </span>
          {mainInfo.lastUpdate}
        </p>
        <textarea value={mainInfo.description} onChange={handleDescriptionChange} />

        {formChanged && <ConfirmationButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />}
      </Box>
    </>
  );
};
