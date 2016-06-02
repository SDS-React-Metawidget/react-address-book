import React, { Component, PropTypes } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'app/assets/stylus/reset.styl';
import './styles.styl';


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
