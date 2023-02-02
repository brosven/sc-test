import React, { useState } from 'react';
import { NativeSelect, Box, TextField, InputLabel } from '@mui/material';
import { ServiceMainInfoType, ServiceType } from '../../../stores/services-store/services-types';
import { changeServiceDescription, changeServiceLastUpdate } from '../../../stores/services-store/services-actions';
import { useAppDispatch } from '../../../stores/root-store/root-store-hooks';
import { ServiceSelectElementType } from './ServiceMainInfoTypes';
import { ServiceMainInfoSchema } from './ServiceMainInfoSchema';
import { ConfirmationButtons } from '../../Buttons/ConfirmationButtons/ConfirmationButtons';
import { JsonButtons } from '../../Buttons/JsonButtons/JsonButtons';
import { isEmpty } from 'lodash';

export const ServiceMainInfo = ({ service }: { service: ServiceType }) => {
  const initialMainInfoValue = service.mainInfo;
  const serviceMainInfoJson = new Blob([JSON.stringify(initialMainInfoValue)], { type: 'application/json' });
  const serviceMainInfoJsonDownloadLink = URL.createObjectURL(serviceMainInfoJson);

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
    const currentDate = new Date().toLocaleString();
    setMainInfo((prev) => ({ ...prev, lastUpdate: currentDate }));
    dispatch(changeServiceDescription(service.id, mainInfo));
    dispatch(changeServiceLastUpdate(service.id, currentDate));
    setFormChanged(false);
  };

  const onTaskMainInfoFileLoad = (e: ProgressEvent<FileReader>) => {
    if (typeof e.target?.result === 'string') {
      const fileContent = JSON.parse(e.target?.result);

      if (ServiceMainInfoSchema.safeParse(fileContent).success && !isEmpty(fileContent)) {
        setMainInfo((prev) => ({
          ...prev,
          description: fileContent.description || prev.description,
          type: fileContent.type || prev.type,
        }));
        setFormChanged(true);
      } else {
        alert('Типы полей содержащиеся в файле, не соответсвуют изменяемым типам полей формы');
      }
    }
  };

  const handleFileDownload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = onTaskMainInfoFileLoad;
    }
  };

  return (
    <>
      <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <h3>{mainInfo.name}</h3>
        <InputLabel variant="standard" htmlFor="service-main-info-type" sx={{ fontSize: '0.8rem' }}>
          Тип
        </InputLabel>
        <NativeSelect
          value={mainInfo.type}
          onChange={handleTypeChange}
          inputProps={{
            id: 'service-main-info-type',
          }}
        >
          <option value="Публичный">Публичный</option>
          <option value="С особыми правами">С особыми правами</option>
          <option value="Со сверх особыми правами">Со сверх особыми правами</option>
        </NativeSelect>
        <TextField label="Последнее обновление" variant="standard" type="text" value={mainInfo.lastUpdate} disabled />
        <InputLabel variant="standard" htmlFor="service-main-info-type" sx={{ fontSize: '0.8rem' }}>
          Описание
        </InputLabel>
        <textarea value={mainInfo.description} onChange={handleDescriptionChange} id="service-main-info-description" />
        <JsonButtons downloadUrl={serviceMainInfoJsonDownloadLink} handleJsonDownload={handleFileDownload} />

        {formChanged && <ConfirmationButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />}
      </Box>
    </>
  );
};
