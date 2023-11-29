// import { Link } from "react-router-dom";
import React from 'react';
import { HomeIcon } from '../../icons/icons'
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Box, createTheme } from "@mui/material";
import { ContextData } from "../../../context/useContext";
import { App, About, Nazarat, Ertebat } from '../../pages/index'
import { AppBar, Tabs, Tab } from "@mui/material";
import '../style.css'
import { Link } from "react-router-dom";
const ListDrawer = () => {
    const { toggleDrawer, setOpenDrawer } = ContextData();
    const [value, setValue] = React.useState(0);

    const handleChange = (_e, newValue) => {
        setValue(newValue);
    };
    return (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            
            <Tabs
                orientation='vertical'
                value={value}
                onChange={handleChange}
                aria-label="Navigation"
                indicatorColor="primary"
                textColor="primary"
            >
                <Tab label="خانه" index={0} component={Link}  />
                <Tab label="درباره من" index={1} component={Link}  />
                <Tab label="نظرات" index={1} component={Link}  />
                <Tab label="ارتباط با من" index={1} component={Link}  />
            </Tabs>
        </Box>

    )
};
export default ListDrawer;