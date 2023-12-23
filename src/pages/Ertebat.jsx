import React from 'react'
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Box, Button, Card, CardActionArea, CardActions, CardContent, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import ContactsIcon from '@mui/icons-material/Contacts';
import { useFormik } from 'formik';
import { contactShecema } from '../components/constants/ContactSchema';
const Commuication =  () => {
  const submitHandler = async(values, actions) => {
    // console.log(values)
    // console.log(actions)
    await new Promise(resolve => setTimeout(resolve, 1000));
    actions.resetForm();
  }
  const { values, touched, errors,isSubmitting, handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues: {
      fullname: '', email: '', subject: '', message: ''
    },
    validationSchema: contactShecema,
    onSubmit: submitHandler
  });

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>صفحه ارتباط با ما</title>
        </Helmet>
      </HelmetProvider>
      <Box sx={{ height: '100%' }}>
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
          <form autoComplete='true' onSubmit={handleSubmit}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField label='نام و نام خانوادگی'
                    fullWidth
                    name='fullname'
                    type='text'
                    variant='outlined'
                    value={values.fullname}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.fullname ? true : false}
                  />
                  {errors.fullname && touched.fullname && <p>{errors.fullname}</p>}
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <TextField label='ادرس ایمیل'
                    fullWidth
                    name='email'
                    type='email'
                    variant='outlined'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email ? true : false}

                  />
                  {errors.email && touched.email && <p>{errors.email}</p>}
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <TextField label='عنوان'
                    fullWidth
                    name='subject'
                    variant='outlined'
                    value={values.title}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.subject ? true : false}
                  />
                  {errors.subject && touched.subject && <p>{errors.subject}</p>}
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <TextField label='متن پیام'
                    multiline
                    rows={6}
                    fullWidth
                    name='message'
                    variant='outlined'
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.message ? true : false}
                  />
                  {errors.message && touched.message && <p>{errors.message}</p>}
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button disabled={isSubmitting} type='submit' color='success' variant='contained' fullWidth>ثبت</Button>
            </CardActions>
          </form>


        </Card>

      </Box >
    </>
  )
}

export default Commuication