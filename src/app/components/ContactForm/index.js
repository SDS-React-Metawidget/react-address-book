import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';

import { addContact, updateContact } from 'app/actions/contacts';


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

    if(this.props.id) {
      this.props.updateContact(this.props.id, { firstName, lastName, details });
    } else {
      this.props.addContact({ firstName, lastName, details });
    }
  }

  render() {
    const { firstName, lastName, details } = this.props;
    return (
      <form>
        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="fname">First name:</label>
            <input className="form-control" id="fname" ref="fname" type="text" value={firstName} />
          </div>
          
          <div className="form-group col-md-6">
            <label htmlFor="lname">Last name:</label>
            <input className="form-control" id="lname" ref="lname" type="text" value={lastName} />
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-6">
            <label htmlFor="fname">First name:</label>
            <input className="form-control" id="fname" ref="fname" type="text" value={firstName} />
          </div>
          
          <div className="form-group col-md-6">
            <label htmlFor="lname">Last name:</label>
            <input className="form-control" id="lname" ref="lname" type="text" value={lastName} />
          </div>
        </div>

        <label htmlFor="details">Details:</label>
        <textarea id="details" ref="details">{details}</textarea>
        <br />
        <button className="btn btn-default" onClick={this.save}>Save</button>
      </form>
    );
  }
}
