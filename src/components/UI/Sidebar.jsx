import React, { useEffect } from 'react'
import Hidden from '@mui/material/Hidden';
import { Avatar, Grid, Box, Divider } from '@mui/material';
import TabsC from '../UI/TabsC'
import { blueGrey, grey } from '@mui/material/colors';

const Sidebar = () => {

    return (
        <>
            <Hidden smDown>
                <Grid item lg={2} md={2} sm={4} xs={0} sx={{ height: '100vh', width: '100%', backgroundColor: grey[900],color:'white' }} >
                    <Avatar
                        alt="Remy Sharp"
                        src="/public/bg-1.jpg"
                        sx={{ width: 140, height: 140, mx: 'auto', mt: '40px' }} variant='rounded'
                    />
                    <Divider variant='middle' sx={{ color: 'black', mt: '10px' }} color={grey[500]} />
                    <TabsC />
                    <Box>

                    </Box>
                </Grid>
            </Hidden>

        </>
    )
}

export default Sidebar