'use strict';

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
};

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
    }
  }return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
  };
}();

var _dec, _dec2, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxAsyncConnect = require('redux-async-connect');

var _reactRedux = require('react-redux');

require('app/assets/stylus/reset.styl');

require('./styles.styl');

require('bootstrap/dist/css/bootstrap.css');

require('bootstrap/dist/css/bootstrap-theme.css');

var _Header = require('app/components/Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

// FIXME
var App = (_dec = (0, _reduxAsyncConnect.asyncConnect)({
  promise: function promise(params, _ref) {
    var _ref$store = _ref.store;
    var dispatch = _ref$store.dispatch;
    var getState = _ref$store.getState;

    var promises = [];
    var state = getState();

    if (state.something) {
      // FIXME
      dispatch({});
    }

    return Promise.all(promises);
  }
}), _dec2 = (0, _reactRedux.connect)(function (state) {
  return {
    something: state.something };
}), _dec(_class = _dec2(_class = (_temp = _class2 = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', null, _react2.default.createElement(_Header2.default, null), _react2.default.createElement('div', { className: 'container' }, this.props.children));
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return App;
}(_react.Component), _class2.propTypes = {
  children: _react.PropTypes.node
}, _temp)) || _class) || _class);
exports.default = App;

//# sourceMappingURL=index-compiled.js.map

//# sourceMappingURL=index-compiled-compiled.js.map

//# sourceMappingURL=index-compiled-compiled-compiled.js.map