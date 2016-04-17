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

  render() {
    const { contact } = this.props;
    return (
      <div>
        <Helmet title="Viewing contact | React Address Book" />
        <Link to="/">Home</Link>
        <Contact {...contact} />
        <Link to={`/contact/${contact.id}/edit`}>Edit</Link>
      </div>
    );
  }
}
