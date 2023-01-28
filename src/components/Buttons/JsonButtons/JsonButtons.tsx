import { Button, Link, Stack } from '@mui/material';
import { JsonButtonsPropsType } from './JsonButtonsTypes';

export const JsonButtons = ({ downloadUrl, handleJsonDownload }: JsonButtonsPropsType) => {
  return (
    <>
      <Stack spacing={1} direction="row">
        <Button variant="outlined" component="label">
          <Link href={downloadUrl} underline="none" download>
            Скачать JSON
          </Link>
        </Button>
        <Button variant="outlined" component="label">
          Загрузить данные из JSON
          <input type="file" accept="application/JSON" hidden onChange={handleJsonDownload} />
        </Button>
      </Stack>
    </>
  );
};
