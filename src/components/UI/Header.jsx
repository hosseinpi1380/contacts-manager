import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DrawerComponent from "./Drawer";
import Avatar from "@mui/material/Avatar";

import { Hidden } from "@mui/material";
export default function Header() {
  return (
    <>
      <Hidden smUp>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="sticky" enableColorOnDark={true}>
            <Toolbar className="bg-blue-950 text-white">
              <DrawerComponent></DrawerComponent>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                welcome
              </Typography>
              <Avatar
                src="/public/bg-1.jpg"
                variant="square"
                sx={{ ml: "auto" }}
              >
                hossein pirasbaghi
              </Avatar> 
              <Button variant="contained">Login</Button>
            </Toolbar>
          </AppBar>
        </Box>
      </Hidden>
    </>
  );
}
