import React from "react";
import Hidden from "@mui/material/Hidden";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import TabsC from "./SideTabs";
import Divider from "@mui/material/Divider";
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
          sx={{  width: "100%", color: "white" }}
          className="bg-cyan-900"
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
            <TabsC />
          </Box>
        </Grid>
      </Hidden>
    </>
  );
};

export default Sidebar;
