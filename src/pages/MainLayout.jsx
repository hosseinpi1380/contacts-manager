import React, { Suspense, lazy, useCallback } from "react";
import { Header, Sidebar } from "./index.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Grid, CssBaseline } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import { ThemeProvider, CacheProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { prefixer } from "stylis";
import ParticleCom from "../components/container/Particles.jsx";
import MyCourses from '../pages/MyCourses.jsx'
import Nazarat from './Nazarat.jsx'
import { ContextData } from "../context/useContext.jsx";
import Vazir from '../../public/fonts/Vazir.woff'
const App = lazy(() => import("./App.jsx"));
const About = lazy(() => import("./About.jsx"));
const Resume = lazy(() => import("./Resume.jsx"));
const Ertebat = lazy(() => import("./Ertebat.jsx"));
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const darkTheme = createTheme({
  direction: "rtl",
  typography:{
    fontFamily:Vazir
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#8be9fd',
      black: '#000',
      white: '#ffffff'
    },
    secondary: {
      main: '#bd93f9'
    },
  },
});
const lightTheme = createTheme({
  direction: "rtl",
  typography:{
    fontFamily:'vazir'
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#8be9fd',
    },
    secondary: {
      main: '#bd93f9'
    },
  },
});
const MainLayout = () => {
  const { theme } = ContextData();
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);
  return (
    <BrowserRouter>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme == 'dark' ? darkTheme : lightTheme}>
          <Suspense fallback="در حال لود سایت...">
            <CssBaseline />
            <Header />
            <ParticleCom />
            <Grid container sx={{ overflowY: 'visible', height: '100%' }}>
              <Sidebar />
              <Grid
                item
                lg={10}
                md={10}
                sm={9}
                xs={12}
                className="p-1 text-white text-lg mb-1 pb-1"
              >
                <Routes>
                  <Route path="/" element={<App />}></Route>
                  <Route path="about" element={<About />}></Route>
                  <Route path="resume" element={<Resume />}></Route>
                  <Route path="ertebat" element={<Ertebat />}></Route>

                  <Route path="nazarat" element={<Nazarat />}></Route>
                  <Route path="my-courses" element={<MyCourses />}></Route>
                </Routes>
              </Grid>
            </Grid>
          </Suspense>
        </ThemeProvider>
      </CacheProvider>
    </BrowserRouter>
  );
};

export default MainLayout;
