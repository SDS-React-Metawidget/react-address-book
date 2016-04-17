import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as reduxAsyncConnect } from 'redux-async-connect';

import contacts from './contacts';
import contact from './contact';
import search from './search';


export default combineReducers({
  reduxAsyncConnect,
  routing: routerReducer,

  contacts,
  contact,
  search,
});
