import * as React from 'react';
import { Box, BottomNavigation, Stack, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';

export default function Test() {
  return (
    <Box>
      <BottomNavigation
        sx={{
          bgcolor: '#efe8e8f',
          justifyContent: 'flex-start',
          px: 20 ,       // smaller left/right padding
          py: 0,       // smaller top/bottom padding
          minHeight: '0px' // reduce component height
        }}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          <Stack direction="row" spacing={0.5} alignItems="center">
            <MailIcon htmlColor="#afaaa8ff" fontSize="small" />
            <Typography
              sx={{ color: '#afaaa8ff', fontSize: '18px', textDecoration: 'none' }}
              component="a"
              href="mailto:nssgaran@gmail.com"
            >
              nssgaran@gmail.com
            </Typography>
          </Stack>
          <Stack direction="row" spacing={0.5} alignItems="center">
            <MailIcon htmlColor="#afaaa8ff" fontSize="small" />
            <Typography
              sx={{ color: '#afaaa8ff', fontSize: '18px', textDecoration: 'none' }}
              component="a"
              href="mailto:nss_garan@yahoo.com"
            >
              nss_garan@yahoo.com
            </Typography>
          </Stack>
        </Stack>
      </BottomNavigation>
    </Box>
  );
}
