import { Box, Button, Paper, Stack } from '@mui/material';
import React from 'react';

interface PoemActionsProps {
  loadNewPoem: () => void;
  nextPoem: () => void;
  prevPoem: () => void;
}

export default function PoemActions({
  loadNewPoem,
  nextPoem,
  prevPoem,
}: PoemActionsProps) {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Button variant={'contained'} sx={{ mx: 1 }} onClick={() => prevPoem()}>
        Previous
      </Button>
      <Button
        variant={'contained'}
        sx={{ mx: 1 }}
        onClick={() => loadNewPoem()}
      >
        Get New Poem
      </Button>
      <Button variant={'contained'} sx={{ mx: 1 }} onClick={() => nextPoem()}>
        Next
      </Button>
    </Box>
  );
}
