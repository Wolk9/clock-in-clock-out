import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from 'redux';
import App from './App';
import './index.css';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  // hier komt jouw Firebase-configuratie
  apiKey: "AIzaSyAfS-I1miPzZZA5Mc9Knj6oKIQw_C-dsUk",
  authDomain: "clockinout-wolk9.firebaseapp.com",
  projectId: "clockinout-wolk9",
  storageBucket: "clockinout-wolk9.appspot.com",
  messagingSenderId: "795930777692",
  appId: "1:795930777692:web:418b79366fdb7ab9772e99",
  measurementId: "G-F7DN5X0377"
};

const container = document.getElementById('root');
const root = createRoot(container);

firebase.initializeApp(firebaseConfig);

const store = configureStore({
  reducer: {
    clockInOut: clockInOutReducer,
  },
});


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


