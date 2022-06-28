import { Box, Button, Paper, Stack } from '@mui/material';
import Poem from '../models/poems';
import React, { useEffect } from 'react';

interface PoemActionsProps {
  poems: Poem[];
  poemIndex: number;
  loadNewPoem: () => void;
  nextPoem: () => void;
  prevPoem: () => void;
}

interface KeyboardEvent {
  key: string;
}

export default function PoemActions({
  poems,
  poemIndex,
  loadNewPoem,
  nextPoem,
  prevPoem,
}: PoemActionsProps) {
  useEffect(() => {
    document.addEventListener('keydown', keyHandler);

    return () => {
      document.removeEventListener('keydown', keyHandler);
    };
  }, [poemIndex]);

  const keyHandler = (event: KeyboardEvent) => {
    if (event.key === 'ArrowLeft' && poemIndex > 0) {
      prevPoem();
    }
    if (event.key === 'ArrowRight' && poemIndex !== poems.length - 1) {
      nextPoem();
    }
    if (event.key === 'Space') {
      loadNewPoem();
    }
  };

  return (
    <Box display={'flex'} justifyContent={'center'} onKeyDown={keyHandler}>
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
