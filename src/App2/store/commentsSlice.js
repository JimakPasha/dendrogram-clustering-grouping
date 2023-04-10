import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  comments: [
    {
      id: '0ccb7703-3752-45b9-865a-a92e00a303ce',
      author: 'John Doe',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      liked: false,
    },
    {
      id: '14f7523f-e873-47c3-a384-9ed6011bd739',
      author: 'Jane Smith',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      liked: true,
    },
    {
      id: '7a62c529-aa83-4deb-922b-fa0cc6aae016',
      author: 'Gary Johnson',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      liked: false,
    },
    {
      id: 'bbb9bef1-358c-4e1e-b404-852ce1c9d02a',
      author: 'Tony Mills',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      liked: false,
    },
    {
      id: '15ab8f90-6a1b-42c9-9488-5049ec89a9d1',
      author: 'April Morrison',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      liked: false,
    },
    {
      id: '317d7604-9525-4c8e-9a44-d122a49d33b5',
      author: 'Allen Simmons',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      liked: false,
    },
    {
      id: '22a3a6ed-4366-4e08-996a-3c58cc1dbdea',
      author: 'Theodore Cook',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      liked: true,
    },
    {
      id: 'e9d1a628-9a36-4b53-b258-ba4d63ac9f7c',
      author: 'Barbara Cain',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      liked: true,
    },
    {
      id: '93eaa39d-a751-4f03-afc5-bf94ffa6b85c',
      author: 'Dennis White',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      liked: false,
    },
    {
      id: '332c3946-4032-4cf3-87d4-fee2de2aede8',
      author: 'Terri Brown',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      liked: false,
    },
    {
      id: 'f2a33713-fbbe-4b0d-81a2-177a994beb86',
      author: 'Ruby Morris',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      liked: false,
    },
    {
      id: '5183153a-a1c6-44e1-8b34-be2f3504f263',
      author: 'Robert Walker',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      liked: true,
    },
    {
      id: '2c900d44-0f06-4d45-a41b-526a8044e0ab',
      author: 'Salvador Hawkins',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      liked: false,
    },
    {
      id: 'af0c550d-625f-478e-abbb-ce6bae3bbfbe',
      author: 'Martin Rogers',
      text: 'What should I call you?',
      liked: false,
    },
  ],
};

export const commentsSlice = createSlice({
  name: 'commetns',
  initialState,
  reducers: {},
});

export const {} = commentsSlice.actions;
