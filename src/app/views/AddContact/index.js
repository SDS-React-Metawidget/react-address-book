import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

import { selectContact } from 'app/actions/contact';
import ContactForm from 'app/components/ContactForm';

// import styles from './styles.styl';
export default class EditContactView extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Helmet title="Creating new contact | React Address Book" />
        <Link to="/">Home</Link>
        <ContactForm />
      </div>
    );
  }
}
