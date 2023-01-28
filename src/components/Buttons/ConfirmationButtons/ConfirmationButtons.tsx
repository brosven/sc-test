import { Button, Stack } from '@mui/material';
import { ConfirmationButtonsPropsType } from './ConfirmationButtonsTypes';

export const ConfirmationButtons = ({ handleSubmit, handleCancel }: ConfirmationButtonsPropsType) => {
  return (
    <Stack spacing={1} direction="row">
      <Button variant="contained" onClick={handleSubmit}>
        Подтвердить
      </Button>
      <Button variant="outlined" onClick={handleCancel}>
        Отменить
      </Button>
    </Stack>
  );
};
