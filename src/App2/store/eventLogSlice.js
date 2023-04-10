import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  versions: [],
  selectedVersionId: null,
};

export const eventLogSlice = createSlice({
  name: 'eventLog',
  initialState,
  reducers: {
    setNewVersion(state, { payload }) {
      const newVersion = {
        id: uuidv4(),
        versionNumber: state.versions.length + 1,
        date: new Date(),
        tree: payload,
      };
      state.versions.push(newVersion);
      if (!state.selectedVersionId) {
        state.selectedVersionId = newVersion.id;
      }
    },
    setSelctedVersion(state, { payload }) {
      state.selectedVersionId = payload;
    },
  },
});

export const selectTreeEventLog = (state) =>
  state.eventLog.versions.find(
    (version) => version.id === state.eventLog.selectedVersionId
  );

export const { setNewVersion, setSelctedVersion } = eventLogSlice.actions;
