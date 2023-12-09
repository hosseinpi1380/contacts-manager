import React, { useEffect, useState } from "react";
import { Grid, Box, Divider, Chip, Typography } from '@mui/material'
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Code } from "@mui/icons-material";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import SchoolIcon from '@mui/icons-material/School';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Slide from '@mui/material/Slide';
const Resume = () => {
  const devEdu = [
    { year: '1398-1399', degree: 'دیپلم', major: 'ریاضی و فیزیک', school: 'شهید مردانی 15' },
    { year: '1399-1403', degree: 'کارشناسی', major: 'مهندسی کامپیوتر', school: 'دانشگاه ازاد اسلامی' },
  ];
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    return () => {
      setLoading(false)
    }
  }, [])
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>رزومه</title>
        </Helmet>
      </HelmetProvider>
      <Box component='div'>
        <Slide in={loading} direction="up"
          style={{ transitionDelay: loading ? '200ms' : '0ms' }}>
          <Divider
            textAlign="left"
            sx={{
              "&::before,&::after": {
                borderColor: "secondary.main",
                fontSize: "10px",
              },
            }}
          >
            <Chip
              sx={{ display: 'flex', width: '100%', mb: '10px', my: '10px' }}
              label={
                <Typography component="h2">رزومه من</Typography>
              }
              icon={<Code />}
              color="secondary"
              variant="filled"
            >
            </Chip>
          </Divider>
        </Slide>

        <Grid container>
          <Grid item
            xs={12} sm={12} md={6} lg={6} sx={{ mb: '20px' }}>
            <Divider textAlign="right"
              sx={{
                "&::before,&::after": {
                  borderColor: "error.main",
                  fontSize: "10px",
                }
              }}>
              <Chip
                sx={{ display: 'flex', width: '100%', }}
                label={
                  <Typography component="h2">تحصیلات من</Typography>
                }
                icon={<SchoolIcon />}
                color="error"
                variant="filled"
              >
              </Chip>
            </Divider>

            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >


              {devEdu.map((el, index) =>
                <Slide in={loading} direction="up"
                  style={{ transitionDelay: loading ? `${index + 3}99ms ` : 0 }} key={index}>
                  <TimelineItem position="right">
                    <TimelineSeparator>
                      <TimelineDot color="primary">
                        <SchoolIcon />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{
                      display: 'flex', flexDirection: 'column'
                      , alignItems: 'start'
                    }}>
                      <Typography variant="body1" color='gray'>
                        {el.year}
                      </Typography>
                      <Typography variant="h5" color='black' >
                        {el.degree}
                      </Typography>
                      <Typography variant="subtitle1" color='black'>
                        رشته {el.major}
                      </Typography>
                      <Typography color='black'>
                        {el.school}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Slide>
              )}
            </Timeline>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>

            <Divider textAlign="right"
              sx={{
                "&::before,&::after": {
                  borderColor: "warning.main",
                  fontSize: "10px",
                }
              }}>
              <Chip
                sx={{ display: 'flex', width: '100%', }}
                label={
                  <Typography component="h2">تجربیات</Typography>
                }
                icon={<HomeRepairServiceIcon />}
                color="warning"
                variant="filled"
              >
              </Chip>
            </Divider>
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              {devEdu.map((el, index) =>
                <Slide in={loading} direction="up" style={{ transitionDelay: loading ? `${index + 3}99ms` : '0ms' }}>

                  <TimelineItem position="right">
                    <TimelineSeparator>
                      <TimelineDot color="warning">
                        <SchoolIcon />
                      </TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{
                      display: 'flex', flexDirection: 'column'
                      , alignItems: 'start'
                    }}>
                      <Typography variant="body1" color='gray'>
                        {el.year}
                      </Typography>
                      <Typography variant="h5" color='black' >
                        {el.degree}
                      </Typography>
                      <Typography variant="subtitle1" color='black'>
                        رشته {el.major}
                      </Typography>
                      <Typography color='black'>
                        {el.school}
                      </Typography>
                    </TimelineContent>
                  </TimelineItem>
                </Slide>

              )}
            </Timeline>
          </Grid>
        </Grid>
      </Box >
    </>
  );
};

export default Resume;
