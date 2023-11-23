import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DrawerComponent from "../UI/Drawer";
import Avatar from "@mui/material/Avatar";

import { Hidden } from "@mui/material";
export default function Header() {
  return (
    <>
      <Hidden smUp>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="sticky" enableColorOnDark={true}>
            <Toolbar className="bg-blue-950 text-white">
            <Button variant="contained">Login</Button>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1,textAlign:'center'}}>
                welcome
              </Typography>
              <DrawerComponent></DrawerComponent>
            </Toolbar>
          </AppBar>
        </Box>
      </Hidden>
    </>
  );
}
