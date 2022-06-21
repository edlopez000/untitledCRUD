import { Paper, Skeleton, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Poem from '../models/poems';
import PoemActions from './PoemActions';
import PoemService from '../services/poem';

export default function PoemDisplay() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPoem, setCurrentPoem] = useState<Poem[]>([]);
  const [poemIndex, setPoemIndex] = useState(0);

  useEffect(() => {
    loadPoem();
  }, []);

  const loadPoem = async () => {
    const res = await PoemService.getRandomPoem();
    const newPoems = [...currentPoem, ...res];
    setCurrentPoem(newPoems);
    setPoemIndex(newPoems.length - 1);
    console.log(newPoems);
  };

  const prevPoem = () => {
    setPoemIndex(poemIndex - 1);
  };

  const nextPoem = () => {
    setPoemIndex(poemIndex + 1);
  };

  return (
    <Paper sx={{ padding: 2, boxShadow: 15 }}>
      <Typography textAlign={'center'} variant={'h4'} fontWeight={'bold'}>
        {currentPoem.length > 0 ? currentPoem[poemIndex].title : <Skeleton />}
      </Typography>
      <Typography textAlign={'center'} fontStyle={'italic'}>
        by
      </Typography>
      <Typography textAlign={'center'} variant={'h6'} gutterBottom>
        {currentPoem.length > 0 ? currentPoem[poemIndex].author : <Skeleton />}
      </Typography>
      <hr />
      {currentPoem.length > 0 ? (
        currentPoem[poemIndex].lines.map((line) => (
          <Typography>{line}</Typography>
        ))
      ) : (
        <Skeleton />
      )}
      <PoemActions
        loadNewPoem={loadPoem}
        nextPoem={nextPoem}
        prevPoem={prevPoem}
      />
    </Paper>
  );
}
