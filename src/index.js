import React from 'react';
import { createRoot } from 'react-dom/client'
import App from './App';
import './index.css';
import './Tooltip/tippy.css';

import { Provider } from 'react-redux';
import store from './state/createStore';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
