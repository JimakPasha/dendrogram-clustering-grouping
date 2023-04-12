import React from 'react';
import { useSelector } from 'react-redux';
import { Grid, Typography } from '@mui/material';
import { CommentsList, CommentForm } from './components';

export const Comments = () => {
  const { comments } = useSelector((state) => state.comments);

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8} md={6}>
        <Typography variant="h5" align="center" gutterBottom>
          Post New Comment
        </Typography>
        <CommentForm />
        <Typography variant="h5" align="center" gutterBottom>
          Comments List
        </Typography>
        {comments && <CommentsList />}
      </Grid>
    </Grid>
  );
};
