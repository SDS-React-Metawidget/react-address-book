'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRouter = require('react-router');

var _contact = require('app/actions/contact');

var _ContactForm = require('app/components/ContactForm');

var _ContactForm2 = _interopRequireDefault(_ContactForm);

var _styles = require('./styles.styl');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var EditContactView = function (_Component) {
  _inherits(EditContactView, _Component);

  function EditContactView() {
    _classCallCheck(this, EditContactView);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(EditContactView).apply(this, arguments));
  }

  _createClass(EditContactView, [{
    key: 'render',
    // eslint-disable-line react/prefer-stateless-function
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactHelmet2.default, { title: 'Creating new contact | React Address Book' }),
        _react2.default.createElement(
          'div',
          { className: 'page-header' },
          _react2.default.createElement(
            'h1',
            null,
            'Add Contact'
          )
        ),
        _react2.default.createElement(_ContactForm2.default, null),
        _react2.default.createElement(
          'div',
          { className: _styles2.default.button_wrapper },
          _react2.default.createElement(
            _reactRouter.Link,
            { className: 'btn btn-default', to: '/' },
            'Home'
          )
        )
      );
    }
  }]);

  return EditContactView;
}(_react.Component);

exports.default = EditContactView;

//# sourceMappingURL=index-compiled.js.map