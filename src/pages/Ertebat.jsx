import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";

import {Box,Typography} from '@mui/material'
const Commuication = () => {
  return (
   <>
   <HelmetProvider>
      <Helmet>
        <title>صفحه ارتباط با ما</title>
      </Helmet>
    </HelmetProvider>
  <Box component='div'>
    <Typography component='h4'>ارتباط با ما</Typography>
  </Box>
   </>
  )
}

export default Commuication