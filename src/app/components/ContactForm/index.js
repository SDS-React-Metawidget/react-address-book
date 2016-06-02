import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { addContact, updateContact } from 'app/actions/contacts';
import { config } from 'app/lib/metawidget';
import Metawidget from 'react-metawidget';


@connect(null, {
  addContact,
  updateContact,
})
export default class SearchPanel extends Component {
  static propTypes = {
    id: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    details: PropTypes.string,
    addContact: PropTypes.func,
    updateContact: PropTypes.func,
  };

  static defaultProps = {
    firstName: ' ',
    lastName: ' ',
    details: ' ',
  };

  save = () => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const details = document.getElementById('details').value;

    if (this.props.id) {
      this.props.updateContact(this.props.id, { firstName, lastName, details });
    } else {
      this.props.addContact({ firstName, lastName, details });
    }
  }

  render() {
    const { firstName, lastName, details } = this.props;
    const toInspect = { firstName, lastName, details, save: this.save };
    console.log(toInspect);
    return (
      <div>
        <Metawidget
          toInspect={toInspect}
          config={config} />
      </div>
    );
  }
}
