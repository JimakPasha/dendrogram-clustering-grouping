import { configureStore } from '@reduxjs/toolkit';
import { modalMenuSlice } from './modalMenuSlice';
import { treeSlice } from './treeSlice';
import { eventLogSlice } from './eventLogSlice';
import { commentsSlice } from './commentsSlice';

export const store = configureStore({
  reducer: {
    modalMenu: modalMenuSlice.reducer,
    tree: treeSlice.reducer,
    eventLog: eventLogSlice.reducer,
    comments: commentsSlice.reducer,
  },
});
