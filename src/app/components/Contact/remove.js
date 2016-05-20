/**
 * Created by ryansoury on 19/05/2016.
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { deleteContact } from 'app/actions/contacts';


@connect(null, {
  deleteContact,
})
export default class Remove extends Component {
  static propTypes = {
    id: PropTypes.string,
    deleteContact: PropTypes.func,
  };

  remove = () => {
    this.props.deleteContact(this.props.id);
  };

  render() {
    return (
      <button className="btn btn-default" onClick={this.remove}>Remove</button>
    );
  }
}
