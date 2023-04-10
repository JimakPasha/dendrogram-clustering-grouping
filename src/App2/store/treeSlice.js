import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import {
  addNodeToParent,
  removeNode,
  renameNode as renameNodeHepler,
} from './helpers';

const initialState = {
  tree: {
    id: 'd5f5a7b5-2a9e-4d9c-9f7a-1d3c3c3e3f3e',
    name: 'Root',
    children: [
      {
        id: '3c6d9c9f-1a2b-4e5f-8c9d-0a1b2c3d4e5f',
        name: 'Child 1',
        children: [
          { id: '8a7b6c5d-4e3f-2a1b-9c8d-7e6f5g4h3i2j', name: 'Grandchild 1' },
          { id: '1a2b3c4d-5e6f-7g8h-9i1j-2k3l4m5n6o', name: 'Grandchild 2' },
          {
            id: '7a8b9c1d-2e3f-4g5h-6i7j-8k9l1m2n3o',
            name: 'Grandchild 3',
            children: [
              {
                id: '4a5b6c7d-8e9f-1g2h-3i4j-5k6l7m8n9o',
                name: 'GrandGrandchild 1',
              },
              {
                id: '9a8b7c6d-5e4f-3g2h-1i9j-8k7l6m5n4o',
                name: 'GrandGrandchild 2',
              },
              {
                id: '2a3b4c5d-6e7f-8g9h-1i2j-3k4l5m6n7o',
                name: 'GrandGrandchild 3',
              },
            ],
          },
        ],
      },
      {
        id: '5a6b7c8d-9e1f-2g3h-4i5j-6k7l8m9n1o',
        name: 'Child 2',
        children: [
          { id: 'e21f9781-af6e-4ba6-af53-694465980287', name: 'Grandchild 4' },
          { id: 'd7d6505e-5762-4a03-9300-22ff2d625244', name: 'Grandchild 5' },
        ],
      },
      {
        id: '3a2b1c4d-5e6f-9g8h-7i1j-2k3l4m5n6o',
        name: 'Child 3',
        children: [
          { id: '09b069df-0ee0-4853-8b83-0e22d3ea03ab', name: 'Grandchild 6' },
          { id: '13dfad1b-6a52-435e-96d6-5c3151a344b7', name: 'Grandchild 7' },
          { id: '15c00dd9-eb18-4ea8-8517-1cd1422a4d47', name: 'Grandchild 8' },
          { id: 'e9eca96a-cea5-4c17-9137-62c66831d209', name: 'Grandchild 9' },
        ],
      },
      {
        id: '6a7b8c9d-1e2f-3g4h-5i6j-7k8l9m1n2o',
        name: 'Child 4',
        children: [
          { id: 'd9fff316-5392-43ef-a389-f42f4fd9f957', name: 'Grandchild 10' },
          { id: '07b980e7-f836-4e7c-ade0-2a5f6b753c54', name: 'Grandchild 11' },
          { id: 'dcd821ea-56b0-4bae-bfaa-4e0d8d7008a6', name: 'Grandchild 12' },
          { id: '2aa6e576-62cb-4e38-9b76-c6791170ffdc', name: 'Grandchild 13' },
        ],
      },
      {
        id: '1a9b8c7d-6e5f-4g3h-2i1j-9k8l7m6n5o',
        name: 'Child 5',
        children: [
          { id: '0acf3111-4ac6-4313-9cbf-7effc46ecdbc', name: 'Grandchild 14' },
        ],
      },
    ],
  },
};

export const treeSlice = createSlice({
  name: 'tree',
  initialState,
  reducers: {
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

export const { addNewNode, deleteNode, renameNode } = treeSlice.actions;
