import React, { useState } from 'react';
import { Button, Link, TextField, Stack, Box } from '@mui/material';
import { ServiceType, ServiceOwnerType } from '../../../stores/services-store/services-types';
import { useAppDispatch } from '../../../stores/root-store/root-store-hooks';
import { changeServiceLastUpdate, changeServiceOwner } from '../../../stores/services-store/services-actions';
import { ConfirmationButtons } from '../../Buttons/ConfirmationButtons/ConfirmationButtons';
import { JsonButtons } from '../../Buttons/JsonButtons/JsonButtons';

export const ServiceOwner = ({ service }: { service: ServiceType }) => {
  const initialOwnerValue = service.owner;
  const serviceJson = new Blob([JSON.stringify(service)], { type: 'application/json' });
  const serviceJsonDownloadLink = URL.createObjectURL(serviceJson);

  const [formChanged, setFormChanged] = useState(false);
  const [owner, setOwner] = useState<ServiceOwnerType>(initialOwnerValue);
  const dispatch = useAppDispatch();

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOwner((prev) => ({ ...prev, name: e.target.value }));
    setFormChanged(true);
  };

  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOwner((prev) => ({ ...prev, lastName: e.target.value }));
    setFormChanged(true);
  };

  const handleCancel = () => {
    setOwner(initialOwnerValue);
    setFormChanged(false);
  };

  const handleSubmit = () => {
    const currentDate = new Date().toLocaleString();
    dispatch(changeServiceLastUpdate(service.id, currentDate));
    dispatch(changeServiceOwner(service.id, owner));
    setFormChanged(false);
  };

  const handleFileDownload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.readAsText(file);

      reader.onload = (event) => {
        if (typeof event.target?.result === 'string') {
          //Логика обработки загруженного файла
        }
      };
    }
  };

  return (
    <>
      <Box component="form" noValidate autoComplete="off" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField label="Имя" variant="standard" type="text" value={owner.name} onChange={handleNameChange} />
          <TextField
            label="Фамилия"
            variant="standard"
            type="text"
            value={owner.lastName}
            onChange={handleLastNameChange}
          />
        </Box>

        <JsonButtons downloadUrl={serviceJsonDownloadLink} handleJsonDownload={handleFileDownload} />

        {formChanged && <ConfirmationButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />}
      </Box>
    </>
  );
};
