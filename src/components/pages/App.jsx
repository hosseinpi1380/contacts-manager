import React, { useContext, useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import homeBg from "../../assets/Home.png";

import Typewriter from "typewriter-effect";

function App() {
  const nameRef = useRef(null);
  const name = [
    "سلام",
    "به صفحه اصلی خوش امدید",
    "  من حسین پیراسبقی هستم ",
    " یک توسعه دهنده فرانت اند هستم",
  ];
  return (
    <>
      <Box
        component="div"
        width="100%"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Typewriter
          options={{ strings: name, autoStart: true, loop: true }}
          onInit={(typewriter) => {
            typewriter.deleteAll().start();
          }}
        />
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
