import { Box, Button, NativeSelect, Stack, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from '../../../stores/root-store/root-store-hooks';
import { ChangeTaskMainInfo } from '../../../stores/tasks-store/tasks-actions';
import { TaskType } from '../../../stores/tasks-store/tasks-types';
import { TaskCustomerType } from './TaskMainInfoTypes';
import './TaskMainInfo.css';

export const TaskMainInfo = ({ task }: { task: TaskType }) => {
  const initialMaionInfoValue = task;
  const [formChanged, setFormChanged] = useState(false);
  const [mainInfo, setMainInfo] = useState<TaskType>(initialMaionInfoValue);
  const dispatch = useAppDispatch();

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMainInfo((prev) => ({ ...prev, title: e.target.value }));
    setFormChanged(true);
  };

  const handleCustomerChange = (e: React.ChangeEvent<TaskCustomerType>) => {
    const selectedValue = e.target.value;
    setMainInfo((prev) => ({ ...prev, customer: selectedValue }));
    setFormChanged(true);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMainInfo((prev) => ({ ...prev, description: e.target.value }));
    setFormChanged(true);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMainInfo((prev) => ({ ...prev, comment: e.target.value }));
    setFormChanged(true);
  };

  const handleCancel = () => {
    setMainInfo(initialMaionInfoValue);
    setFormChanged(false);
  };

  const handleSubmit = () => {
    dispatch(ChangeTaskMainInfo(mainInfo));
    setFormChanged(false);
  };

  return (
    <>
      <Box className="taskFormWrapper" component="form" noValidate autoComplete="off">
        <TextField
          variant="standard"
          label="Название задачи"
          value={mainInfo.title}
          type="text"
          onChange={handleTitleChange}
          sx={{ marginBottom: '15px' }}
        />
        <NativeSelect value={mainInfo.customer} onChange={handleCustomerChange} sx={{ marginBottom: '15px' }}>
          <option value="Сервис - 1">Сервис - 1</option>
          <option value="Сервис - 2">Сервис - 2</option>
          <option value="Сервис - 3">Сервис - 3</option>
        </NativeSelect>
        <TextField
          variant="standard"
          label="Статус"
          value={mainInfo.status}
          type="text"
          disabled
          sx={{ marginBottom: '15px' }}
        />
        <textarea className="commonTaskTextArea" value={mainInfo.description} onChange={handleDescriptionChange} />
        <textarea className="commonTaskTextArea" value={mainInfo.comment} onChange={handleCommentChange} />

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
