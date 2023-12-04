import React from "react";
import { Box, Chip, Typography, Divider, Grid, Avatar } from "@mui/material";
import aboutImg from "../../assets/search.png";
import htmlSVG from '../../assets/html.svg';
import cssSVG from '../../assets/css.svg';
import jsSVG from '../../assets/javascript.svg';
import gitSVG from '../../assets/git.svg';
import reactSVG from '../../assets/react.svg';
import {
  ArrowLeftRounded,
  CodeOffRounded,
  CodeRounded,
} from "@mui/icons-material";
import LinearProgress from "@mui/material/LinearProgress";
const About = () => {
  const skils=[
    {id:0,name:'html',value:70,color:'error',icon:htmlSVG},
    {id:1,name:'css',value:70,color:'primary',icon:cssSVG},
    {id:2,name:'js',value:50,color:'warning',icon:jsSVG},
    {id:3,name:'reactJs',value:50,color:'primary',icon:reactSVG},
    {id:4,name:'git',value:50,color:'error',icon:gitSVG},

  ]
  return (
    <Box component="div" className="bg-blue-900 p-2 rounded-md">
      <Divider
        textAlign="center"
        sx={{
          "&::before,&::after": {
            borderColor: "primary.main",
            fontSize: "10px",
          },
        }}
      >
        درباره من
      </Divider>

      <Grid
        container
        sx={{
          p: "20px 0",
          verticalAlign: "center",
          textAlign: "center",
          display: {
            xs: { m: "0 auto", textAlign: "center" },
            sm: { m: "0 auto" },
          },
        }}
      >
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Avatar
            variant="rounded"
            src={aboutImg}
            sx={{
              width: "250px",
              height: "250px",
              textAlign: "center",
              // m: "auto 0",
            }}
          >
            hp
          </Avatar>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Box
            component="div"
            className="bg-[#396ee5] rounded-md text-white font-mono text-lg"
            sx={{
              display: "flex",
              flexDirection: "column",
              "& > *": {
                m: "5px 10px",
              },
              verticalAlign: "center",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <ArrowLeftRounded />
              <Typography>نام و نام خانوادگی:حسین پیراسبقی</Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <ArrowLeftRounded />

              <Typography>شماره تلفن همراه:09366116468 </Typography>
            </Box>
            <Box sx={{ display: "flex" }}>
              <ArrowLeftRounded />
              <Typography>ادرس جمیل:hosseinpirasbaghi@gmail.com</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
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
          sx={{ margin: "0 auto", width: "100%" }}
          label={
            <>
              <Typography component="h2">مهارت های من</Typography>
            </>
          }
          color="primary"
          variant="filled"
        ></Chip>
      </Divider>

      {skils.map(skill=>
        <Box component='div' sx={{my:2}} id={skill.id}>
        <Chip sx={{p:1}}
            label={
              <div style={{display:'flex',justifyContent:'space-between'}}>
                <Typography component="h2">{skill.name}</Typography>
                <Box component='img' sx={{ml:2}} src={skill.icon} height={20}></Box>
              </div>
            }
            color={skill.color}
            variant="filled"
          ></Chip>
          <LinearProgress
            variant="determinate"
            value={skill.value}
            color={skill.color}
            sx={{ height: 10, borderRadius: 2, mt: 1 }}
          />
        </Box>
      )}
    </Box>
  );
};

export default About;
