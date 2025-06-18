import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Ensure you have a CSS file for global styles
import App from './App';
import { Provider } from 'react-redux';
import { store } from './Store/Store'; // path based on your file structure

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}> 
    {/* The Provider component makes the Redux store available to the rest of your app */}
    {/* It wraps the App component, allowing all components within it to access the Redux store */}
    <App />
  </Provider>
);
