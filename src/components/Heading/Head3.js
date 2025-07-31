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
      <AppBar position="sticky" sx={{ backgroundColor: '#021c48' }}>
        <Toolbar sx={{ justifyContent: 'center', minHeight: '70px' }}>
          {!isMobile ? (
            <Box
              sx={{
                display: 'flex',
                gap: 4,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {menuItems.map((item, idx) => (
                <Link
                  key={item}
                  to={menuItemsPath[idx]}
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: 'white',
                      fontWeight: 500,
                      position: 'relative',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        width: '0%',
                        height: '2px',
                        bottom: 0,
                        left: 0,
                        backgroundColor: 'white',
                        transition: 'width 0.3s ease-in-out',
                      },
                      '&:hover::after': {
                        width: '100%',
                      },
                      '&:hover': {
                        color: '#ccc',
                      },
                      transition: 'color 0.3s ease',
                      cursor: 'pointer',
                    }}
                  >
                    {item}
                  </Typography>
                </Link>
              ))}
            </Box>
          ) : (
            <>
              <Box sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    fontWeight: 'bold',
                  }}
                >
                  NSS
                </Typography>
              </Box>
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
                  sx={{
                    width: 250,
                    backgroundColor: '#021c48',
                    height: '100%',
                    color: 'white',
                    paddingTop: 2,
                  }}
                  role="presentation"
                  onClick={toggleDrawer(false)}
                  onKeyDown={toggleDrawer(false)}
                >
                  <List>
                    {menuItems.map((text, idx) => (
                      <ListItem
                        button
                        key={text}
                        component={Link}
                        to={menuItemsPath[idx]}
                        sx={{
                          color: 'white',
                          '&:hover': {
                            backgroundColor: '#032b6a',
                          },
                        }}
                      >
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
