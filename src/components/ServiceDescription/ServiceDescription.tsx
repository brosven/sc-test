import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { NativeSelect } from '@mui/material';
import { ServiceMainInfoType } from '../../stores/servicesStore/services-types';
import { changeServiceDescription } from '../../stores/servicesStore/services-actions';
import { useAppDispatch } from '../../stores/root-store-hooks';
import { ServiceDescriptionPropType, ServiceSelectElement } from './ServiceDescriptionTypes';
import './ServiceDescription.css';

export const ServiceDescription = ({ service }: ServiceDescriptionPropType) => {
  let initialState = service.mainInfo;
  const [mainInfo, setMainInfo] = useState<ServiceMainInfoType>(initialState);
  const [formChanged, setFormChanged] = useState(true);
  const dispatch = useAppDispatch();

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMainInfo((prev) => ({ ...prev, description: e.target.value }));
    setFormChanged(true);
  };

  const handleTypeChange = (e: React.ChangeEvent<ServiceSelectElement>) => {
    const selectedValue = e.target.value;
    setMainInfo((prev) => ({ ...prev, type: selectedValue }));
    setFormChanged(true);
  };

  const handleCancel = () => {
    setFormChanged(false);
    setMainInfo(service.mainInfo);
  };

  const handleSubmit = () => {
    dispatch(changeServiceDescription(service.id, mainInfo));
    setFormChanged(false);
  };

  return (
    <>
      <Box component="form" noValidate autoComplete="off" sx={{ paddingBottom: '20px' }}>
        <h3>{mainInfo.name}</h3>
        <span>Тип: </span>
        <NativeSelect value={mainInfo.type} onChange={handleTypeChange}>
          <option value="Публичный">Публичный</option>
          <option value="С особыми правами">С особыми правами</option>
          <option value="Со сверх особыми правами">Со сверх особыми правами</option>
        </NativeSelect>
        <p>
          <span>Последнее обновление: </span>
          {mainInfo.lastUpdate.toDateString()}
        </p>
        <textarea className="descriptionField" value={mainInfo.description} onChange={handleDescriptionChange} />
      </Box>
      {formChanged && (
        <Stack spacing={2} direction="row">
          <Button variant="contained" onClick={handleSubmit}>
            Подтвердить
          </Button>
          <Button variant="outlined" onClick={handleCancel}>
            Отменить
          </Button>
        </Stack>
      )}
    </>
  );
};
