import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { ContextData } from '../../../context/useContext';
export default function DrawerTabs() {
  const [value, setValue] = React.useState('one');
    const {setOpenDrawer}=ContextData();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    setOpenDrawer(false)
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="primary"
        indicatorColor="primary"
        orientation='vertical'
        aria-label="secondary tabs example"
        
      >
        <Tab value="one" label="Item One"/>
        <Tab value="two" label="Item Two"/>
        <Tab value="three" label="Item Three"/>
      </Tabs>
    </Box>
  );
}