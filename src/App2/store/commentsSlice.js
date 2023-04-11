import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

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
      text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.',
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
    {
      id: '92be3efa-b260-4fb1-a1a0-a35677b5dc26',
      author: 'Edna Clarke',
      text: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      liked: true,
    },
    {
      id: '6b5b8048-b13f-4bd6-bb90-863d0e96cc76',
      author: 'Seth Lee',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      liked: true,
    },
    {
      id: '0ff3e4cb-3469-4c35-9b87-2111bda74cb3',
      author: 'Seth Lee',
      text: 'It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.',
      liked: false,
    },
    {
      id: 'c530c9e5-845f-4753-8aa7-23e633ad3861',
      author: 'Melinda Lucas',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      liked: false,
    },
    {
      id: '832d19ba-b5ee-47f3-baa5-e41649e65353',
      author: 'Seth Lee',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
      liked: false,
    },
    {
      id: 'af09976f-a72a-4fa8-9731-4ca3c119f598',
      author: 'James Bass',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      liked: true,
    },
    {
      id: '4143d92c-fd40-408e-b9e2-fc6e3def7ed1',
      author: 'Seth Lee',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      liked: true,
    },
    {
      id: '7b844773-f504-4edb-8f28-c189cc801f74',
      author: 'Tiffany Palmer',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      liked: true,
    },
    {
      id: 'eeac6add-d702-4d3b-9c25-c28c23df63e6',
      author: 'Dennis White',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      liked: false,
    },
    {
      id: '3af1abb6-3b0e-4900-bead-19f4d738a88d',
      author: 'Kenneth Todd',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      liked: false,
    },
    {
      id: 'f27bb186-3044-4694-b67a-25cd7f43ded5',
      author: 'Kenneth Todd',
      text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium',
      liked: true,
    },
    {
      id: '12fcf6e0-c1d7-4640-b1db-6bdcdb2da9f6',
      author: 'Paul Cooper',
      text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      liked: true,
    },
    {
      id: '563ad178-6edc-42e7-8011-804bc3b2a4bd',
      author: 'Charlene Harris',
      text: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat',
      liked: true,
    },
    {
      id: '512b3d6b-7ca6-45a9-9f4b-74ff03bed01a',
      author: 'Clifford Holland',
      text: 'What should I call you?',
      liked: false,
    },
  ],
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
      state.comments = [...state.comments, newCommentData];
    },
  },
});

export const { toggleLikeComment, deleteComment, setComment } =
  commentsSlice.actions;
