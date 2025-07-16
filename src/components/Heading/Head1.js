import * as React from 'react';
import Stack from '@mui/material/Stack';
import {Link} from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import { BottomNavigation,Box, Typography } from '@mui/material';
export default function Test() {
  return (
    <Box >
    <BottomNavigation sx={{ bgcolor: '#efe8e8ff'}}>
    <Stack direction="row" spacing={2} sx={{mt:2}}>
    <MailIcon htmlColor='#afaaa8ff'/>
      <Typography
            sx={{ color: '#afaaa8ff', fontSize: '16px', textDecoration: 'none' }}
            component="a"
            href="mailto:nssgaran@gmail.com"
          >
            nssgaran@gmail.com
    </Typography>
      <MailIcon htmlColor='#afaaa8ff'/>
       <Typography
            sx={{ color: '#afaaa8ff', fontSize: '16px', textDecoration: 'none' }}
            component="a"
            href="mailto:nss_garan@yahoo.com"
          >
            nss_garan@yahoo.com
    </Typography>
    </Stack>
    </BottomNavigation>
    </Box>
  );
}
