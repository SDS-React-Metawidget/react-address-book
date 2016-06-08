'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

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

var _dec, _class, _class2, _temp2; /**
                                    * Created by ryansoury on 19/05/2016.
                                    */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _contacts = require('app/actions/contacts');

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

var Remove = (_dec = (0, _reactRedux.connect)(null, {
  deleteContact: _contacts.deleteContact
}), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Remove, _Component);

  function Remove() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, Remove);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Remove)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.remove = function () {
      _this.props.deleteContact(_this.props.id);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Remove, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement('button', { className: 'btn btn-default', onClick: this.remove }, 'Remove');
    }
  }]);

  return Remove;
}(_react.Component), _class2.propTypes = {
  id: _react.PropTypes.string,
  deleteContact: _react.PropTypes.func
}, _temp2)) || _class);
exports.default = Remove;

//# sourceMappingURL=remove-compiled.js.map

//# sourceMappingURL=remove-compiled-compiled.js.map