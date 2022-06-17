import { Box, Button, Paper, Stack } from '@mui/material';
import React from 'react';

export default function PoemActions() {
  return (
    <Box display={'flex'} justifyContent={'center'}>
      <Button variant={'contained'} sx={{ mx: 1 }} disabled>
        Previous
      </Button>
      <Button variant={'contained'} sx={{ mx: 1 }}>
        Get New Poem
      </Button>
      <Button variant={'contained'} sx={{ mx: 1 }} disabled>
        Next
      </Button>
    </Box>
  );
}
