import React, { useState } from 'react';
import {
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
  Pagination,
  TextField,
  Divider,
} from '@mui/material';
import { Delete, Favorite, FavoriteBorder } from '@material-ui/icons';
import { useSelector } from 'react-redux';

const PAGE_SIZE = 10;

const CommentForm = ({ onPostComment }) => {
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!author.trim() || !text.trim()) {
      return;
    }
    onPostComment({ author, text });
    setAuthor('');
    setText('');
  };

  return (
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
      <Box display="flex" justifyContent="flex-end">
        <Button type="submit" variant="contained">
          Post Comment
        </Button>
      </Box>
    </form>
  );
};

export const CommentsList = () => {
  const { comments } = useSelector((state) => state.comments);
  console.log(comments);
  const [page, setPage] = useState(1);
  const [commentsData, setCommentsData] = useState(comments);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleLikeComment = (commentId) => {
    setCommentsData((prevComments) =>
      prevComments.map((comment) => {
        if (comment.id === commentId) {
          return { ...comment, liked: !comment.liked };
        }
        return comment;
      })
    );
  };

  const handleDeleteComment = (commentId) => {
    setCommentsData((prevComments) =>
      prevComments.filter((comment) => comment.id !== commentId)
    );
  };

  const handlePostComment = (newComment) => {
    const newId = commentsData.length + 1;
    const newCommentData = { id: newId, ...newComment, liked: false };
    setCommentsData((prevComments) => [...prevComments, newCommentData]);
  };

  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const displayedComments = [...commentsData]
    .reverse()
    .slice(startIndex, endIndex);

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
          count={Math.ceil(commentsData.length / PAGE_SIZE)}
          page={page}
          onChange={handleChangePage}
        />
      </Box>
      <CommentForm onPostComment={handlePostComment} />
    </Box>
  );
};
