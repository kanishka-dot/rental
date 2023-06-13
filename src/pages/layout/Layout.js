import React from 'react';
import AppHeader from './AppHeader.js'
import NavBar from './NavBar.js'
import { createTheme, ThemeProvider } from '@mui/material/styles';


const mdTheme = createTheme();
export default function Layout() {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };
    return (<>
     <ThemeProvider theme={mdTheme}>
        <AppHeader value={open} onToggle={() => toggleDrawer()} />
        <NavBar value={open} onToggle={() => toggleDrawer()} />
        </ThemeProvider>
    </>)
}

