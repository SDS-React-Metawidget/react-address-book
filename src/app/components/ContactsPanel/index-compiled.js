'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _search = require('app/lib/search');

var _search2 = _interopRequireDefault(_search);

var _Contact = require('app/components/Contact');

var _Contact2 = _interopRequireDefault(_Contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchPanel = (_dec = (0, _reactRedux.connect)(function (state) {
  return {
    contacts: state.contacts.contacts
  };
}), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(SearchPanel, _Component);

  function SearchPanel() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SearchPanel)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.getContacts = function () {
      return (0, _search2.default)(Object.values(_this.props.contacts), _this.props.filter);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchPanel, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'table',
        { className: 'table table-striped' },
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Name'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Details'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Action'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          this.getContacts().map(function (contact) {
            return _react2.default.createElement(_Contact2.default, _extends({
              key: contact.id
            }, contact));
          })
        )
      );
    }
  }]);

  return SearchPanel;
}(_react.Component), _class2.propTypes = {
  contacts: _react.PropTypes.object,
  filter: _react.PropTypes.object
}, _temp2)) || _class);
exports.default = SearchPanel;

//# sourceMappingURL=index-compiled.js.map