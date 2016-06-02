import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from 'app/components/App';
import Home from 'app/views/Home';
import Contact from 'app/views/Contact';
import EditContact from 'app/views/EditContact';
import AddContact from 'app/views/AddContact';

export default function getRoutes(store) { // eslint-disable-line no-unused-vars
  return (
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/contact/:id" component={Contact} />
      <Route path="/contact/:id/edit" component={EditContact} />
      <Route path="/contact" component={AddContact} />
      <Route path="*" component={null} status={404} />
    </Route>
  );
}
