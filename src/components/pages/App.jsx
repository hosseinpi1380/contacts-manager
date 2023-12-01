import React, { useContext, useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import homeBg from '../../assets/Home.png'

import { useCallback } from "react";
import Particles from "react-particles";
import { sample, hezagon } from "../constants/Particles";
import { loadFull } from "tsparticles";
import ParticleCom from '../container/App'
function App() {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    console.log(container);
  }, []);

  return (
    <>
      <Box component="div" width="100%">
        <Typography variant="h5">با سلام و عرض ادب و احترام</Typography>

        <ParticleCom>

        </ParticleCom >

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
