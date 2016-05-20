import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import { connect } from 'react-redux';
import identity from 'lodash/identity';
import pickBy from 'lodash/pickBy';

import { search } from 'app/actions/search';


@connect(null, {
  search,
})
export default class SearchPanel extends Component {
  static propTypes = {
    search: PropTypes.func,
  };

  search = () => {
    const firstName = findDOMNode(this.refs.fname).value;
    const lastName = findDOMNode(this.refs.lname).value;

    this.props.search(pickBy({
      firstName,
      lastName,
    }, identity));
  }

  render() {
    return (
     <label htmlFor="fname">First name:</label>
      <input id="fname" ref="fname" type="text" onChange={this.search} />
      <br />
      <label htmlFor="lname">Last name:</label>
      <input id="lname" ref="lname" type="text" onChange={this.search} />
      <br />
      <button onClick={this.search}>Search</button>
    );
  }
}
