import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import filter from 'lodash/filter';

import Contact from 'app/components/Contact';


@connect(state => {
  return {
    contacts: state.contacts.list,
  };
})
export default class SearchPanel extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    filter: PropTypes.object,
  };

  getContacts = () => {
    return filter(this.props.contacts, Object.keys(this.props.filter)
      .reduce((acc, key) => {
        return (obj) => {
          return acc(obj) && obj[key].indexOf(this.props.filter[key]) !== -1;
        };
      }, () => true));
  }

  render() {
    return (
      <div>
        {this.getContacts().map(({ firstName, lastName, details }) => {
          return (
            <Contact
              key={`${firstName}-${lastName}`}
              firstName={firstName}
              lastName={lastName}
              details={details} />
          );
        })}
      </div>
    );
  }
}
