
import React, { useState } from "react"
import { Helmet, HelmetProvider } from "react-helmet-async";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const CustomizeButton = styled(Button)(({ theme }) => ({
  backgroundColor: theme.palette.error.main,
  color: "white",
  padding: '10px',
  ":hover": 'none'
}))
const MyComponents = styled('button')(({ theme }) => ({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 5,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  padding: '0 30px',
}))

function App() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>حسین پیراسبقی</title>
        </Helmet>
        fadfadf
      </HelmetProvider>

    </>
  )
}

export default App
