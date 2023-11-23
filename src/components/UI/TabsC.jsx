import * as React from "react";
import { Tabs, Tab } from "@mui/material";
import Home from "@mui/icons-material/Home";
import Contacts from "@mui/icons-material/Contacts";
import InfoIcon from "@mui/icons-material/Info";
import MessageIcon from "@mui/icons-material/Message";
import { Link } from "react-router-dom";
import Typography  from "@mui/material/Typography";

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
      <Tab
        {...tabProps(0)}
        label={
          <div className='flex flex-row'>
            <Typography>خانه</Typography>
            <Home sx={{mx:'5px'}}/>
          </div>
        }
        to="/"
        component={Link}
        iconPosition="start"
        sx={{ color: "white" }}
      />
      <Tab
        {...tabProps(1)}
        label={
          <div className='flex flex-row'>
            <Typography>درباره من</Typography>
            <InfoIcon sx={{mx:'5px'}}/>
          </div>
        }
        to="about"
        component={Link}
        iconPosition="start"
        sx={{ color: "white"}}
      />
      <Tab
        {...tabProps(2)}
        label={
          <div className='flex flex-row'>
            <Typography>نظرات</Typography>
            <MessageIcon sx={{mx:'5px'}}/>
          </div>
        }
        to="about"
        component={Link}
        iconPosition="start"
        sx={{ color: "white" }}
      />
      <Tab
        {...tabProps(3)}
        label={
          <div className='flex flex-row'>
            <Typography>ارتباط با من</Typography>
            <Contacts sx={{mx:'5px'}}/>
          </div>
        }
        to="contacts"
        component={Link}
        iconPosition="start"
        sx={{ color: "white"}}
      />
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
