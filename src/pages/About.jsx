import React, { useState, useEffect } from "react";
import { Box, Chip, Typography, Divider, Grid, Avatar } from "@mui/material";
// import aboutImg from "../../assets/search.png";
import htmlSVG from "../assets/svg/html.svg";
import cssSVG from "../assets/svg/css.svg";
import jsSVG from "../assets/svg/javascript.svg";
import gitSVG from "../assets/svg/git.svg";
import reactSVG from "../assets/svg/react.svg";
import { ArrowLeftRounded } from "@mui/icons-material";
import LinearProgress from "@mui/material/LinearProgress";
import { Helmet, HelmetProvider } from "react-helmet-async";

const About = () => {
  const [js, setJs] = useState(50);
  const [html, setHtml] = useState(0);
  const [css, setCss] = useState(0);
  const [reactJs, setReactJs] = useState(0);
  const [git, setGit] = useState(0);
  const [tailwind, setTailwind] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setJs((prev) => Math.min(Math.random() * 10 + prev, 50));
      setHtml((prev) => Math.min(Math.random() * 10 + prev, 70));
      setCss((prev) => Math.min(Math.random() * 10 + prev, 70));
      setReactJs((prev) => Math.min(Math.random() * 10 + prev, 50));
      setGit((prev) => Math.min(Math.random() * 10 + prev, 60));
      setTailwind((prev) => Math.min(Math.random() * 10 + prev, 70));
    }, 200);
    return () => {
      setInterval(timer);
    };
  }, []);
  const skils = [
    { id: 0, name: "html", value: html, color: "error", icon: htmlSVG },
    { id: 1, name: "css", value: css, color: "info", icon: cssSVG },
    { id: 2, name: "js", value: js, color: "warning", icon: jsSVG },
    {
      id: 3,
      name: "reactJs",
      value: reactJs,
      color: "info",
      icon: reactSVG,
    },
    { id: 4, name: "git", value: git, color: "error", icon: gitSVG },
    {
      id: 5,
      name: "tailwind css",
      value: tailwind,
      color: "info",
      icon: null,
    },
  ];

  return (
    <Box component="div" className="p-2 rounded-md overflow-y-auto">
      <HelmetProvider>
        <Helmet>
          <title>صفحه درباره من</title>
        </Helmet>
      </HelmetProvider>
      <Divider
        textAlign="center"
        sx={{
          "&::before,&::after": {
            borderColor: "primary.white",
            fontSize: "10px",
          },
          
        }}
      >
      <Chip
          sx={{ margin: "0 auto", width: "100%" }}
          label={
            <>
              <Typography component="h2">درباره من</Typography>
            </>
          }
          color="error"
          variant="filled"
        ></Chip>
      </Divider>

      <Grid
        container
        sx={{
          p: "20px 0",
          verticalAlign: "center",
          textAlign: "center",
          margin:'20px 0',
          
        }}
      >
        <Grid item lg={6} md={6} sm={12} xs={12}>

        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Box
            component="div"
            className="bg-[#396ee5] rounded-md text-white text-lg"
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
            borderColor: "theme.palette.primary.main",
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
          color="error"
          variant="filled"
        ></Chip>
      </Divider>

      {skils.map((skill) => (
        <Box component="div" sx={{ my: 2 }} key={skill.id}>
          <Divider
            textAlign="left"
            sx={{
              "&::before,&::after": {
                borderColor: 'theme.palette.primary.main',
                fontSize: "10px",
              },
            }}>
            <Chip
              label={
                <div
                  style={{ display: "flex", justifyContent: "space-evenly", padding: '5px' }}
                >
                  <Typography component="h2">{skill.name}</Typography>
                  <Box
                    component="img"
                    sx={{ ml: 2 }}
                    src={skill.icon}
                    height={20}
                  ></Box>
                </div>
              }
              color={skill.color}
              variant="filled"
            />
          </Divider>
          <Box component='div' sx={{ display: 'flex', flexDirection: 'column' }}>
            
              <LinearProgress
                variant="determinate"
                value={skill.value}
                color={skill.color}
                sx={{ height: 10, borderRadius: 2, mt: 1 }}
              />
            
            <Chip
              label={
                `${Math.round(skill.value)}%`
              }
            />

          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default About;
