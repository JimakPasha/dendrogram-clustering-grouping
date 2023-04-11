import React, { useState } from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setComment } from './../../../../store/commentsSlice';

export const CommentForm = () => {
  const dispatch = useDispatch();
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) {
      return;
    }
    dispatch(setComment({ author, text }));
    setAuthor('');
    setText('');
  };

  return (
    <Box marginBottom={8}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
          margin="normal"
          required
          multiline
          rows={3}
        />
        <Box display="flex" justifyContent="flex-end" marginTop={2}>
          <Button type="submit" variant="contained">
            Post Comment
          </Button>
        </Box>
      </form>
    </Box>
  );
};
