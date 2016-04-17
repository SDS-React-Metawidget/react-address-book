import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

import { selectContact } from 'app/actions/contact';
import ContactForm from 'app/components/ContactForm';

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
export default class EditContactView extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    contact: PropTypes.object,
  };

  render() {
    const { contact } = this.props;
    return (
      <div>
        <Helmet title="Editing contact | React Address Book" />
        <Link to="/">Home</Link>
        <ContactForm {...contact} />
      </div>
    );
  }
}
