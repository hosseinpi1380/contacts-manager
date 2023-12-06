import React, { Suspense, lazy } from "react";
import { Header, Sidebar } from "./index.jsx";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Grid, CssBaseline } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import ParticleCom from "../container/Particles.jsx";
import { useCallback } from "react";

const App = lazy(() => import("./App.jsx"));
const About = lazy(() => import("./About.jsx"));
const Nazarat = lazy(() => import("./Nazarat.jsx"));
const Ertebat = lazy(() => import("./Ertebat.jsx"));
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});
const theme = createTheme({
  direction: "rtl",
});
const MainLayout = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    console.log(container);
  }, []);
  return (
    <BrowserRouter>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <Suspense fallback="در حال لود سایت...">
            <CssBaseline />
            <Header/>
            <ParticleCom />
            <Grid container sx={{overflowY:'visible'}}>
              <Sidebar />
              <Grid
                item
                lg={10}
                md={10}
                sm={9}
                xs={12}
                // bg-gradient-to-br from-blue-500 to-green-700
                className=" p-1 text-white text-lg mb-1 pb-1  h-screen"
              >
                <Routes>
                  <Route path="/" element={<App />}></Route>
                  <Route path="about" element={<About />}></Route>
                  <Route path="nazarat" element={<Nazarat />}></Route>
                  <Route path="ertebat" element={<Ertebat />}></Route>
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
