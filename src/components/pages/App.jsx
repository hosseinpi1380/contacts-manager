import React, { useContext, useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import homeBg from '../../assets/Home.png'


function App() {
 

  return (
    <>
      <Box component="div" width="100%">
        <Typography variant="h5">با سلام و عرض ادب و احترام</Typography>


        

        <Box
          component="img"
          src={homeBg}
          width="200px"
          height="200px"
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
        ></Box>
      </Box>

    </>
  );
}

export default App;
