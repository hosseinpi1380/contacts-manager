import { Link } from "react-router-dom";
import { HomeIcon } from '../../icons/icons'
import { List, ListItem, ListItemButton, ListItemText, ListItemIcon, Box } from "@mui/material";
import { ContextData } from "../../../context/useContext";
const ListDrawer = () => {
    const { toggleDrawer, setOpenDrawer } = ContextData();
    return (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={() => toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List onClick={() => setOpenDrawer(false)} className="bg-gray-900 text-white">
                <Link to='/' >
                    <ListItem disablePadding >
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon />
                            </ListItemIcon>
                            <ListItemText primary='خانه' />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to='/about' >
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText primary='خانه' />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to='/nazarat' >
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText primary='خانه' />
                        </ListItemButton>
                    </ListItem>
                </Link>
                <Link to='/ertebat' >
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>

                            </ListItemIcon>
                            <ListItemText primary='خانه' />
                        </ListItemButton>
                    </ListItem>
                </Link>

            </List>
        </Box>

    )
};
export default ListDrawer;