import { configureStore } from '@reduxjs/toolkit';
import { modalMenuSlice } from './modalMenuSlice';
import { treeSlice } from './treeSlice';

export const store = configureStore({
  reducer: {
    modalMenu: modalMenuSlice.reducer,
    tree: treeSlice.reducer,
  },
});
