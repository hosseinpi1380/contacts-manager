import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Home from '@mui/icons-material/Home';
import Contacts from '@mui/icons-material/Contacts'
import InfoIcon from '@mui/icons-material/Info';
import MessageIcon from '@mui/icons-material/Message';
import {
  MemoryRouter,
  Link,
} from 'react-router-dom';


function MyTabs() {
  const [value, setValue] = React.useState('خانه');
  const currentTab = value ? value : 'Home'
  const changeHandler = e => {
    setValue(e.target.textContent)
  }
  return (
    <Tabs value={currentTab} onChange={changeHandler}
      variant='scrollable'
      orientation='vertical'
      sx={{ flexGrow: '1', display: "flex" }}>
      <Tab label="خانه" value="خانه" to="/" component={Link} icon={<Home />} iconPosition='start' sx={{ color: 'white', ml: '10px' }} />
      <Tab label="درباره من" value="درباره من" to="about" component={Link} icon={<InfoIcon />} iconPosition='start' sx={{ color: 'white', ml: '10px' }} />
      <Tab label="نطرات " value="نظرات" to="about" component={Link} icon={<MessageIcon />} iconPosition='start' sx={{ color: 'white', ml: '10px' }} />
      <Tab label="ارتباط با من" value="ارتباط با من" to="contacts" component={Link} icon={<Contacts />} iconPosition='start' sx={{ color: 'white', ml: '10px' }} />
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
