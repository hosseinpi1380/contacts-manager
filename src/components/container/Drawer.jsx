import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { FaTwitter } from "react-icons/fa";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link } from "react-router-dom";

import ListItemButton from "@mui/material/ListItemButton";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
// import { RiHome2Line } from "react-icons/ri";
// import { AiFillInfoCircle } from "react-icons/ai";
// import { IoMdContact } from "react-icons/io";
// import { BiSolidConversation } from "react-icons/bi";
import { HomeIcon, AboutIcon, NazarIcon, ErtebatIcon } from "../icons/icons";
const DrawerComponent = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(open);
  };
  const tabs = [
    { icon: <HomeIcon />, title: "خانه", to: "/" },
    { icon: <AboutIcon />, title: "درباره من", to: "/about" },
    { icon: <NazarIcon />, title: "نظرات", to: "/nazarat" },
    { icon: <ErtebatIcon />, title: "ارتباط با من", to: "/ertebat" },
  ];
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
          width="182px"
          className="bg-cover m-1 shadow-md"
        ></Box>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <List className="bg-gray-800 text-white h-full flex flex-col">
            <ListItem
              onClick={() => setOpenDrawer(false)}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
              }}
            >
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon />
                </ListItemIcon>
                <ListItemText>
                  <Link to="/">خانه</Link>
                </ListItemText>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <AboutIcon />
                </ListItemIcon>
                <ListItemText>
                  <Link to="/about">درباره من</Link>
                </ListItemText>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <NazarIcon />
                </ListItemIcon>
                <ListItemText>
                  <Link to="/nazarat">نظرات</Link>
                </ListItemText>
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <ErtebatIcon />
                </ListItemIcon>
                <ListItemText>
                  <Link to="/ertebat">ارتباط با من</Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
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
