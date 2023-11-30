import React from 'react';
import { NavLink } from "react-router-dom";
import { AboutIcon, ErtebatIcon, HomeIcon, NazarIcon } from '../../icons/icons'
import { ContextData } from "../../../context/useContext";
import { Button, Box, } from "@mui/material";
import { ClickAwayListener } from "@mui/base"
import '../style.css'

const ListDrawer = () => {
    const { setOpenDrawer } = ContextData();


    const closeHandler = () => {
        setOpenDrawer(false)
    }

    return (
        <ClickAwayListener onClickAway={() => setOpenDrawer(false)}>
            <Box
                sx={{ width: 250 }}
                role="presentation"
                
            >

                <NavLink to='/' onClick={closeHandler}>
                    <Button>
                        خانه
                        <HomeIcon />
                    </Button>
                </NavLink>
                <NavLink to='/about' onClick={closeHandler}>
                    <Button>
                        درباه من
                        <AboutIcon />
                    </Button>
                </NavLink>
                <NavLink to='/nazarat' onClick={closeHandler}>
                    <Button>
                        نظرات
                        <NazarIcon />
                    </Button>
                </NavLink>
                <NavLink to='/ertebat' onClick={closeHandler}>
                    <Button>
                        ارتباط با من
                        <ErtebatIcon />
                    </Button>
                </NavLink>
            </Box>
        </ClickAwayListener>


    )
};
export default ListDrawer;