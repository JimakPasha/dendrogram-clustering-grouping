import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import {
  addNodeToParent,
  removeNode,
  renameNode as renameNodeHepler,
} from './helpers';

const initialState = {
  tree: null,
};

export const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    setTree(state, { payload }) {
      state.tree = payload;
    },
    addNewNode(state, { payload }) {
      const newNode = { id: uuidv4(), name: payload.newNodeName };
      state.tree = addNodeToParent(state.tree, payload.parentNodeId, newNode);
    },
    deleteNode(state, { payload }) {
      state.tree = removeNode(state.tree, payload);
    },
    renameNode(state, { payload }) {
      state.tree = renameNodeHepler(
        state.tree,
        payload.nodeId,
        payload.newName
      );
    },
  },
});

export const { setTree, addNewNode, deleteNode, renameNode } =
  treeSlice.actions;
