import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

import ContactsPanel from 'app/components/ContactsPanel';
import SearchPanel from 'app/components/SearchPanel';

import styles from './styles.styl';
import addressBookImg from 'app/assets/images/address-book.png';


@connect(state => {
  return {
    filter: state.search.filter,
  };
})
export default class HomeView extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    filter: PropTypes.object,
  };
  render() {
    const { filter } = this.props;
    return (
      <div>
        <Helmet title="Home | React Address Book" />

        <div className="page-header">
          <h1>Home</h1>
        </div>
            
        <SearchPanel />

        <ContactsPanel filter={filter} />
        
        <Link className="btn btn-default" to="/contact">Add New Contact</Link>

      </div>
    );
  }
}
