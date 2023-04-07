import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  nodeInfo: {
    anchorMenuEl: null,
    nodeName: null
  },
  selectedMenuItem: null,
};

export const modalMenuSlice = createSlice({
  name: 'modalMenu',
  initialState,
  reducers: {
    setNodeInfo(state, {payload}) {
      state.nodeInfo = {
        anchorMenuEl: payload.anchorMenuEl,
        nodeName: payload.nodeName,
      };
    },
    cleanAnchorMenuEl(state) {
      state.nodeInfo.anchorMenuEl = null;
    },
    cleanNodeInfo(state) {
      state.nodeInfo = initialState.nodeInfo;
    },
    setSelectedMenuItem(state, {payload}) {
      state.selectedMenuItem = payload;
    },
  },
});

export const { setNodeInfo, cleanAnchorMenuEl, cleanNodeInfo, setSelectedMenuItem } = modalMenuSlice.actions;
