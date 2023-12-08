import React from "react";
import { Grid, Box, Divider, Chip, Typography } from '@mui/material'
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Work, SchoolOutlined, Code, CastForEducation } from "@mui/icons-material";
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import SchoolIcon from '@mui/icons-material/School';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
const Resume = () => {
  const devEdu = [
    { year: '1398-1399', degree: 'دیپلم', major: 'ریاضی و فیزیک', school: 'شهید مردانی 15' },
    { year: '1399-1403', degree: 'کارشناسی', major: 'مهندسی کامپیوتر', school: 'دانشگاه ازاد اسلامی' },
    // { year: '1404-1405', degree: 'ارشد', major: 'مهندسی نرم افزار گرایش نرم افزار', school: 'دانشگاه ازاد اسلامی' },
    // { year: '1406-1409', degree: 'دکتری', major: 'مهندسی نر افزار گرایش هوش مصنوعی', school: 'دانشگاه ازاد اسلامی ' },
  ];
  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>رزومه</title>
        </Helmet>
      </HelmetProvider>
      <Box component='div'>
        <Divider
          textAlign="center"
          sx={{
            "&::before,&::after": {
              borderColor: "primary.main",
              fontSize: "10px",
            },
          }}
        >
          <Chip
            sx={{ display: 'flex', width: '100%', mb: '10px' }}
            label={
              <Typography component="h2">رزومه من</Typography>
            }
            icon={<Code />}
            color="secondary"
            variant="filled"
          >
          </Chip>
        </Divider>

        <Grid container>
          <Grid item
            xs={12} sm={12} md={6} lg={6} sx={{ mb: '20px'}}>
            <Divider textAlign="center">
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
              {devEdu.map(el =>
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
                    <Typography component='caption' color='gray'>
                      {el.year}
                    </Typography>
                    <Typography color='black' variant="button">
                      {el.degree}
                    </Typography>
                    <Typography color='black'>
                      رشته {el.major}
                    </Typography>
                    <Typography color='black'>
                       {el.school}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              )}
            </Timeline>
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Divider textAlign="center">
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
              {devEdu.map(el =>
                <TimelineItem position="right">
                  <TimelineSeparator>
                    <TimelineDot color="warning">
                      <HomeRepairServiceIcon />
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent sx={{
                    display: 'flex', flexDirection: 'column'
                    , alignItems: 'start'
                  }}>
                    <Typography component='caption' color='gray'>
                      {el.year}
                    </Typography>
                    <Typography color='black' variant="button">
                      {el.degree}
                    </Typography>
                    <Typography color='black'>
                      رشته {el.major}
                    </Typography>
                    <Typography color='black'>
                       {el.school}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              )}
            </Timeline>
          </Grid>
        </Grid>
      </Box >
    </>
  );
};

export default Resume;
