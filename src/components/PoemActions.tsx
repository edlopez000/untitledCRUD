import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Box, Button } from '@mui/material';
import { useEffect } from 'react';
import Poem from '../models/poems';
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
        <ArrowBackIcon />
      </Button>
      <Button
        variant={'contained'}
        sx={{ mx: 1 }}
        onClick={() => loadNewPoem()}
      >
        <RefreshIcon />
      </Button>
      <Button
        disabled={poemIndex === poems.length - 1}
        variant={'contained'}
        sx={{ mx: 1 }}
        onClick={() => nextPoem()}
      >
        <ArrowForwardIcon />
      </Button>
    </Box>
  );
}
