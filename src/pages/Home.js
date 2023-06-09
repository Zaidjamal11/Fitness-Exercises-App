import React from 'react'
import { useState } from 'react';

import { Box } from '@mui/material';

//components
import Excersises from '../components/Excersises';
import SearchExcercises from '../components/SearchExcercises';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all')
  return (
    <Box>

    <HeroBanner />
    <SearchExcercises setExercises={setExercises} 
    bodyPart={bodyPart}
    setBodyPart={setBodyPart}
     />
    <Excersises 
    setExercises={setExercises} 
    bodyPart={bodyPart}
    setBodyPart={setBodyPart}/>

    </Box>
  )
}

export default Home;