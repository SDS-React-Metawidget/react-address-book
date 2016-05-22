import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

import { selectContact } from 'app/actions/contact';
import Contact from 'app/components/Contact';

// import styles from './styles.styl';


@asyncConnect({
  promise: (params, { store: { dispatch } }) => {
    const promises = [];

    dispatch(selectContact(params.id));

    return Promise.all(promises);
  },
})
@connect(state => {
  return {
    contact: state.contacts.contacts[state.contact.id],
  };
})
export default class ContactView extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    contact: PropTypes.object,
  };

  /*
    Select Bootstrap HTML elements to structure the view contact template.
    Remember, you virtually look up a component on their website and copy
    and paste the code...first look over the components and think of which
    ones would work together in this template to display the 'contact'.

    Here an example of HTML being populated by the current available 'contact'
    attributes
    <td>
      <span><Link to={`/contact/${id}`}>{lastName}, {firstName}</Link></span>
    </td>
    <td>{details}</td>
    
    Keep the Helment element and try adding Bootstrap button classes to the Link
    elements.
  */
  render() {
    const { contact } = this.props;
    return (
      <div>
        <div className="page-header">
          <h1>Contact</h1>
        </div>
        <Helmet title="Viewing contact | React Address Book" />
        <Contact {...contact} />
        <Link to={`/contact/${contact.id}/edit`}>Edit</Link>
        <Link to="/">Home</Link>
      </div>
    );
  }
}
