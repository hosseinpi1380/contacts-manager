import * as React from "react";
import { Tabs, Tab, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// import { Home, Contacts, MessageIcon } from "@mui/icons-material";
// import Home from "@mui/icons-material/Home";
// import Contacts from "@mui/icons-material/Contacts";
// import InfoIcon from "@mui/icons-material/Info";
// import MessageIcon from "@mui/icons-material/Message";
import { HomeIcon, AboutIcon, ErtebatIcon, NazarIcon } from "../icons/icons";
import { blue, grey, purple } from "@mui/material/colors";

function MyTabs() {
  const [value, setValue] = React.useState(0);
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const tabs = [
    {
      label: "home",
      icon: <HomeIcon />,
      to: "/",
      ...tabProps(0),
    },
    {
      label: "درباه من",
      icon: <AboutIcon />,
      to: "/about",
      ...tabProps(1),
    },
    {
      label: "نظرات",
      icon: <NazarIcon />,
      to: "/nazarat",
      ...tabProps(2),
    },
    {
      label: "ارتباط با من",
      icon: <ErtebatIcon />,
      to: "/ertebat",
      ...tabProps(3),
    },
  ];
  return (
    <Tabs
      onChange={handleChange}
      value={value}
      variant="scrollable"
      scrollButtons={true}
      selectionFollowsFocus
      orientation="vertical"
      sx={{ flexGrow: "1", display: "flex" }}
    >
      {tabs.map((tab, index) => (
        <Tab
          key={index + 10}
          label={
            <div className="flex flex-row">
              <Typography>{tab.label}</Typography>
            </div>
          }
          component={Link}
          sx={{
            "&.MuiTab-root": {
              backgroundColor: grey[800],
              borderRadius: 1,
              m: 0.5,
              color: "white",
            },
          }}
          to={tab.to}
          {...tab}
        />
      ))}
      {/* <Tab
        {...tabProps(0)}
        sx={{
          "&.MuiTab-root": {
            backgroundColor: grey[800],
            borderRadius: 1,
            m: 0.5,
            color: "white",
          },
        }}
        label={
          <div className="flex flex-row">
            <Home sx={{ mx: "5px" }} />
            <Typography>خانه</Typography>
          </div>
        }
        to="/"
        component={Link}
      />

      <Tab
        {...tabProps(1)}
        label={
          <div className="flex flex-row">
            <InfoIcon sx={{ mx: "5px" }} />
            <Typography>درباره من</Typography>
          </div>
        }
        to="about"
        component={Link}
        sx={{
          "&.MuiTab-root": {
            backgroundColor: grey[800],
            borderRadius: 1,
            m: 0.5,
            color: "white",
          },
        }}
      />
      <Tab
        {...tabProps(2)}
        label={
          <div className="flex flex-row">
            <MessageIcon sx={{ mx: "5px" }} />
            <Typography>نظرات</Typography>
          </div>
        }
        to="nazarat"
        component={Link}
        sx={{
          "&.MuiTab-root": {
            backgroundColor: grey[800],
            borderRadius: 1,
            m: 0.5,
            color: "white",
          },
        }}
      />
      <Tab
        {...tabProps(3)}
        label={
          <div className="flex flex-row">
            <Contacts sx={{ mx: "5px" }} />
            <Typography>ارتباط با من</Typography>
          </div>
        }
        to="ertebat"
        component={Link}
        sx={{
          "&.MuiTab-root": {
            backgroundColor: grey[800],
            borderRadius: 1,
            m: 0.5,
            color: "white",
          },
        }}
      /> */}
    </Tabs>
  );
}
export default function TabC() {
  return (
    <>
      <MyTabs />
    </>
  );
}
