import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';

export default function ResponsiveNavbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = ['Home', 'Who We Are', 'What We Do', 'Licenses', 'Careers', 'Contact Us'];
  const menuItemsPath = ['/', '/about', '/services', '/licenses', '/careers', '/contact'];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#021c48ff' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {!isMobile ? (
            // Desktop View: Show only menu items, no title
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {/* Menu Items on the Left */}
              <Box sx={{ display: 'flex', gap: 3 }}>
                {menuItems.map((item, idx) => (
                  <Link
                    key={item}
                    to={menuItemsPath[idx]}
                    style={{ textDecoration: 'none' }}
                  >
                    <Typography
                      variant="body1"
                      sx={{ cursor: 'pointer', color: 'white' }}
                    >
                      {item}
                    </Typography>
                  </Link>
                ))}
              </Box>
            </Box>
          ) : (
            // Mobile View: Show title and drawer menu icon
            <>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, color: 'white', fontWeight: 'bold' }}
              >
                National Security Service
              </Typography>
              <IconButton
                edge="end"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                <Box
                  sx={{ width: 250 }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {menuItems.map((text, idx) => (
                      <ListItem button key={text} component={Link} to={menuItemsPath[idx]}>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
