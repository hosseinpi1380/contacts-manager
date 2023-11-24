import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DrawerComponent from "../UI/Drawer";
import { ButtonGroup, Button } from "@mui/material";
import { Hidden } from "@mui/material";
export default function Header() {
  return (
    <>
      <Hidden smUp>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="sticky" enableColorOnDark={true}>
            <Toolbar className="bg-blue-950 text-white flex justify-between">
              <DrawerComponent></DrawerComponent>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center' }}>
                welcome
              </Typography>
              <ButtonGroup variant="contained"  aria-label="contained button group">
                <Button>ورود</Button>
                <Button>ثبت نام</Button>
              </ButtonGroup>
            </Toolbar>
          </AppBar>
        </Box>
      </Hidden>
    </>
  );
}
