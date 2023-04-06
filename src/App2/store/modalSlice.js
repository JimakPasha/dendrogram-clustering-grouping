import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setOpenModal(state) {
      state = false;
    },
    setCloseModal(state) {
      state = true;
    },
  },
});

export const { setOpenModal, setCloseModal } = modalSlice.actions;
