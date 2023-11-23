import React from 'react'
import Hidden from '@mui/material/Hidden';
import { Avatar, Box, Grid } from '@mui/material';
import TabsC from '../UI/TabsC'
import Divider from '@mui/material/Divider';
const Sidebar = () => {
    return (
        <>
            <Hidden smDown>
                <Grid item lg={2} md={2} sm={3} xs={0}
                    sx={{ height: '100vh', width: '100%', color: 'white' }}
                    className="bg-gray-900">
                    <Box>
                        <Avatar
                            alt="Remy Sharp"
                            src="/bg-1.jpg"
                            sx={{ width: 140, height: 140, mx: 'auto', mt: '40px' }} variant='rounded'
                        />
                        <Divider variant='middle' light />
                        <TabsC />
                        <Divider variant='middle' light />
                    </Box>
                </Grid>
            </Hidden>
        </>
    )
}

export default Sidebar