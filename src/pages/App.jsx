import React, { useContext, useEffect, useState, useRef } from "react";
import { Box, Typography } from "@mui/material";
import TextTransition, { presets } from 'react-text-transition';
import SwiperComponent from "../components/container/Swiper/Swiper";
import { Helmet, HelmetProvider } from "react-helmet-async";
const TEXTS = [
  'حسین پیراسبقی هستم',
  '22 سالمه',
  'در تهران زندگی میکنم',
  'در دانشگاه آزاد اسلامی واحد یادگار امام ره تحصیل میکنم',
  'یک توسعه دهنده فرانت اند هستم',
  'علاقه به یادگیری پریمیر و فوتوشاپ دارم.'
];
function App() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      2000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>صفحه اصلی</title>
      </Helmet>
    </HelmetProvider>
      <Box
        component="div"
        width="100%"
        height="100%"
        sx={{
          p: 2
        }}
        className="bg-gradient-to-br from-blue-500 to-blue-600"
      >
        <Box component='div' sx={{display:'flex',alignItems:'center'}}
         className="bg-gradient-to-r from-blue-700 to-pink-600 rounded-md shadow-md mb-2 px-1">
          <Typography sx={{mr:1}}  variant="h5">
          من 
          </Typography>
        <TextTransition springConfig={presets.wobbly}>
          {TEXTS[index % TEXTS.length]}</TextTransition>
        </Box>
<SwiperComponent/>

      </Box>
    </>
  );
}

export default App;
