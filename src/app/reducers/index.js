import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

import contacts from './contacts';
import search from './search';


export default combineReducers({
  reduxAsyncConnect,
  routing: routerReducer,

  contacts,
  search,
});
