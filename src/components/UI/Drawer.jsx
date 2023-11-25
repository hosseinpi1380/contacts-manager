import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, IconButton, Box, Typography, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { FaTwitter } from "react-icons/fa";
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Link } from 'react-router-dom';

import ListItemButton from '@mui/material/ListItemButton';
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
// import { RiHome2Line } from "react-icons/ri";
// import { AiFillInfoCircle } from "react-icons/ai";
// import { IoMdContact } from "react-icons/io";
// import { BiSolidConversation } from "react-icons/bi";
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

      <IconButton onClick={toggleDrawer(true)} sx={{ color: 'white', mr: 'auto' }}>
        <MenuIcon />

      </IconButton>
      <Drawer anchor="left" open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <Box component='img' src='pattern-sample.avif' width='182px' className='bg-cover m-1 shadow-md'>
        </Box>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <List className='bg-gray-800 text-white h-full flex flex-col'>
            <ListItem onClick={() => setOpenDrawer(false)} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>

              <ListItemButton>
                <ListItemIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                </ListItemIcon>
                <ListItemText><Link to='/'>خانه</Link></ListItemText>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
                </ListItemIcon>
                <ListItemText>
                  <Link to='/about'>
                    درباره من
                  </Link>
                </ListItemText>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                </ListItemIcon>
                <ListItemText>
                  <Link to='/nazarat'>
                    نظرات</Link>
                </ListItemText>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                </ListItemIcon>
                <ListItemText>
                  <Link to='/ertebat'>
                    ارتباط با من</Link>
                </ListItemText>
              </ListItemButton>

            </ListItem>
          </List>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',mt:3}}>
          <Typography sx={{mx:1}}>ما را در شبکه های اجتماعی دنبال کنید</Typography>
          <Box component='a' href='telegram.com' sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', mt: 2, fontSize: '20px' }}>
            <FaTelegram/>
            <FaTwitter />
            <FaFacebookSquare />
            <FaLinkedin />
            <FaInstagramSquare />

          </Box>
        </Box>

        <Box sx={{
          display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'
          , p: 2
        }}>
          <Typography>
            طراحی شده با
            {''}
            <FavoriteIcon color='error' />
          </Typography>
          <Typography>
            توسط حسین پیراسبقی
          </Typography>
        </Box>
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
