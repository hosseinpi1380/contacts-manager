import React from 'react';
import { NavLink } from "react-router-dom";
import { AboutIcon, ErtebatIcon, HomeIcon, NazarIcon } from '../../icons/icons'
import { ContextData } from "../../../context/useContext";
import { Button, Box, } from "@mui/material";
import '../style.css'
const ListDrawer = () => {
    const { setOpenDrawer } = ContextData();
    const handleLinkClick = () => {
        setOpenDrawer(false)
    }
    return (
            <Box
                sx={{ width: 250 ,display:'flex',flexDirection:'column'}}
                role="presentation"
            >
                <NavLink to='/' onClick={handleLinkClick}>
                    <Button>
                        خانه
                        <HomeIcon />
                    </Button>
                </NavLink>
                <NavLink to='/about' onClick={handleLinkClick}>
                    <Button>
                        درباه من
                        <AboutIcon />
                    </Button>
                </NavLink>
                <NavLink to='/nazarat' onClick={handleLinkClick}>
                    <Button>
                        نظرات
                        <NazarIcon />
                    </Button>
                </NavLink>
                <NavLink to='/ertebat' onClick={handleLinkClick}>
                    <Button>
                        ارتباط با من
                        <ErtebatIcon />
                    </Button>
                </NavLink>
            </Box>
    )
};
export default ListDrawer;