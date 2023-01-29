import { Tree } from '../../components/Tree/Tree';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

export const Root = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Tree />
      <Outlet />
    </Box>
  );
};
