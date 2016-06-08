'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRedux = require('react-redux');

var _contacts = require('app/actions/contacts');

var _cool = require('./cool.styl');

var _cool2 = _interopRequireDefault(_cool);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchPanel = (_dec = (0, _reactRedux.connect)(null, {
  addContact: _contacts.addContact,
  updateContact: _contacts.updateContact
}), _dec(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(SearchPanel, _Component);

  function SearchPanel() {
    var _Object$getPrototypeO;

    var _temp, _this, _ret;

    _classCallCheck(this, SearchPanel);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(SearchPanel)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.save = function () {
      var firstName = (0, _reactDom.findDOMNode)(_this.refs.fname).value;
      var lastName = (0, _reactDom.findDOMNode)(_this.refs.lname).value;
      var details = (0, _reactDom.findDOMNode)(_this.refs.details).value;
      var type = (0, _reactDom.findDOMNode)(_this.refs.contacttype).value;
      var title = (0, _reactDom.findDOMNode)(_this.refs.title).value;
      var email = (0, _reactDom.findDOMNode)(_this.refs.email).value;
      var phone = (0, _reactDom.findDOMNode)(_this.refs.phone).value;
      var address = (0, _reactDom.findDOMNode)(_this.refs.address).value;

      //New fields
      var stuff = { firstName: firstName, lastName: lastName, details: details, type: type, title: title, email: email, phone: phone, address: address };
      if (_this.props.id) {
        _this.props.updateContact(_this.props.id, stuff);
      } else {
        _this.props.addContact(stuff);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(SearchPanel, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var firstName = _props.firstName;
      var lastName = _props.lastName;
      var details = _props.details;
      var type = _props.type;
      var title = _props.title;
      var email = _props.email;
      var phone = _props.phone;
      var address = _props.address;

      return _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'form-group col-md-4' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'fname' },
              'First name:'
            ),
            _react2.default.createElement('input', { className: _cool2.default.form_input, id: 'fname', ref: 'fname', type: 'text', value: firstName })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group col-md-4' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'lname' },
              'Last name:'
            ),
            _react2.default.createElement('input', { className: _cool2.default.form_input, id: 'lname', ref: 'lname', type: 'text', value: lastName })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group col-md-4' },
            '\u2028',
            _react2.default.createElement(
              'label',
              { htmlFor: 'title' },
              'Title:'
            ),
            '\u2028',
            _react2.default.createElement(
              'select',
              { className: _cool2.default.form_select, id: 'title', ref: 'title', defaultValue: title },
              _react2.default.createElement(
                'option',
                { value: 'Mr' },
                'Mr'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Mrs' },
                'Mrs'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Miss' },
                'Miss'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Ms' },
                'Ms'
              )
            ),
            '\u2028'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'form-group col-md-4' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'contacttype' },
              'Contact Type:'
            ),
            _react2.default.createElement(
              'select',
              { className: _cool2.default.form_select, id: 'contacttype', ref: 'contacttype', defaultValue: type },
              _react2.default.createElement(
                'option',
                { value: 'Personal' },
                'Personal'
              ),
              _react2.default.createElement(
                'option',
                { value: 'Business' },
                'Business'
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group col-md-4' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'email' },
              'Email:'
            ),
            _react2.default.createElement('input', { className: _cool2.default.form_input, id: 'email', ref: 'email', type: 'text', value: email })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group col-md-4' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'phone' },
              'Phone:'
            ),
            _react2.default.createElement('input', { className: _cool2.default.form_input, id: 'phone', ref: 'phone', type: 'text', value: phone })
          )
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'label',
            { htmlFor: 'address' },
            'Address:'
          ),
          _react2.default.createElement('input', { className: _cool2.default.form_input, type: 'text', id: 'address', ref: 'address', value: address })
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'label',
          { htmlFor: 'details' },
          'Details:'
        ),
        _react2.default.createElement(
          'textarea',
          { id: 'details', ref: 'details', className: _cool2.default.form_field, placeholder: 'Describe yourself... make it brief... we don\'t want to know too much...\nSimple things...\n\nSo, what\'s your bank details?' },
          details
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement(
          'div',
          { className: _cool2.default.button_wrapper },
          _react2.default.createElement(
            'button',
            { className: 'btn btn-default', onClick: this.save },
            'Save'
          )
        )
      );
    }
  }]);

  return SearchPanel;
}(_react.Component), _class2.propTypes = {
  id: _react.PropTypes.string,
  firstName: _react.PropTypes.string,
  lastName: _react.PropTypes.string,
  details: _react.PropTypes.string,
  type: _react.PropTypes.string,
  title: _react.PropTypes.string,
  email: _react.PropTypes.string,
  phone: _react.PropTypes.string,
  address: _react.PropTypes.string,
  addContact: _react.PropTypes.func,
  updateContact: _react.PropTypes.func
}, _temp2)) || _class);
exports.default = SearchPanel;

//# sourceMappingURL=index-compiled.js.map