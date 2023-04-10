import React from 'react';
import { Grid, Typography } from '@mui/material';
import { CommentsList } from './components';

export const Comments = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Typography variant="h5" align="center" gutterBottom>
          Comments List
        </Typography>
        <CommentsList />
      </Grid>
    </Grid>
  );
};
