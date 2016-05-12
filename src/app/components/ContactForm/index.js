import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import metawidget from 'metawidget';

import { addContact, updateContact } from 'app/actions/contacts';
import Metawidget from 'app/components/Metawidget';


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

  save = () => {
    const firstName = findDOMNode(this.refs.fname).value;
    const lastName = findDOMNode(this.refs.lname).value;
    const details = findDOMNode(this.refs.details).value;

    if (this.props.id) {
      this.props.updateContact(this.props.id, { firstName, lastName, details });
    } else {
      this.props.addContact({ firstName, lastName, details });
    }
  }

  render() {
    const { firstName, lastName, details } = this.props;
    return (
      <div>
        <Metawidget
          toInspect={this.props}
          config={{
            inspector: new metawidget.inspector.CompositeInspector([
              new metawidget.inspector.PropertyTypeInspector(),
              new metawidget.inspector.JsonSchemaInspector({
                properties: {
                  details: {
                    large: true,
                  },
                },
              }),
            ]),
          }} />
        <label htmlFor="fname">First name:</label>
        <input id="fname" ref="fname" type="text" value={firstName} />
        <br />
        <label htmlFor="lname">Last name:</label>
        <input id="lname" ref="lname" type="text" value={lastName} />
        <br />
        <label htmlFor="details">Details:</label>
        <textarea id="details" ref="details">{details}</textarea>
        <br />
        <button onClick={this.save}>Save</button>
      </div>
    );
  }
}
