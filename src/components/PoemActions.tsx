import { Box, Button, Paper, Stack } from '@mui/material';
import React from 'react';

interface PoemActionsProps {
  loadNewPoem: () => void;
}

export default function PoemActions({ loadNewPoem }: PoemActionsProps) {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Button variant={'contained'} sx={{ mx: 1 }} disabled>
        Previous
      </Button>
      <Button
        variant={'contained'}
        sx={{ mx: 1 }}
        onClick={() => loadNewPoem()}
      >
        Get New Poem
      </Button>
      <Button variant={'contained'} sx={{ mx: 1 }} disabled>
        Next
      </Button>
    </Box>
  );
}
