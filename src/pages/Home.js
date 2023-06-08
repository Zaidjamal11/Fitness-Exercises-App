import React from 'react'
import { useState } from 'react';

import { Box } from '@mui/material';

//components
import Excersises from '../components/Excersises';
import SearchExcercises from '../components/SearchExcercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  return (
    <Box>

    <HeroBanner />
    <SearchExcercises />
    <Excersises />

    </Box>
  )
}

export default Home;