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
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <form>
              <div className="form-group">
              <label htmlFor="fname">First name</label>
              <input className="form-control" id="fname" ref="fname" type="text" onChange={this.search} />
              </div>
              <div className="form-group">
              <label htmlFor="lname">Last name</label>
              <input className="form-control" id="lname" ref="lname" type="text" onChange={this.search} />
              </div>
              <button className="btn btn-default" onClick={this.search}>Search</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
