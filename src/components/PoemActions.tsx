import { Box, Button, Paper, Stack } from '@mui/material';
import Poem from '../models/poems';
import React from 'react';

interface PoemActionsProps {
  poems: Poem[];
  poemIndex: number;
  loadNewPoem: () => void;
  nextPoem: () => void;
  prevPoem: () => void;
}

export default function PoemActions({
  poems,
  poemIndex,
  loadNewPoem,
  nextPoem,
  prevPoem,
}: PoemActionsProps) {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Button
        disabled={poemIndex === 0}
        variant={'contained'}
        sx={{ mx: 1 }}
        onClick={() => prevPoem()}
      >
        Previous
      </Button>
      <Button
        variant={'contained'}
        sx={{ mx: 1 }}
        onClick={() => loadNewPoem()}
      >
        Get New Poem
      </Button>
      <Button
        disabled={poemIndex === poems.length - 1}
        variant={'contained'}
        sx={{ mx: 1 }}
        onClick={() => nextPoem()}
      >
        Next
      </Button>
    </Box>
  );
}
