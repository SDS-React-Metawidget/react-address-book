import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.css';
import 'app/assets/stylus/reset.styl';
import './styles.styl';


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
        {this.props.children}
      </div>
    );
  }
}
