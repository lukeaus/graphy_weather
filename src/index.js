import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

// ReduxPromise looks at payload property from actions/index.
// If the payload is a promise, it stops the action completely and
// waits for the request to finish.
// Once the action finishes, it dispatches a new action of the new type
// with the payload of the resolved request (i.e. it unwraps the promise).
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
