import * as React from 'react';
import Switch from '@mui/material/Switch';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box'
import { ContextData } from '../../context/useContext';
import AddIcon from '@mui/icons-material/Add';
import { NightlightOutlined, WbSunnyOutlined } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
export default function SwitchComponent() {
  const { changeMode } = ContextData()
  const theme=useTheme();
  return (
    <Box sx={{position:'absolute',mt:'10px',ml:'10px'}}>
      <Fab color="primary" aria-label="ThemeChanger" variant='extended' size='small'
        onClick={changeMode}>
        {theme.palette.mode === 'dark' ? <WbSunnyOutlined /> : <NightlightOutlined />}
        {theme.palette.mode === 'dark' ? 'تم روز' : 'تم شب'}

      </Fab>

    </Box>
  );
}