import React from 'react'
import { Box, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Slide from '@mui/material/Slide';
import Math from '../assets/png/think.png'
import physics from '../assets/png/relativity.png';
import biology from '../assets/png/enzyme.png'
import computer from '../assets/png/computer.png';
import chemistry from '../assets/png/dna.png';
import { HelmetProvider, Helmet } from 'react-helmet-async';
let courses = [
    {
        id: 1,
        name: "Computer Science",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: computer,
        from: '#F2295B',
        to: '#FFB535'
    },
    {
        id: 2,
        name: "Physics",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: physics,
        from: '#27E55C',
        to: '#30C4E5'
    },
    {
        id: 3,
        name: "Mathematics",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: Math,
        from: '#2B9FFF',
        to: '#9C33F7'
    },
    {
        id: 4,
        name: "Biology",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: biology, from: '#870075', to: '#FF3571'
    },
    {
        id: 5,
        name: "Chemistry",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        img: chemistry,
        from: '#fffff',
        to: '#000'
    }
];
const MyCourses = () => {
    const [loading, setLoading] = React.useState(false);
    // const [gradient, setGradient] = React.useState('bg-gradient-to-br')
    React.useEffect(() => {
        setLoading(true)
        return () => {
            setLoading(false)
        }
    }, [])
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>دوره های من</title>
                </Helmet>
            </HelmetProvider>
            <Grid container spacing={2} sx={{ overflowX: 'hidden', height: '100%', mt: '10px' }}>
                {courses.map((course, index) =>
                    <Grid item key={index} sm={6} xs={12} md={4} lg={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '200px' }}>
                        <Slide direction='up' in={loading} style={{ transitionDelay: loading ? `${index + 3}99ms` : '0ms' }}>
                            <Card sx={{ width: '300px', direction: 'rtl', backgroundColor: 'steelblue' }}
                                key={course.id}>
                                <CardActionArea>
                                    <CardMedia
                                        component="div"
                                    sx={{ objectFit: 'scale-down', height: '200px',background:`linear-gradient:(to right , ${course.from} , ${course.to})` }}
                                    // className={`bg-gradient-to-r from-cyan-500 to-blue-500`}
                                    
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {course.name}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary"
                                            className='text-ellipsis overflow-hidden ... h-[100px]' >
                                            {course.description}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="success" sx={{ fontSize: '20px', color: 'white' }}>
                                        جزئیات بیشتر
                                    </Button>
                                </CardActions>
                            </Card>
                        </Slide>
                    </Grid>
                )}
            </Grid >
        </>
    )
}

export default MyCourses