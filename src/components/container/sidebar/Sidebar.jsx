import React from "react";
import { Avatar, Box, Grid, Typography, Hidden, Divider, IconButton } from "@mui/material";
// import { GitHubIcon, WhatsAppIcon, TelegramIcon, InstagramIcon } from '@mui/icons-material'
import GitHubIcon from '@mui/icons-material/GitHub'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import TabsC from "./SideTabs";
const Sidebar = () => {
  return (
    <>
      <Hidden smDown >
        <Grid
          item
          lg={2}
          md={2}
          sm={3}
          xs={0}
          sx={{ width: "100%", color: "white" }}
          className="bg-gray-900"
        >
          <Box >
            <Avatar
              alt="Remy Sharp"
              src="/bg-1.jpg"
              sx={{ width: 140, height: 140, mx: "auto", mt: "40px" }}
              variant="rounded"
            />
            <Typography variant="h5" sx={{ textAlign: "center", mt: 1 }}>
              حسین پیراسبقی
            </Typography>
            <Typography variant="subtitle2" sx={{ textAlign: "center" }}>
              برنامه نویس فرانت اند
            </Typography>
            <Divider light variant="middle" />
            <Box component='div' sx={{
              display: 'flex', alignItems: 'center', margin: '0 auto',
              justifyContent: 'space-evenly', flexDirection: 'row-reverse', mt: '10px'
            }}>
              <IconButton aria-label="github" sx={{ color: 'white' }}>
                <a href="https://github.com/hosseinpi1380" target="_blank" ><GitHubIcon /></a>
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <TelegramIcon></TelegramIcon>
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <WhatsAppIcon></WhatsAppIcon>
              </IconButton>
              <IconButton sx={{ color: 'white' }}>
                <InstagramIcon></InstagramIcon>
              </IconButton>
            </Box>
            <TabsC />
          </Box>
        </Grid>
      </Hidden>
    </>
  );
};

export default Sidebar;
