import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

export default function AppGrid() {
  return(
    <Grid container spacing={2}>
      <Grid size={{ xs: 6, md: 8 }}>
        <Button variant="contained" fullWidth>xs=6 md=8</Button>
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <Button variant="contained" fullWidth>xs=6 md=4</Button>
      </Grid>
      <Grid size={{ xs: 6, md: 4 }}>
        <Button variant="contained" fullWidth>xs=6 md=4</Button>
      </Grid>
      <Grid size={{ xs: 6, md: 8 }}>
        <Button variant="contained" fullWidth>xs=6 md=8</Button>
      </Grid>
    </Grid>
      );
};