import React from 'react'
import './Header.css';
import Head1 from './Heading/Head1';
import Head2 from './Heading/Head2';
import Head3 from './Heading/Head3';
import Box from '@mui/material/Box'
const Header = () => {
  return (
    <>
      <Box>
        <Head1 />
        <Head2 />
        <Head3 />
      </Box>

    </>
  )
}

export default Header
