import { createSlice } from '@reduxjs/toolkit';
import { addNodeToParent, removeNode } from './helpers'

const initialState = {
  tree: {
    name: 'Root',
    children: [
      {
        name: 'Child 1',
        children: [
          { name: 'Grandchild 1' },
          { name: 'Grandchild 2' },
          {
            name: 'Grandchild 3',
            children: [
              { name: 'GrandGrandchild 1' },
              { name: 'GrandGrandchild 2' },
              { name: 'GrandGrandchild 3' },
            ],
          },
        ],
      },
      {
        name: 'Child 2',
        children: [{ name: 'Grandchild 4' }, { name: 'Grandchild 5' }],
      },
      {
        name: 'Child 3',
        children: [
          { name: 'Grandchild 6' },
          { name: 'Grandchild 7' },
          { name: 'Grandchild 8' },
          { name: 'Grandchild 9' },
        ],
      },
      {
        name: 'Child 4',
        children: [
          { name: 'Grandchild 10' },
          { name: 'Grandchild 11' },
          { name: 'Grandchild 12' },
          { name: 'Grandchild 13' },
        ],
      },
      {
        name: 'Child 5',
        children: [{ name: 'Grandchild 14' }],
      },
    ],
  }
};

export const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
    addNewNode(state, {payload}) {
      const newNode = { name: payload.newNodeName};
      state.tree = addNodeToParent(state.tree, payload.parentNode, newNode);
    },
    deleteNode(state, {payload}) {
      state.tree = removeNode(state.tree, payload.nodeName);
    }
  },
});

export const { addNewNode, deleteNode } = treeSlice.actions;
