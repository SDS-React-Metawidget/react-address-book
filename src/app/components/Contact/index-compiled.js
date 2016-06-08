'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _remove = require('./remove');

var _remove2 = _interopRequireDefault(_remove);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contact = function Contact(_ref) {
  var id = _ref.id;
  var firstName = _ref.firstName;
  var lastName = _ref.lastName;
  var details = _ref.details;

  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(
        'span',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/contact/' + id },
          lastName,
          ', ',
          firstName
        )
      )
    ),
    _react2.default.createElement(
      'td',
      null,
      details
    ),
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(_remove2.default, { id: id })
    )
  );
};

Contact.propTypes = {
  id: _react.PropTypes.string,
  firstName: _react.PropTypes.string,
  lastName: _react.PropTypes.string,
  details: _react.PropTypes.string
};

exports.default = Contact;

//# sourceMappingURL=index-compiled.js.map