import { AppBar, Paper, Skeleton, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Poem from '../models/poems';
import PoemActions from './PoemActions';
import PoemService from '../services/poem';

export default function PoemDisplay() {
  const [isLoading, setIsLoading] = useState(true);
  const [poems, setPoems] = useState<Poem[]>([]);
  const [poemIndex, setPoemIndex] = useState(0);

  useEffect(() => {
    loadPoem();
  }, []);

  const loadPoem = async () => {
    const res = await PoemService.getRandomPoem();
    const newPoems = [...poems, ...[res]].flat(); // TODO: Fix this appropriately
    setPoems(newPoems);
    setPoemIndex(0);
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
        {poems.length > 0 ? poems[poemIndex].title : <Skeleton />}
      </Typography>
      <Typography textAlign={'center'} fontStyle={'italic'}>
        by
      </Typography>
      <Typography textAlign={'center'} variant={'h6'} gutterBottom>
        {poems.length > 0 ? poems[poemIndex].author : <Skeleton />}
      </Typography>
      <hr />
      {poems.length > 0 ? (
        poems[poemIndex].lines.map((line, index) => (
          <Typography key={index}>{line}</Typography>
        ))
      ) : (
        <Skeleton />
      )}
      <AppBar position="fixed" sx={{ top: 'auto', bottom: 0, py: 0.25 }}>
        <PoemActions
          poems={poems}
          poemIndex={poemIndex}
          loadNewPoem={loadPoem}
          nextPoem={nextPoem}
          prevPoem={prevPoem}
        />
      </AppBar>
    </Paper>
  );
}
