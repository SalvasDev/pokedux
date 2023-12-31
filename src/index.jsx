// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.jsx';
// import { Provider } from 'react-redux';
// import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
// import { logger } from './middlewares/index.js';
// import './index.css';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers/rootReducer.js';

// const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const composedEnhancers = composeAlt(applyMiddleware(thunk, logger));

// const store = createStore(rootReducer, composedEnhancers);


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import { store } from './store';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);



