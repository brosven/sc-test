import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { ServiceType, ServiceOwnerType } from '../../../stores/services-store/services-types';
import { useAppDispatch } from '../../../stores/root-store/root-store-hooks';
import { changeServiceLastUpdate, changeServiceOwner } from '../../../stores/services-store/services-actions';

export const ServiceOwner = ({ service }: { service: ServiceType }) => {
  const initialOwnerValue = service.owner;

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

  return (
    <>
      <Box component="form" noValidate autoComplete="off">
        <Box component="div" sx={{ display: 'flex', flexDirection: 'column', gap: 2, paddingBottom: '20px' }}>
          <TextField label="Имя" variant="standard" type="text" value={owner.name} onChange={handleNameChange} />
          <TextField
            label="Фамилия"
            variant="standard"
            type="text"
            value={owner.lastName}
            onChange={handleLastNameChange}
          />
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
      </Box>
    </>
  );
};
