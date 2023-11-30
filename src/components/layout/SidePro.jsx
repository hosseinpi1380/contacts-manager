import { createPortal } from 'react-dom';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
import { ContextData } from '../../context/useContext';
const SidePro = () => {
    const { toggled, setToggled } = ContextData();
    return createPortal(
        
        <div style={{ display: 'flex',mt:'20px', zIndex: 100, position: 'fixed', height: '100%', minHeight: '400px', direction: 'rtl' }} dir='rtl'>
            <Sidebar rtl onBackdropClick={() => setToggled(false)} toggled={toggled} breakPoint="always" d>
                <Menu>
                    <MenuItem component={<Link to="/" />}> home</MenuItem>
                    <MenuItem component={<Link to="/about" />}> about</MenuItem>
                    <MenuItem component={<Link to="/nazarat" />}> nazar</MenuItem>
                </Menu>
            </Sidebar>
            <main style={{ display: 'flex', padding: 10 }}>

            </main>
        </div>
        , document.getElementById('side-bar'));
}
export default SidePro;