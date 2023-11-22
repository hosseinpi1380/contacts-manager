import React from 'react'
import Hidden from '@mui/material/Hidden';
import { Avatar, Grid } from '@mui/material';
import TabsC from '../UI/TabsC'
import  Divider  from '@mui/material/Divider';
const Sidebar = () => {
    return (
        <>
            <Hidden smDown>
                <Grid item lg={2} md={2} sm={3} xs={0}
                sx={{ height: '100vh', width: '100%',color:'white' }}
                className="bg-gray-900">
                    <Avatar
                        alt="Remy Sharp"
                        src="/bg-1.jpg"
                        sx={{ width: 140, height: 140, mx: 'auto', mt: '40px' }} variant='rounded'
                    />
                    <Divider variant='middle' color='white' sx={{ color: 'black', mt: '10px' }}/>
                    <TabsC />
                    <Divider variant='middle' sx={{color:'white'}}/>
                </Grid>
            </Hidden>
        </>
    )
}

export default Sidebar