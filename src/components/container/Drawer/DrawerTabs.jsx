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
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { ContextData } from '../../../context/useContext';

function Router(props) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/drafts">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={['/drafts']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

Router.propTypes = {
  children: PropTypes.node,
};

const Link = React.forwardRef(function Link(itemProps, ref) {
  return <RouterLink ref={ref} {...itemProps} role={undefined} />;
});

function ListItemLink(props) {
  const { icon, primary, to } = props;
  const { setOpenDrawer } = ContextData();


  return (
    <li>
      <ListItem button component={Link} to={to} onClick={()=>setOpenDrawer(false)}>
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


export default function ListRouter() {
  const { setOpenDrawer,toggleDrawer } = ContextData();
  
  return (
    <Box >

      <Paper elevation={0}>

        <List aria-label="secondary mailbox folders" onClick={()=>setOpenDrawer(false)}>
          <ListItemLink to="/" primary="خانه" />
          <ListItemLink to="/about" primary="درباره من" />
          <ListItemLink to="/nazarat" primary="نظرات" />
          <ListItemLink to="/ertebat" primary="ارتباط با من" />
        </List>
      </Paper>
    </Box>

  );
}