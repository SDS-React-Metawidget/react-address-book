import React from 'react';
import ReactDOM from 'react-dom';
import createStore from 'app/redux/store';
import { Provider } from 'react-redux';
import { browserHistory, Router } from 'react-router';
import { ReduxAsyncConnect } from 'redux-async-connect';
import { syncHistoryWithStore } from 'react-router-redux';

import getRoutes from 'app/routes';


const mountPoint = document.getElementById('root');
const store = createStore(getRoutes, browserHistory, window.__data);

const component = (
  <Router
    render={props => (<ReduxAsyncConnect {...props} />)}
    history={syncHistoryWithStore(browserHistory, store)}>
    {getRoutes(store)}
  </Router>
);

ReactDOM.render(
  <Provider store={store} key="provider">
    {component}
  </Provider>,
  mountPoint
);

if (__DEVELOPMENT__) {
  // Enable helpful React warnings/errors
  window.React = React;

  // Error if server-side React render is discarded
  if (!mountPoint
    || !mountPoint.firstChild
    || !mountPoint.firstChild.attributes
    || !mountPoint.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded.'); // eslint-disable-line no-console
  }
}
