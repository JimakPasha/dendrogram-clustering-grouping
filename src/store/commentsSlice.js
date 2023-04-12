import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import { comments } from '../mockData/comments';

const initialState = {
  comments: comments,
};

export const commentsSlice = createSlice({
  name: 'commetns',
  initialState,
  reducers: {
    toggleLikeComment(state, { payload }) {
      state.comments = state.comments.map((comment) =>
        comment.id === payload ? { ...comment, liked: !comment.liked } : comment
      );
    },
    deleteComment(state, { payload }) {
      state.comments = state.comments.filter(
        (comment) => comment.id !== payload
      );
    },
    setComment(state, { payload }) {
      const newCommentData = { id: uuidv4(), ...payload, liked: false };
      state.comments = state.comments
        ? [...state.comments, newCommentData]
        : [newCommentData];
    },
  },
});

export const { toggleLikeComment, deleteComment, setComment } =
  commentsSlice.actions;
