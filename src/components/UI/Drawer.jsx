import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom';
const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <div>
      <IconButton onClick={toggleDrawer(true)} sx={{color:'white'}}>
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={openDrawer} onClose={()=>setOpenDrawer(false)}>
        <List>
          {['home', 'Contacts', 'about', 'communication'].map((text, index) => (
            <ListItem  key={text} onClick={()=>setOpenDrawer(false)} >
              <ListItemIcon >{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <Link to={text=='home'?'/':`/${text}`}> <ListItemText primary={text} /></Link>
            </ListItem>
          ))}
        </List>
      </Drawer>
      {/* Your main content */}
    </div>
  );
};

export default DrawerComponent;
