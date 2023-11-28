import React, { useContext, useState } from "react";
import {
  Drawer,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import DrawerTabs from './DrawerTabs'
import MenuIcon from "@mui/icons-material/Menu";
import { FaTwitter } from "react-icons/fa";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { ContextData } from "../../../context/useContext";

const DrawerComponent = () => {
  const { openDrawer, setOpenDrawer, toggleDrawer } = ContextData();
  return (
    <div>
      <IconButton
        onClick={toggleDrawer(true)}
        sx={{ color: "white", mr: "auto" }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box
          component="img"
          src="pattern-sample.avif"
          width="212px"
          className="bg-cover m-1 shadow-md"
        ></Box>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        </Box>
        {/* <DrawerTabs /> */}
        <Box sx={{ display: "flex", flexDirection: "column", mt: 3 }}>
          <Typography sx={{ mx: 1 }}>
            ما را در شبکه های اجتماعی دنبال کنید
          </Typography>
          <Box
            component="a"
            href="telegram.com"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              mt: 2,
              fontSize: "20px",
            }}
          >
            <FaTelegram />
            <FaTwitter />
            <FaFacebookSquare />
            <FaLinkedin />
            <FaInstagramSquare />
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            p: 2,
          }}
        >
          <Typography>
            طراحی شده با
            {""}
            <FavoriteIcon color="error" />
          </Typography>
          <Typography>توسط حسین پیراسبقی</Typography>
        </Box>
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
