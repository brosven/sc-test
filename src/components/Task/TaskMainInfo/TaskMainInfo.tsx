import { Box, NativeSelect, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useAppDispatch } from '../../../stores/root-store/root-store-hooks';
import { ChangeTaskMainInfo } from '../../../stores/tasks-store/tasks-actions';
import { TaskMainInfoType, TaskType } from '../../../stores/tasks-store/tasks-types';
import { TaskCustomerType } from './TaskMainInfoTypes';
import { ConfirmationButtons } from '../../Buttons/ConfirmationButtons/ConfirmationButtons';
import { JsonButtons } from '../../Buttons/JsonButtons/JsonButtons';
import { taskMainInfoSchema } from './TaskMainInfoSchema';
import isEmpty from 'lodash/isEmpty';

export const TaskMainInfo = ({ task }: { task: TaskType }) => {
  const initialTaskMainInfoValue = task.mainInfo;
  const taskMainInfoJson = new Blob([JSON.stringify(initialTaskMainInfoValue)], { type: 'application/json' });
  const taskMainInfoJsonDownloadLink = URL.createObjectURL(taskMainInfoJson);

  const [formChanged, setFormChanged] = useState(false);
  const [mainInfo, setMainInfo] = useState<TaskMainInfoType>(initialTaskMainInfoValue);
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
    setMainInfo(initialTaskMainInfoValue);
    setFormChanged(false);
  };

  const handleSubmit = () => {
    dispatch(ChangeTaskMainInfo(task.id, mainInfo));
    setFormChanged(false);
  };

  const onTaskMainInfoFileLoad = (event: ProgressEvent<FileReader>) => {
    if (typeof event.target?.result === 'string') {
      const fileContent = JSON.parse(event.target?.result);

      if (taskMainInfoSchema.safeParse(fileContent).success && !isEmpty(fileContent)) {
        setMainInfo((prev) => ({ ...prev, ...fileContent }));
        setFormChanged(true);
      } else {
        alert('Типы полей содержащиеся в файле, не соответсвуют типам полей формы');
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

        <JsonButtons downloadUrl={taskMainInfoJsonDownloadLink} handleJsonDownload={handleFileDownload} />
        {formChanged && <ConfirmationButtons handleSubmit={handleSubmit} handleCancel={handleCancel} />}
      </Box>
    </>
  );
};
