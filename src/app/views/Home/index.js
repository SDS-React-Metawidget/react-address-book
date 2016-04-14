import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Helmet from 'react-helmet';

import ContactsPanel from 'app/components/ContactsPanel';
import SearchPanel from 'app/components/SearchPanel';


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
        <SearchPanel />
        <ContactsPanel filter={filter} />
      </div>
    );
  }
}
