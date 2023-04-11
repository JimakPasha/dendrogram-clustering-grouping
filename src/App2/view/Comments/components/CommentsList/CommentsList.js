import React, { useState } from 'react';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Pagination,
} from '@mui/material';
import { Delete, Favorite, FavoriteBorder } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleLikeComment,
  deleteComment,
} from './../../../../store/commentsSlice';

const PAGE_SIZE = 10;

export const CommentsList = () => {
  const dispatch = useDispatch();
  const { comments } = useSelector((state) => state.comments);
  const [page, setPage] = useState(1);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleLikeComment = (commentId) => {
    dispatch(toggleLikeComment(commentId));
  };

  const handleDeleteComment = (commentId) => {
    dispatch(deleteComment(commentId));
  };

  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const displayedComments = [...comments].reverse().slice(startIndex, endIndex);

  return (
    <Box mt={2}>
      <List>
        {displayedComments.map(({ id, author, text, liked }) => (
          <ListItem key={id}>
            <ListItemText primary={author} secondary={text} />
            <ListItemSecondaryAction>
              <IconButton onClick={() => handleLikeComment(id)} edge="end">
                {liked ? <Favorite color="primary" /> : <FavoriteBorder />}
              </IconButton>
              <IconButton onClick={() => handleDeleteComment(id)} edge="end">
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Box mt={2} mb={2} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(comments.length / PAGE_SIZE)}
          page={page}
          onChange={handleChangePage}
        />
      </Box>
    </Box>
  );
};
