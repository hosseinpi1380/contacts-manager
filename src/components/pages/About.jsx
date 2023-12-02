import React from "react";
import { Box } from "@mui/material";
import aboutImg from '/src/assets/search.png'
const About = () => {
  return (
    <>
      <div>درباره من</div>
      <Box component='img' src={aboutImg} width='200px' height='200px'></Box>
    </>
  );
};

export default About;
