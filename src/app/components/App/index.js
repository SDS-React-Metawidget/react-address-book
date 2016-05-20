import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';

import 'app/assets/stylus/reset.styl';
import './styles.styl';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';


import Header from 'app/components/Header';


@asyncConnect({
  promise: (params, { store: { dispatch, getState } }) => {
    const promises = [];
    const state = getState();

    if (state.something) { // FIXME
      dispatch({});
    }

    return Promise.all(promises);
  },
})
@connect(state => {
  return {
    something: state.something, // FIXME
  };
})
export default class App extends Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}
