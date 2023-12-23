import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import ContactsIcon from '@mui/icons-material/Contacts';

import { EmailRounded, Face2Outlined } from '@mui/icons-material';
const Commuication = () => {
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>صفحه ارتباط با ما</title>
        </Helmet>
      </HelmetProvider>
      <Box>
        <Divider textAlign='center' sx={{ mt: '10px' }}>
          <Chip color='error' size='medium' label={
            <Box sx={{ display: 'flex', flexDirection: 'row' }}>
              <Typography>ارتباط با من</Typography>
              <ContactsIcon />
            </Box>
          }
            variant="filled" sx={{ fontSize: '16px' }} />
        </Divider>
        <Card sx={{ mt: '10px' }}>
          <CardContent>
            <form autoComplete='true'>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField label='نام و نام خانوادگی'
                    fullWidth
                    name='fullname'
                    variant='outlined'
                  />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField label='ادرس ایمیل'
                    fullWidth
                    name='email'
                    variant='outlined' />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <TextField label='عنوان'
                    fullWidth
                    name='subject'
                    variant='outlined' />
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <TextField label='متن پیام'
                    multiline
                    rows={6}
                    fullWidth
                    name='message'
                    variant='outlined' />
                </Grid>
              </Grid>
            </form>
          </CardContent>
          
            <CardActions>
              <Button type='submit' color='success' variant='contained' fullWidth>ثبت</Button>
            </CardActions>
          
        </Card>

      </Box>
    </>
  )
}

export default Commuication