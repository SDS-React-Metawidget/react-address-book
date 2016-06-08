'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRouter = require('react-router');

var _ContactsPanel = require('app/components/ContactsPanel');

var _ContactsPanel2 = _interopRequireDefault(_ContactsPanel);

var _SearchPanel = require('app/components/SearchPanel');

var _SearchPanel2 = _interopRequireDefault(_SearchPanel);

var _styles = require('./styles.styl');

var _styles2 = _interopRequireDefault(_styles);

var _addressBook = require('app/assets/images/address-book.png');

var _addressBook2 = _interopRequireDefault(_addressBook);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HomeView = (_dec = (0, _reactRedux.connect)(function (state) {
  return {
    filter: state.search.filter
  };
}), _dec(_class = (_temp = _class2 = function (_Component) {
  _inherits(HomeView, _Component);

  function HomeView() {
    _classCallCheck(this, HomeView);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(HomeView).apply(this, arguments));
  }

  _createClass(HomeView, [{
    key: 'render',
    value: function render() {
      var filter = this.props.filter;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_reactHelmet2.default, { title: 'Home | React Address Book' }),
        _react2.default.createElement(
          'div',
          { className: 'page-header' },
          _react2.default.createElement(
            'h1',
            null,
            'Home'
          )
        ),
        _react2.default.createElement(_SearchPanel2.default, null),
        _react2.default.createElement(_ContactsPanel2.default, { filter: filter }),
        _react2.default.createElement(
          _reactRouter.Link,
          { className: 'btn btn-default', to: '/contact' },
          'Add New Contact'
        )
      );
    } // eslint-disable-line react/prefer-stateless-function

  }]);

  return HomeView;
}(_react.Component), _class2.propTypes = {
  filter: _react.PropTypes.object
}, _temp)) || _class);
exports.default = HomeView;

//# sourceMappingURL=index-compiled.js.map