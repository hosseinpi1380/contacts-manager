import * as React from "react";
import { Tabs, Tab, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { HomeIcon, AboutIcon, ErtebatIcon, NazarIcon } from "../../icons/icons";
import { grey} from "@mui/material/colors";

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
      label: "خانه",
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
      allowScrollButtonsMobile
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
              backgroundColor: '#0e7490',
              borderRadius: 1,
              m: 0.5,
              color: "white",
            },
          }}
          to={tab.to}
          {...tab}
        />
      ))}

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
