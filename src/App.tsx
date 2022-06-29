import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import PoemDisplay from './components/PoemDisplay';

function App() {
  return (
    <Container maxWidth="md">
      <Typography textAlign="center" variant="h3" marginTop={3}>
        Discover Poetry
      </Typography>
      <Grid
        container
        direction={'column'}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        style={{ minHeight: '70vh' }}
        spacing={0}
      >
        <Grid item>
          <Box minWidth={'60vw'}>
            <PoemDisplay />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
