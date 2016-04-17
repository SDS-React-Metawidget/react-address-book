import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'app/components/App';
import Home from 'app/views/Home';
import Contact from 'app/views/Contact';
import EditContact from 'app/views/EditContact';


export default function getRoutes(store) { // eslint-disable-line no-unused-vars
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/contact/:id" component={Contact} />
      <Route path="/contact/:id/edit" component={EditContact} />
      <Route path="*" component={null} status={404} />
    </Route>
  );
}
