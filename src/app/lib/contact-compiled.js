"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Contact = function () {
  function Contact(_ref) {
    var id = _ref.id;
    var firstName = _ref.firstName;
    var lastName = _ref.lastName;
    var details = _ref.details;
    var type = _ref.type;
    var title = _ref.title;
    var email = _ref.email;
    var phone = _ref.phone;
    var address = _ref.address;

    _classCallCheck(this, Contact);

    Object.defineProperties(this, {
      id: {
        enumerable: true,
        value: null,
        writable: true
      },
      firstName: {
        enumerable: true,
        value: null,
        writable: true
      },
      lastName: {
        enumerable: true,
        value: null,
        writable: true
      },
      details: {
        enumerable: true,
        value: null,
        writable: true
      },
      type: {
        enumerable: true,
        value: null,
        writable: true
      },
      title: {
        enumerable: true,
        value: null,
        writable: true
      },
      email: {
        enumerable: true,
        value: null,
        writable: true
      },
      phone: {
        enumerable: true,
        value: null,
        writable: true
      },
      address: {
        enumerable: true,
        value: null,
        writable: true
      }
    });
    Object.seal();
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.details = details;
    this.type = type;
    this.title = title;
    this.email = email;
    this.phone = phone;
    this.address = address;
  }

  _createClass(Contact, [{
    key: "update",
    value: function update() {
      var _this = this;

      var details = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      Object.entries(details).filter(function (_ref2) {
        var _ref3 = _slicedToArray(_ref2, 2);

        var detail = _ref3[1];
        return detail;
      }).forEach(function (_ref4) {
        var _ref5 = _slicedToArray(_ref4, 2);

        var key = _ref5[0];
        var detail = _ref5[1];

        _this[key] = detail;
      });
      return this;
    }
  }]);

  return Contact;
}();

exports.default = Contact;

//# sourceMappingURL=contact-compiled.js.map