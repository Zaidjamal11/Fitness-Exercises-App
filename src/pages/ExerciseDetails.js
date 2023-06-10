import React from 'react'
import {Box } from '@mui/material';
import { useParams } from 'react-router-dom';

import { useState, useEffect } from 'react';

import { exerciseOptions, fetchData } from '../utils/fetchData';

//components
import SimilarExercises from '../components/SimilarExercises';
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';




const ExerciseDetails = () => {
  const [exerciseDetail, setExerciseDetail ]= useState({});
  const { id } = useParams();

useEffect(() => {
  const fetchExercisesData = async () => {
    const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
    const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

    const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
    setExerciseDetail(exerciseDetailData);
  };
  fetchExercisesData();

},[id]);



  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideos />
      <SimilarExercises />

    </Box>
  )
}

export default ExerciseDetails;