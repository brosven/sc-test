import { Box, NativeSelect, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from '../../../stores/root-store/root-store-hooks';
import { ChangeTaskMainInfo } from '../../../stores/tasks-store/tasks-actions';
import { TaskType } from '../../../stores/tasks-store/tasks-types';
import { TaskCustomerType } from './TaskMainInfoTypes';
import { ConfirmationButtons } from '../../Buttons/ConfirmationButtons/ConfirmationButtons';

export const TaskMainInfo = ({ task }: { task: TaskType }) => {
  const initialMainInfoValue = task;
  const [formChanged, setFormChanged] = useState(false);
  const [mainInfo, setMainInfo] = useState<TaskType>(initialMainInfoValue);
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
    setMainInfo(initialMainInfoValue);
    setFormChanged(false);
  };

  const handleSubmit = () => {
    dispatch(ChangeTaskMainInfo(mainInfo));
    setFormChanged(false);
  };

  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }} component="form" noValidate autoComplete="off">
        <TextField
          variant="standard"
          label="Название задачи"
          value={mainInfo.title}
          type="text"
          onChange={handleTitleChange}
        />
        <NativeSelect value={mainInfo.customer} onChange={handleCustomerChange}>
          <option value="Сервис - 1">Сервис - 1</option>
          <option value="Сервис - 2">Сервис - 2</option>
          <option value="Сервис - 3">Сервис - 3</option>
        </NativeSelect>
        <TextField variant="standard" label="Статус" value={mainInfo.status} type="text" disabled />
        <textarea value={mainInfo.description} onChange={handleDescriptionChange} />
        <textarea value={mainInfo.comment} onChange={handleCommentChange} />

        {formChanged && <ConfirmationButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />}
      </Box>
    </>
  );
};
