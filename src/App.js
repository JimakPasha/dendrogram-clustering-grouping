import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { Router } from './router';
import './index.css';

export const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};
