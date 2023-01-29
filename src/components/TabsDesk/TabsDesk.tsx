import React, { useState } from 'react';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { TabsDeskProps } from './TabsDeskTypes';

export const TabsDesk = ({ tabs, tabListLabel }: TabsDeskProps) => {
  const [value, setValue] = useState('0');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label={tabListLabel}>
            {tabs.map((el, i) => (
              <Tab label={el.header} value={i.toString()} key={i} />
            ))}
          </TabList>
        </Box>
        {tabs.map((el, i) => (
          <TabPanel value={i.toString()} key={i}>
            {el.body}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
};
