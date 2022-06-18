import { Paper, Skeleton, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Poem from '../models/poems';
import PoemActions from './PoemActions';
import PoemService from '../services/poem';

export default function PoemDisplay() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPoem, setCurrentPoem] = useState<Poem[]>([
    { title: '', author: '', lines: [''], lineCount: '' },
  ]);

  useEffect(() => {
    loadPoem();
    setIsLoading(false);
  }, []);

  const loadPoem = async () => {
    const res = await PoemService.getRandomPoem(1);
    setCurrentPoem(res);
  };

  return (
    <Paper sx={{ padding: 2, boxShadow: 15 }}>
      <Typography textAlign={'center'} variant={'h4'}>
        {currentPoem[0].title}
      </Typography>
      <Typography textAlign={'center'}>by</Typography>
      <Typography textAlign={'center'} variant={'h6'} gutterBottom>
        {currentPoem[0].author}
      </Typography>
      <hr />
      <Typography p={6}>{currentPoem[0].lines}</Typography>
      <PoemActions loadNewPoem={loadPoem} />
    </Paper>
  );
}
