import { Paper, Typography } from '@mui/material';
import React from 'react';
import PoemActions from './PoemActions';

export default function PoemDisplay() {
  return (
    <Paper sx={{ padding: 2, boxShadow: 15 }}>
      <Typography textAlign={'center'} variant={'h4'}>
        Title
      </Typography>
      <Typography textAlign={'center'}>by</Typography>
      <Typography textAlign={'center'} variant={'h6'} gutterBottom>
        Author
      </Typography>
      <hr />
      <Typography p={6}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut tenetur
        eveniet non, natus tempora repellendus iusto, excepturi iure, quasi ea
        incidunt vero distinctio laudantium sit pariatur deleniti expedita porro
        reiciendis?
      </Typography>
      <PoemActions />
    </Paper>
  );
}
