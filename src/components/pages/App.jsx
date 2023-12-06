import React, { useContext, useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import homeBg from "../../assets/png/Home.png";
import SwiperComponent from '../container/Swiper/Swiper'
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
        height="100vh"
        sx={{
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          // flexDirection: "column",
          p:2

        }}
        className="bg-gradient-to-br from-blue-500 to-blue-600"
      >
        <Typewriter
          options={{ strings: name, autoStart: true, loop: true }}
          sx={{ color: "black" }}
          onInit={(typewriter) => {
            typewriter.deleteAll().start();
          }}
        />
        {/* <SwiperComponent/> */}

      </Box>
    </>
  );
}

export default App;
