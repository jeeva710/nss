import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import PhoneIcon from '@mui/icons-material/Phone';
import nsslogo from '../../image/logo.png';


export default function Head2() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#f1f2f5' }}>
        <Toolbar
          sx={{
            py: 1, // Top and Bottom padding = 0.5rem
            px: 3,
            minHeight: 'auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            
          }}
        >
          {/* Left Section - Logo + Title */}
          <Box display="flex" alignItems="flex-start">
            <Box
              component="img"
              src={nsslogo} // Replace with actual image
              alt="Sample"
              sx={{ width: 120, height: 'auto', borderRadius: 2, mr: 2, }}
            />
            <Box>
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  color: '#0f194a',
                  fontSize: '3rem',
                  fontWeight: 550,
                  lineHeight: 1.3,
                }}
              >
                National Security Service
              </Typography>
              <Typography
                variant="h6"
                component="h6"
                sx={{
                  color: '#6c757d',
                  fontSize: '1rem',
                  mt: 0, // No top margin
                }}
              >
                Your Trusted Security Partner
              </Typography>
            </Box>
          </Box>

          {/* Right Section - Phone Numbers */}
          <Box textAlign="right">
            <Stack spacing={0.5} alignItems="flex-end">
              {['+91 94433 41897', '+91 87787 69855'].map((number, index) => (
                <Stack direction="row" spacing={1} alignItems="center" key={index}>
                  <PhoneIcon sx={{ color: '#021c48', fontSize: 20 }} />
                  <Typography sx={{ fontSize: '17px', color: '#021c48',  }}>
                    {number}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
