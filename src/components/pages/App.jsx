import React, { useContext, useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { ThemeProvider, ThemeContext } from "../../context/useContext";

function App() {
  const theme = useContext(ThemeContext);
  useEffect(() => {
    console.log(theme);
  }, []);
  return (
    <>
      <ThemeProvider>
        <Box component="div" width="100%">
          <Typography variant="h5">با سلام و عرض ادب و احترام</Typography>
          <Box
            component="img"
            src="src/assets/Home.png"
            width="200px"
            height="200px"
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          ></Box>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
