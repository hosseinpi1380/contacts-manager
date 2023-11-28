import * as React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import {
  Link as RouterLink,
  Route,
  Routes,
  MemoryRouter,
  useLocation,
  Link
} from 'react-router-dom';

import { ContextData } from '../../../context/useContext';

function ListItemLink(props) {
  const { icon, primary, to } = props;
  return (
    <li>
        <ListItem component={Link} to={to}>
          {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
          <ListItemText primary={primary} />
        </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};


export default function DrawerTabs() {
  const { setOpenDrawer} = ContextData();
 
  return (
    <Box >
      <Paper elevation={0}>
        <List aria-label="secondary mailbox folders" onClick={() => setOpenDrawer(false)}>
          <ListItemLink to="/" primary="خانه" />
          <ListItemLink to="/about" primary="درباره من" />
          <ListItemLink to="/nazarat" primary="نظرات" />
          <ListItemLink to="/ertebat" primary="ارتباط با من" />
        </List>
      </Paper>
    </Box>
  );
}