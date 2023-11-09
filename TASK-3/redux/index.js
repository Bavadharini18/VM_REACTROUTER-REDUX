import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider ,configureStore} from 'react-redux';
import { userReducer } from './features/user';
// import { themeReducer } from './features/theme';
// import {store} from './store';

const store =configureStore({
  reducer: {
    user: userReducer
    // theme: themeReducer
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store }>
    <App />
    </Provider>
    
  </React.StrictMode>
);

