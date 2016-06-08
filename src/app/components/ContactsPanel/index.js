import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import objectSearch from 'app/lib/search';
import Contact from 'app/components/Contact';


@connect(state => {
  return {
    contacts: state.contacts.contacts,
  };
})
export default class SearchPanel extends Component {
  static propTypes = {
    contacts: PropTypes.object,
    filter: PropTypes.object,
  };

  getContacts = () => {
    return objectSearch(Object.values(this.props.contacts), this.props.filter);
  };

  render() {
    return (
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>E-mail</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Details</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {this.getContacts().map((contact) => (
            <Contact key={contact.id} {...contact} />
          ))}
        </tbody>
      </table>
    );
  }
}
