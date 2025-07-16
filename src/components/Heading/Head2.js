import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Head2() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
      sx={{
          backgroundColor: '#2E3B55', // ✅ Custom background color
        }}
      >
        <Toolbar 
        sx={{minHeight:700}}
        >
          <Box
      component="img"
      src="/your-image.jpg" // Replace with actual path or URL
      alt="Sample"
      sx={{ width: 300, height: 'auto', borderRadius: 2 }}
    />
          <box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            National Security Service
          </Typography>
           <Typography variant="text" component="div" sx={{ flexGrow: 1 }}>
            Your Trusted Security Partner
          </Typography>
          </box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
